// Lazy load the large JSON data
let masterProgramsData: any = null;

const loadMasterProgramsData = async () => {
  if (!masterProgramsData) {
    const module = await import('../univision_master_programs.json');
    masterProgramsData = module.default || module;
  }
  return masterProgramsData;
};

export interface LiveProgramData {
  code: string;
  title: string;
  url: string;
  general_info?: Record<string, string>;
  grants?: Array<Record<string, string>>;
  programs_count?: number;
  programs?: Array<{
    code: string;
    name: string;
    url: string;
    university: string;
  }>;
  universities_count?: number;
  universities?: string[];
  isLive?: boolean;
  lastFetchedAt?: string;
}

/**
  Parse group page HTML from univision.kz
 */
function parseGroupHtml(html: string, originalUrl: string, code: string): LiveProgramData {
  // 1. Title
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const rawTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const title = rawTitle || `${code} Магистратура`;

  // 2. General info list items
  const general_info: Record<string, string> = {};
  const infoBlocks = html.match(/<li[^>]*class="d-flex pt-2 pb-3 border-bottom"[^>]*>([\s\S]*?)<\/li>/gi) || [];
  for (const block of infoBlocks) {
    const labelMatch = block.match(/<span[^>]*class="fs-ms[^"]*"[^>]*>([^<]+)<\/span>/i);
    const valueMatch =
      block.match(/<a[^>]*class="nav-link-style[^"]*"[^>]*>([^<]+)<\/a>/i) ||
      block.match(/<span[^>]*class="font-weight-medium[^"]*"[^>]*>([^<]+)<\/span>/i) ||
      block.match(/<div[^>]*>([^<]+)<\/div>/i);

    if (labelMatch && valueMatch) {
      general_info[labelMatch[1].trim()] = valueMatch[1].trim();
    }
  }

  // 3. Grants table parsing
  const grants: Array<Record<string, string>> = [];
  const theadMatch = html.match(/<thead>([\s\S]*?)<\/thead>/i);
  const tbodyMatch = html.match(/<tbody>([\s\S]*?)<\/tbody>/i);
  if (theadMatch && tbodyMatch) {
    const headers = [...theadMatch[1].matchAll(/<th[^>]*>([^<]+)<\/th>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    const rowMatches = tbodyMatch[1].matchAll(/<tr>([\s\S]*?)<\/tr>/gi);
    for (const rm of rowMatches) {
      const cells = [...rm[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      if (cells.length) {
        const row: Record<string, string> = {};
        headers.forEach((h, i) => {
          if (i < cells.length && h) row[h] = cells[i];
        });
        grants.push(row);
      }
    }
  }

  // 4. Educational Programs (#eps section)
  const programs: LiveProgramData['programs'] = [];
  const epsSection = html.match(/<div[^>]*id="eps"[^>]*>([\s\S]*?)<\/div>\s*<(?!div)/i);
  if (epsSection) {
    const linkMatches = epsSection[1].matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi);
    for (const lm of linkMatches) {
      const href = lm[1].startsWith('http')
        ? lm[1]
        : 'https://univision.kz' + (lm[1].startsWith('/') ? lm[1] : '/' + lm[1]);
      const inner = lm[2];
      const bMatch = inner.match(/<b[^>]*>([^<]+)<\/b>/i);
      const smallMatch = inner.match(/<small[^>]*>([^<]+)<\/small>/i);
      const rawName = bMatch ? bMatch[1].trim() : inner.replace(/<[^>]+>/g, '').trim();
      const university = smallMatch ? smallMatch[1].trim() : '';

      const codeMatch = rawName.match(/^([\dA-Z]+)\s(.+)/);
      programs.push({
        code: codeMatch ? codeMatch[1] : '',
        name: codeMatch ? codeMatch[2] : rawName,
        url: href,
        university
      });
    }
  }

  // 5. Universities list (#univs section)
  const universities: string[] = [];
  const univsSection = html.match(/<div[^>]*id="univs"[^>]*>([\s\S]*?)<\/div>\s*<(?!div)/i);
  if (univsSection) {
    const linkMatches = univsSection[1].matchAll(/<a\s[^>]*class="list-group-item[^"]*"[^>]*>([\s\S]*?)<\/a>/gi);
    for (const lm of linkMatches) {
      const bText = (lm[1].match(/<b[^>]*>([^<]+)<\/b>/i) || [])[1];
      if (bText) {
        universities.push(bText.trim());
      }
    }
  }

  return {
    code: code || (title.split(/\s+/)[0] || ''),
    title,
    url: originalUrl,
    general_info: Object.keys(general_info).length ? general_info : undefined,
    grants,
    programs_count: programs.length,
    programs,
    universities_count: universities.length,
    universities,
    isLive: true,
    lastFetchedAt: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  };
}

/**
 * Fetch real-time specialty detail from univision.kz
 */
export async function fetchLiveSpecialtyDetail(code: string): Promise<LiveProgramData | null> {
  // 1. Load data lazily and locate specialty in JSON to get official URL
  const data = await loadMasterProgramsData();
  const cachedGroup = (data.groups as any[]).find((g: any) => g.code === code);
  const targetUrl = cachedGroup?.url || `https://univision.kz/kk/edu-program/group/${code}.html`;

  // 2. Convert to proxy URL (/univision-api/...)
  let proxyUrl = targetUrl;
  if (targetUrl.startsWith('https://univision.kz')) {
    proxyUrl = targetUrl.replace('https://univision.kz', '/univision-api');
  }

  try {
    const response = await fetch(proxyUrl, {
      headers: {
        'Accept': 'text/html,application/xhtml+xml',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const html = await response.text();
    const parsedData = parseGroupHtml(html, targetUrl, code);
    return parsedData;
  } catch (error) {
    console.warn(`[UnivisionService] Real-time fetch failed for ${code}, falling back to cache:`, error);
    return null;
  }
}
