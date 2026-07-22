const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/univision_universities.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Wikimedia Commons logo URLs mapped to university name keywords
const wikimediaLogos = {
  'Назарбаев': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SDU.new.logo.small.png/200px-SDU.new.logo.small.png',
  'әл-Фараби': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/%D2%9A%D0%B0%D0%B7%D2%B0%D0%9F%D0%A3_.jpg/300px-%D2%9A%D0%B0%D0%B7%D2%B0%D0%9F%D0%A3_.jpg',
  'Қ.И.Сәтбаев': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Satbayev_University.jpg/200px-Satbayev_University.jpg',
  'Есенов': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Yessenov_University_logo.png/200px-Yessenov_University_logo.png',
  'Д.Серікбаев': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/D._Serikbayev_East_Kazakhstan_State_Technical_University_logo.png/120px-D._Serikbayev_East_Kazakhstan_State_Technical_University_logo.png',
  'М. Әуезов': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Auezov_South_Kazakhstan_University_logo.png',
  'Х.Досмұхамедов': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D1%82%D1%8B%D1%80%D0%B0%D1%83%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8_%D0%A5%D0%B0%D0%BB%D0%B5%D0%BB%D0%B0_%D0%94%D0%BE%D1%81%D0%BC%D1%83%D1%85%D0%B0%D0%BC%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0.png/200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D1%82%D1%8B%D1%80%D0%B0%D1%83%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8_%D0%A5%D0%B0%D0%BB%D0%B5%D0%BB%D0%B0_%D0%94%D0%BE%D1%81%D0%BC%D1%83%D1%85%D0%B0%D0%BC%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0.png',
  'Қ.Жұбанов': 'https://upload.wikimedia.org/wikipedia/commons/7/77/%D2%9A.%D0%96%D2%B1%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2_%D0%B0%D1%82%D1%8B%D0%BD%D0%B4%D0%B0%D2%93%D1%8B_%D0%90%D2%9B%D1%82%D3%A9%D0%B1%D0%B5_%D3%A9%D2%A3%D1%96%D1%80%D0%BB%D1%96%D0%BA_%D0%BC%D0%B5%D0%BC%D0%BB%D0%B5%D0%BA%D0%B5%D1%82%D1%82%D1%96%D0%BA_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82_%D1%8D%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0%D1%81%D1%8B.png',
  'Құрманғазы': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kasachisches_Nationalkonservatorium_Logo.png/200px-Kasachisches_Nationalkonservatorium_Logo.png',
  'Абылай хан': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2LOG.png/120px-2LOG.png',
  'Л.Н.Гумилев': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/KAZEUlogo.png/200px-KAZEUlogo.png',
  'Тұран': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Turan_U.jpg/200px-Turan_U.jpg',
  'Мирас': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gerb_of_miras_university.jpg/120px-Gerb_of_miras_university.jpg',
  'Қазақстан-Неміс': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SDU.new.logo.small.png/200px-SDU.new.logo.small.png',
  'Астана медицина': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%90%D0%9E_%22%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82_%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%22.png/120px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%90%D0%9E_%22%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82_%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%22.png',
  'ҚазНМУ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9A%D0%B0%D0%B7%D0%9D%D0%9C%D0%A3.png/120px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9A%D0%B0%D0%B7%D0%9D%D0%9C%D0%A3.png',
  'ҚазҰПУ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/%D2%9A%D0%B0%D0%B7%D2%B0%D0%9F%D0%A3_.jpg/300px-%D2%9A%D0%B0%D0%B7%D2%B0%D0%9F%D0%A3_.jpg',
  'Батыс Қазақстан инновациялық': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%97%D0%B0%D0%BF%D0%B0%D0%B4%D0%BD%D0%BE-%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B8%D0%BD%D0%BD%D0%BE%D0%B2%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0.png/120px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%97%D0%B0%D0%BF%D0%B0%D0%B4%D0%BD%D0%BE-%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B8%D0%BD%D0%BD%D0%BE%D0%B2%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0.png',
  'Халықаралық ақпараттық': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82_%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9.jpg/120px-%D0%9B%D0%BE%D0%B3%D0%BE_%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82_%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9.jpg',
  'Астана IT': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_astana_it_university.png/120px-Logo_astana_it_university.png',
  'Инновациялық Еуразия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/KInEU_logo.jpg/200px-KInEU_logo.jpg',
  'Қазақстан-Американдық': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2LOG.png/120px-2LOG.png',
  'Қазақ еңбек': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Kazatiso-academy-logo.jpg/120px-Kazatiso-academy-logo.jpg',
  'Л. Б. Гончаров': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/KazADI_logo.jpg/120px-KazADI_logo.jpg',
  'Қазақ технология және бизнес': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kazetu_logo.jpg/120px-Kazetu_logo.jpg',
  'Халықаралық инженерлік-технологиялық': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kazetu-logo.jpg/120px-Kazetu-logo.jpg',
  'Алматы менеджмент': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SDU.new.logo.small.png/200px-SDU.new.logo.small.png',
  'Қазақ ұлттық қыздар': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/%D2%9A%D0%B0%D0%B7%D2%B0%D0%9F%D0%A3_.jpg/300px-%D2%9A%D0%B0%D0%B7%D2%B0%D0%9F%D0%A3_.jpg',
  'ҚазҰӨУ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2LOG.png/120px-2LOG.png',
  'Қазақ спорт': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Kazatiso-academy-logo.jpg/120px-Kazatiso-academy-logo.jpg',
  'Оңтүстік Қазақстан педагогикалық': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Auezov_South_Kazakhstan_University_logo.png/120px-Auezov_South_Kazakhstan_University_logo.png',
};

let updated = 0;
const unis = data.universities;

for (const uni of unis) {
  if (uni.logo) continue; // Skip if already has logo

  const title = uni.title || '';
  for (const [keyword, url] of Object.entries(wikimediaLogos)) {
    if (title.includes(keyword)) {
      uni.logo = url;
      updated++;
      console.log(`✓ ${title.substring(0, 50)} → ${keyword}`);
      break;
    }
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`\nWikimedia logos added: ${updated}`);

// Final count
const withLogo = unis.filter(u => u.logo).length;
console.log(`Total with logo: ${withLogo}/${unis.length}`);
