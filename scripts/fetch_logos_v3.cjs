const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const dataPath = path.join(__dirname, '../data/univision_universities.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function extractDomain(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return null; }
}

function fetchPage(url, maxRedirects = 3) {
  return new Promise((resolve) => {
    if (maxRedirects <= 0) return resolve('');
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { timeout: 4000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = new URL(url).origin + loc;
        return fetchPage(loc, maxRedirects - 1).then(resolve);
      }
      let body = '';
      res.on('data', (c) => { body += c; if (body.length > 30000) { res.destroy(); resolve(body); } });
      res.on('end', () => resolve(body));
    });
    req.on('error', () => resolve(''));
    req.on('timeout', () => { req.destroy(); resolve(''); });
  });
}

function findLogo(html, domain) {
  if (!html) return null;
  const patterns = [
    /<meta\s+property="og:image"\s+content="([^"]+)"/i,
    /<link[^>]+rel="(?:shortcut )?icon"[^>]+href="([^"]+)"/i,
  ];
  for (const pat of patterns) {
    const m = html.match(pat);
    if (m) {
      let url = m[1];
      if (url.startsWith('//')) url = 'https:' + url;
      if (url.startsWith('/')) url = 'https://' + domain + url;
      if (url.startsWith('http') && !url.includes('google') && !url.includes('facebook') && !url.includes('yandex'))
        return url;
    }
  }
  return null;
}

async function main() {
  const unis = data.universities;
  let updated = 0, skipped = 0, failed = 0;
  const startIdx = parseInt(process.argv[2]) || 0;
  const endIdx = parseInt(process.argv[3]) || unis.length;

  console.log(`Processing universities ${startIdx + 1} to ${endIdx}...`);

  for (let i = startIdx; i < Math.min(endIdx, unis.length); i++) {
    const uni = unis[i];
    if (uni.logo) { skipped++; continue; }

    const gi = uni.general_info || {};
    const website = gi.website || gi.website_url || '';
    const domain = extractDomain(website);
    if (!domain) { failed++; continue; }

    const pageUrl = website.startsWith('http') ? website : 'https://' + domain;
    const html = await fetchPage(pageUrl);
    const logo = findLogo(html, domain);

    if (logo) {
      uni.logo = logo;
      updated++;
      console.log(`[${i + 1}] ✓ ${uni.title?.substring(0, 45)}`);
    } else {
      failed++;
    }

    // Save every 10 universities
    if ((i + 1) % 10 === 0 || i === endIdx - 1) {
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    }

    await new Promise(r => setTimeout(r, 150));
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`Done! Updated: ${updated}, Skipped: ${skipped}, Failed: ${failed}`);
}

main().catch(console.error);
