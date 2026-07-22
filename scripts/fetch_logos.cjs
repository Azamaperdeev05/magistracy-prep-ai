const fs = require('fs');
const path = require('path');
const https = require('https');

const dataPath = path.join(__dirname, '../data/univision_universities.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function extractDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch { return null; }
}

function fetchLogo(domain) {
  return new Promise((resolve) => {
    const logoUrl = `https://logo.clearbit.com/${domain}`;
    https.get(logoUrl, { method: 'HEAD' }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { method: 'HEAD' }, (res2) => {
          resolve(res2.statusCode === 200 ? logoUrl : null);
        }).on('error', () => resolve(null));
      } else {
        resolve(res.statusCode === 200 ? logoUrl : null);
      }
    }).on('error', () => resolve(null));
  });
}

async function main() {
  const unis = data.universities;
  let updated = 0;
  let skipped = 0;

  console.log(`Processing ${unis.length} universities...`);

  for (let i = 0; i < unis.length; i++) {
    const uni = unis[i];
    const gi = uni.general_info || {};
    const website = gi.website || gi.website_url || '';
    const domain = extractDomain(website);

    if (!domain) {
      skipped++;
      continue;
    }

    // Skip if already has logo
    if (uni.logo) {
      skipped++;
      continue;
    }

    const logo = await fetchLogo(domain);
    if (logo) {
      uni.logo = logo;
      updated++;
      console.log(`[${i + 1}/${unis.length}] ✓ ${uni.title?.substring(0, 40)} → ${domain}`);
    } else {
      console.log(`[${i + 1}/${unis.length}] ✗ ${uni.title?.substring(0, 40)} → ${domain}`);
    }

    // Rate limit: 100ms between requests
    await new Promise(r => setTimeout(r, 100));
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
}

main().catch(console.error);
