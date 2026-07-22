const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const dataPath = path.join(__dirname, '../data/univision_universities.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function extractDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch { return null; }
}

function fetchPage(url, maxRedirects = 3) {
  return new Promise((resolve) => {
    if (maxRedirects <= 0) return resolve('');
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { timeout: 5000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = new URL(url).origin + loc;
        return fetchPage(loc, maxRedirects - 1).then(resolve);
      }
      let body = '';
      res.on('data', (chunk) => { body += chunk; if (body.length > 50000) { res.destroy(); resolve(body); } });
      res.on('end', () => resolve(body));
    });
    req.on('error', () => resolve(''));
    req.on('timeout', () => { req.destroy(); resolve(''); });
  });
}

function findLogo(html, domain) {
  if (!html) return null;

  // Try og:image
  const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
  if (ogMatch) {
    let url = ogMatch[1];
    if (url.startsWith('//')) url = 'https:' + url;
    if (url.startsWith('/')) url = 'https://' + domain + url;
    if (url.startsWith('http')) return url;
  }

  // Try favicon
  const favMatch = html.match(/<link[^>]+rel="(?:shortcut )?icon"[^>]+href="([^"]+)"/i);
  if (favMatch) {
    let url = favMatch[1];
    if (url.startsWith('//')) url = 'https:' + url;
    if (url.startsWith('/')) url = 'https://' + domain + url;
    if (url.startsWith('http')) return url;
  }

  // Try first large image
  const imgMatch = html.match(/<img[^>]+src="([^"]+)"[^>]*(?:width|height)="(?:[1-9]\d{2,})"/i);
  if (imgMatch) {
    let url = imgMatch[1];
    if (url.startsWith('//')) url = 'https:' + url;
    if (url.startsWith('/')) url = 'https://' + domain + url;
    if (url.startsWith('http') && !url.includes('google') && !url.includes('facebook')) return url;
  }

  return null;
}

async function main() {
  const unis = data.universities;
  let updated = 0;
  let failed = 0;

  console.log(`Processing ${unis.length} universities...`);

  for (let i = 0; i < unis.length; i++) {
    const uni = unis[i];
    if (uni.logo) { console.log(`[${i + 1}] SKIP (has logo)`); continue; }

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
      console.log(`[${i + 1}/${unis.length}] ✓ ${uni.title?.substring(0, 40)} → ${logo.substring(0, 60)}`);
    } else {
      failed++;
      console.log(`[${i + 1}/${unis.length}] ✗ ${uni.title?.substring(0, 40)} → ${domain}`);
    }

    await new Promise(r => setTimeout(r, 200));
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`\nDone! Updated: ${updated}, Failed: ${failed}`);
}

main().catch(console.error);
