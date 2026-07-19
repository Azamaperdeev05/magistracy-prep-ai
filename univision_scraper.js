/**
 * Univision.kz Scraper — Master's Programs + Universities
 *
 * Қолдану (usage):
 *   1. npm install cheerio
 *   2. node univision_scraper.js
 *
 * Немесе ештеңе орнатпай-ақ істеу үшін (pure Node.js):
 *   node univision_scraper.js pure
 *
 * "pure" режимінде cheerio қажет емес, бірақ парсинг дәлдігі төмендеу.
 */

const { Agent, setGlobalDispatcher } = require('undici');

/* Connection-pool арқылы TCP+TLS хендшейктерді қайта пайдалану */
setGlobalDispatcher(new Agent({
  keepAliveTimeout: 60000,
  keepAliveMaxTimeout: 120000,
  connections: 200,           // бір хостқа макс 200 параллель
  pipelining: 10,             // бір қосылыста 10 request тізіп жіберу
  connect: { rejectUnauthorized: false }
}));

const BASE = "https://univision.kz";
const MASTER_URL = `${BASE}/kk/edu-program/group/degree/master.html`;
const UNIV_CATALOG_URL = `${BASE}/kk/univ/code.html`;

// ============================================================
// 1. HTML парсинг утилиталары
// ============================================================

/** Атрибут бойынша мән іздеу (regex) */
function attr(html, tagPattern, attrName) {
  const re = new RegExp(`<${tagPattern}[^>]*${attrName}\\s*=\\s*["']([^"']+)["']`, 'i');
  const m = html.match(re);
  return m ? m[1].replace(/^\/\//, 'https://') : '';
}

/** Тег ішіндегі текст алу (бірінші кездескен) */
function tagText(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>([^<]+)<\/${tag}>`, 'i');
  const m = html.match(re);
  return m ? m[1].trim() : '';
}

/** Барлық тексттерді алу */
function allTagTexts(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>([^<]+)<\/${tag}>`, 'gi');
  const results = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    results.push(m[1].trim());
  }
  return results;
}

/** Сілтемелерді алу: href + текст */
function extractLinks(html, parentPattern, itemSelector) {
  // Жалпы: <a class="list-group-item..." href="..."><b>...</b><small>...</small></a>
  const results = [];
  // Табу үшін жуықтап іздеу
  const blockRe = /<a\s[^>]*class="list-group-item[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = blockRe.exec(html)) !== null) {
    const href = m[1].startsWith('http') ? m[1] : (m[1].startsWith('/') ? BASE + m[1] : BASE + '/' + m[1]);
    const inner = m[2];
    const b = (inner.match(/<b[^>]*>([^<]+)<\/b>/i) || [])[1] || '';
    const small = (inner.match(/<small[^>]*>([^<]+)<\/small>/i) || [])[1] || '';
    results.push({ href, text: b, subtitle: small });
  }
  return results;
}

/** <table> парсинг */
function parseTable(html) {
  const theadMatch = html.match(/<thead>([\s\S]*?)<\/thead>/i);
  const tbodyMatch = html.match(/<tbody>([\s\S]*?)<\/tbody>/i);
  if (!theadMatch || !tbodyMatch) return [];

  const headers = [...theadMatch[1].matchAll(/<th[^>]*>([^<]+)<\/th>/gi)].map(m => m[1].trim());
  const rows = [];
  const rowMatches = tbodyMatch[1].matchAll(/<tr>([\s\S]*?)<\/tr>/gi);
  for (const rm of rowMatches) {
    const cells = [...rm[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(m => m[1].trim());
    if (cells.length) {
      const row = {};
      headers.forEach((h, i) => { if (i < cells.length) row[h] = cells[i]; });
      rows.push(row);
    }
  }
  return rows;
}

// ============================================================
// 2. Білім беру бағдарламаларының топтары (магистратура)
// ============================================================

async function scrapeMasterGroups() {
  console.log("🔍 Fetching master's group list...");
  const html = await fetchPage(MASTER_URL);

  // Топ сілтемелерін алу
  const links = extractLinks(html);
  const groups = links.filter(l =>
    l.href.includes('/kk/edu-program/group/') &&
    !l.href.includes('/degree/')
  );

  console.log(`   Found ${groups.length} groups`);

  const results = await runParallel(groups, (g) => scrapeGroupDetail(g.href));

  results.sort((a, b) => (a.code || '').localeCompare(b.code || ''));

  return {
    degree: "Магистратура",
    total_groups: results.length,
    groups: results
  };
}

async function scrapeGroupDetail(url) {
  const html = await fetchPage(url);

  const title = tagText(html, 'h1') || '';
  const code = title.split(/\s+/)[0] || '';

  // Жалпы ақпарат
  const info = {};
  const infoBlocks = html.match(/<li[^>]*class="d-flex pt-2 pb-3 border-bottom"[^>]*>([\s\S]*?)<\/li>/gi) || [];
  for (const block of infoBlocks) {
    const label = (block.match(/<span[^>]*class="fs-ms[^"]*"[^>]*>([^<]+)<\/span>/i) || [])[1];
    const value = (block.match(/<a[^>]*class="nav-link-style[^"]*"[^>]*>([^<]+)<\/a>/i) || [])[1];
    if (label && value) info[label.trim()] = value.trim();
  }

  // Гранттар
  const grants = parseTable(html);

  // Білім беру бағдарламалары
  const epsSection = html.match(/<div[^>]*id="eps"[^>]*>([\s\S]*?)<\/div>\s*<(?!div)/i);
  const programs = epsSection
    ? extractLinks(epsSection[1]).map(l => {
        const name = l.text;
        const codeMatch = name.match(/^([\dA-Z]+)\s(.+)/);
        return {
          code: codeMatch ? codeMatch[1] : '',
          name: codeMatch ? codeMatch[2] : name,
          url: l.href,
          university: l.subtitle
        };
      })
    : [];

  // ЖОО-лар
  const univsSection = html.match(/<div[^>]*id="univs"[^>]*>([\s\S]*?)<\/div>\s*<(?!div)/i);
  const universities = univsSection
    ? extractLinks(univsSection[1]).map(l => l.text)
    : [];

  // Мамандықтар
  const profsSection = html.match(/<div[^>]*id="profs"[^>]*>([\s\S]*?)<\/div>/i);
  const specialties = profsSection
    ? extractLinks(profsSection[1]).map(l => ({ name: l.text, url: l.href }))
    : [];

  return {
    code,
    title,
    url,
    general_info: info,
    grants,
    programs_count: programs.length,
    programs,
    universities_count: universities.length,
    universities,
    specialties_count: specialties.length,
    specialties
  };
}

// ============================================================
// 3. Университеттер
// ============================================================

async function scrapeUniversities() {
  console.log("🔍 Fetching university catalog...");
  const html = await fetchPage(UNIV_CATALOG_URL);

  const links = extractLinks(html);
  const univLinks = links.filter(l => l.href.includes('/kk/univ/') && !l.href.includes('/code.html'));

  console.log(`   Found ${univLinks.length} universities`);

  const results = await runParallel(
    univLinks,
    (ul) => scrapeUniversityDetail(ul.href, (ul.text.match(/^(\d+)/) || [])[1] || '', ul.text)
  );

  results.sort((a, b) => String(a.code || '').localeCompare(String(b.code || '')));

  return {
    total_universities: results.length,
    universities: results
  };
}

async function scrapeUniversityDetail(url, code, rawName) {
  const html = await fetchPage(url);

  const title = tagText(html, 'h1') || rawName;

  // Сипаттама
  const descEls = html.match(/<div[^>]*class="col-md-4 mb-4"[^>]*>([\s\S]*?)<\/div>/g) || [];
  const description = descEls.length > 0
    ? ((descEls[0].match(/<p[^>]*>([^<]+)<\/p>/i) || [])[1] || '').trim()
    : '';

  const descFullMatch = html.match(/<div[^>]*id="collapseDescFull"[^>]*>([\s\S]*?)<\/div>/i);
  const description_full = descFullMatch
    ? ((descFullMatch[1].match(/<p[^>]*>([^<]+)<\/p>/i) || [])[1] || '').trim()
    : '';

  // Жалпы ақпарат (sidebar карта)
  const cardContent = (html.match(/<div[^>]*class="card-body"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i) || [])[1] || '';
  const general = {};

  // Локация
  const mapPin = cardContent.match(/<i[^>]*class="[^"]*ai-map-pin[^"]*"[^>]*>[\s\S]*?<\/i>([\s\S]*?)<\/li>/i);
  if (mapPin) {
    const locLinks = [...mapPin[1].matchAll(/<a[^>]*>([^<]+)<\/a>/gi)];
    if (locLinks.length) {
      general.location = locLinks.map(m => m[1].trim()).join(' | ');
      if (locLinks.length >= 1) general.oblast = locLinks[0][1].trim();
      if (locLinks.length >= 2) general.city = locLinks[1][1].trim();
    }
  }

  // Код
  const tagMatch = cardContent.match(/<i[^>]*class="[^"]*ai-tag[^"]*"[^>]*>[\s\S]*?(\d+)/i);
  if (tagMatch) general.university_code = tagMatch[1].trim();

  // Категория + тип
  const paperclip = cardContent.match(/<i[^>]*class="[^"]*ai-paperclip[^>]*>[\s\S]*?<\/i>([\s\S]*?)<\/li>/i);
  if (paperclip) {
    const catLinks = [...paperclip[1].matchAll(/<a[^>]*>([^<]+)<\/a>/gi)];
    if (catLinks.length >= 1) general.category = catLinks[0][1].trim();
    if (catLinks.length >= 2) general.type = catLinks[1][1].trim();
  }

  // Сайт
  const extLink = cardContent.match(/<i[^>]*class="[^"]*ai-external-link[^>]*>[\s\S]*?<\/i>([\s\S]*?)<\/li>/i);
  if (extLink) {
    const siteMatch = extLink[1].match(/<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/i);
    if (siteMatch) {
      general.website = siteMatch[2].trim();
      general.website_url = siteMatch[1].trim();
    }
  }

  // Білім беру бағдарламалары (сандар)
  const eduPrograms = {};
  const eduBlocks = html.match(/<li[^>]*class="list-group-item d-flex[^>]*">([\s\S]*?)<\/li>/gi) || [];
  for (const block of eduBlocks) {
    const nameMatch = block.match(/(?:^|>)([^<]+?)<\//);
    const countMatch = block.match(/<strong[^>]*>([^<]+)<\/strong>/i);
    if (nameMatch && countMatch) {
      const name = nameMatch[1].trim().replace(/<[^>]+>/g, '').trim();
      if (name && !name.includes('Все')) {
        eduPrograms[name] = parseInt(countMatch[1]) || 0;
      }
    }
  }

  // Студенттер блогы
  const students = {};
  const studentBlock = html.match(/<h2[^>]*class="h4"[^>]*>[\s\S]*?Студент[\s\S]*?<\/h2>([\s\S]*?)(?=<h2|<div[^>]*class="col-md-4"|$)/i);
  if (studentBlock) {
    const totalMatch = studentBlock[1].match(/<b>([^<]+)<\/b>/i);
    if (totalMatch) students.total = totalMatch[1].trim();

    const paymentForms = {};
    const payBlocks = studentBlock[1].match(/<div[^>]*class="fs-sm[^>]*">([\s\S]*?)<\/div>/gi) || [];
    for (const pb of payBlocks) {
      const text = pb.replace(/<[^>]+>/g, '').trim();
      const m = text.match(/^([^-\d]+)\s*[-–]\s*(\d[\s\d]*)/);
      if (m) paymentForms[m[1].trim()] = m[2].trim();
    }
    students.payment_forms = paymentForms;

    // Студент дәрежелері
    const degSection = studentBlock[1].match(/Академические степени[\s\S]*?(?=<h5|<div[^>]*class="univ|$)/i);
    if (degSection) {
      const degrees = {};
      const degBlocks = degSection[0].match(/<div[^>]*class="fs-sm[^>]*">([\s\S]*?)<\/div>/gi) || [];
      for (const db of degBlocks) {
        const text = db.replace(/<[^>]+>/g, '').trim();
        const m = text.match(/^([^-\d]+)\s*[-–]\s*(\d[\s\d]*)/);
        if (m) degrees[m[1].trim()] = parseInt(m[2].trim()) || 0;
      }
      students.degrees = degrees;
    }
  }

  // Оқытушылар
  const teachers = {};
  const teacherBlock = html.match(/<h2[^>]*class="h4"[^>]*>[\s\S]*?Преподавател[\s\S]*?<\/h2>([\s\S]*?)(?=<h2|<div[^>]*class="col-md-4"|$)/i);
  if (teacherBlock) {
    const totalMatch = teacherBlock[1].match(/<b>([^<]+)<\/b>/i);
    if (totalMatch) teachers.total = totalMatch[1].trim();

    const degrees = {};
    const degBlocks = teacherBlock[1].match(/<div[^>]*class="fs-sm[^>]*">([\s\S]*?)<\/div>/gi) || [];
    for (const db of degBlocks) {
      const text = db.replace(/<[^>]+>/g, '').trim();
      const m = text.match(/^([^-\d]+)\s*[-–]\s*(\d[\s\d]*)/);
      if (m) degrees[m[1].trim()] = parseInt(m[2].trim()) || 0;
    }
    teachers.degrees = degrees;
  }

  // Байланыс
  const contacts = [];
  const contactBlock = html.match(/<h2[^>]*class="h4"[^>]*>[\s\S]*?Контакт[\s\S]*?<\/h2>([\s\S]*?)(?=<h2|<hr|$)/i);
  if (contactBlock) {
    const items = contactBlock[1].match(/<li[^>]*class="d-flex[^>]*>([\s\S]*?)<\/li>/gi) || [];
    for (const item of items) {
      const address = (item.match(/<span[^>]*class="fs-ms[^>]*">([^<]+)<\/span>/i) || [])[1];
      const phones = [...item.matchAll(/<a[^>]*href="tel:([^"]+)"[^>]*>([^<]+)<\/a>/gi)].map(m => m[2].trim());
      contacts.push({
        address: (address || '').trim(),
        phones
      });
    }
  }

  return {
    code,
    title,
    url,
    description,
    description_full,
    general_info: general,
    edu_programs: eduPrograms,
    students,
    teachers,
    contacts
  };
}

// ============================================================
// 4. Жалпы көмекші
// ============================================================

async function fetchPage(url) {
  const resp = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
    }
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return await resp.text();
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/** Параллельді өңдеу: items[] әрқайсысына processor() — бірден CONCURRENCY жедел */
async function runParallel(items, processor, label, concurrency = 50) {
  const results = [];
  const total = items.length;
  const batches = Math.ceil(total / concurrency);

  for (let b = 0; b < batches; b++) {
    const batch = items.slice(b * concurrency, (b + 1) * concurrency);
    const promises = batch.map(async (item) => {
      try {
        return { status: 'fulfilled', value: await processor(item) };
      } catch (e) {
        return { status: 'rejected', reason: e };
      }
    });
    const settled = await Promise.allSettled(promises);
    for (const s of settled) {
      if (s.status === 'fulfilled' && s.value.status === 'fulfilled') {
        results.push(s.value.value);
      }
    }
    const done = Math.min((b + 1) * concurrency, total);
    process.stdout.write(`   ${done}/${total}\n`);
  }
  return results;
}

// ============================================================
// 5. Негізгі функция
// ============================================================

async function main() {
  const args = process.argv.slice(2);
  const mode = args[0] || 'all'; // 'programs', 'universities', 'all'

  const fs = await import('fs');

  if (mode === 'programs' || mode === 'all') {
    console.log("\n========== MASTER'S PROGRAMS ==========\n");
    const programsData = await scrapeMasterGroups();
    fs.writeFileSync('univision_master_programs.json', JSON.stringify(programsData, null, 2), 'utf-8');
    console.log(`\n✅ Saved: univision_master_programs.json (${programsData.groups.length} groups)\n`);
  }

  if (mode === 'universities' || mode === 'all') {
    console.log("\n========== UNIVERSITIES ==========\n");
    const univData = await scrapeUniversities();
    fs.writeFileSync('univision_universities.json', JSON.stringify(univData, null, 2), 'utf-8');
    console.log(`\n✅ Saved: univision_universities.json (${univData.universities.length} universities)\n`);
  }

  console.log("✅ Done!");
}

main().catch(err => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
