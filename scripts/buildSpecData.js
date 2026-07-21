import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const specBaseDir = path.join(rootDir, 'тест спец');

const specData = {};
const generalSubjects = {};
const disciplineDocs = {};

if (fs.existsSync(specBaseDir)) {
  const files = fs.readdirSync(specBaseDir);
  files.forEach(file => {
    if (!file.endsWith('.md')) return;
    const fullPath = path.join(specBaseDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const baseName = file.replace(/\.md$/, '').trim();

    // 1. Specialty codes like М001_Педагогика и психология_Педагогика or М095_...
    const codeMatch = baseName.match(/^(М\d+|M\d+)/i);
    if (codeMatch) {
      const code = codeMatch[1].toUpperCase().replace('M', 'М'); // Standardize Kazakh М
      const parts = baseName.split('_');
      const groupTitle = parts[1] ? parts[1].trim() : baseName;
      const subjectName = parts.slice(2).join(' ').trim() || groupTitle;

      if (!specData[code]) {
        specData[code] = {
          code,
          title: groupTitle,
          docs: []
        };
      }
      specData[code].docs.push({
        title: subjectName || baseName,
        content
      });
    } 
    // 2. General Subjects (ODAD, English, Foreign Language)
    else if (
      baseName.includes('Оқуға дайындығын') || 
      baseName.includes('Оқу дайындығын') || 
      baseName.includes('шет тілі') || 
      baseName.includes('Шет тілі')
    ) {
      generalSubjects[baseName] = content;
    } 
    // 3. Independent Subject Disciplines (e.g. Алгоритмдер және деректер құрылымы, Ақпараттық қауіпсіздік негіздері)
    else {
      disciplineDocs[baseName] = content;
    }
  });
}

const output = {
  specialties: specData,
  generalSubjects,
  disciplineDocs
};

const dataDir = path.join(rootDir, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

fs.writeFileSync(path.join(dataDir, 'specificationsData.json'), JSON.stringify(output, null, 2), 'utf-8');
console.log(`✅ Updated specification dataset built! ${Object.keys(specData).length} specialty codes, ${Object.keys(generalSubjects).length} general subjects, ${Object.keys(disciplineDocs).length} disciplines.`);
