import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const specBaseDir = path.join(rootDir, 'тест спец');

const specFilesDir = path.join(specBaseDir, 'Тест спецификациясы');
const p1Dir = path.join(specBaseDir, '1 бейіндік пән бойынша үлгілік тест тапсырмалары');
const p2Dir = path.join(specBaseDir, '2 бейіндік пән бойынша үлгілік тест тапсырмалары');
const odadDir = path.join(specBaseDir, 'Шет тілдері және ОДАТ бойынша үлгілік тест тапсырмалары');

const extractCode = (filename) => {
  const match = filename.match(/^(M\d+)/i);
  return match ? match[1].toUpperCase() : null;
};

const specData = {};

// 1. Process Specifications
if (fs.existsSync(specFilesDir)) {
  const files = fs.readdirSync(specFilesDir);
  files.forEach(file => {
    if (!file.endsWith('.md')) return;
    const code = extractCode(file);
    const title = file.replace(/\.md$/, '').replace(/^M\d+[_.\s]*/i, '').trim();
    const content = fs.readFileSync(path.join(specFilesDir, file), 'utf-8');

    if (code) {
      if (!specData[code]) specData[code] = { code, title, spec: '', p1: null, p2: null };
      specData[code].spec = content;
      if (title && !specData[code].title) specData[code].title = title;
    }
  });
}

// 2. Process Profile 1 Questions
if (fs.existsSync(p1Dir)) {
  const files = fs.readdirSync(p1Dir);
  files.forEach(file => {
    if (!file.endsWith('.md')) return;
    const content = fs.readFileSync(path.join(p1Dir, file), 'utf-8');
    const subjectName = file.replace(/\.md$/, '').replace(/^[M\d.\s_]+/i, '').trim();
    
    // Match codes in filename (e.g., M001.M004.M005...)
    const codeMatches = file.match(/M\d+/gi) || [];
    codeMatches.forEach(c => {
      const code = c.toUpperCase();
      if (!specData[code]) specData[code] = { code, title: subjectName, spec: '', p1: null, p2: null };
      specData[code].p1 = { subject: subjectName, content };
    });
  });
}

// 3. Process Profile 2 Questions
if (fs.existsSync(p2Dir)) {
  const files = fs.readdirSync(p2Dir);
  files.forEach(file => {
    if (!file.endsWith('.md')) return;
    const content = fs.readFileSync(path.join(p2Dir, file), 'utf-8');
    const subjectName = file.replace(/\.md$/, '').replace(/^[M\d.\s_]+/i, '').trim();
    
    const codeMatches = file.match(/M\d+/gi) || [];
    codeMatches.forEach(c => {
      const code = c.toUpperCase();
      if (!specData[code]) specData[code] = { code, title: subjectName, spec: '', p1: null, p2: null };
      specData[code].p2 = { subject: subjectName, content };
    });
  });
}

// 4. Process General Subjects (ODAD & Foreign Language)
const odadData = {};
if (fs.existsSync(odadDir)) {
  const files = fs.readdirSync(odadDir);
  files.forEach(file => {
    if (!file.endsWith('.md')) return;
    const content = fs.readFileSync(path.join(odadDir, file), 'utf-8');
    const name = file.replace(/\.md$/, '').trim();
    odadData[name] = content;
  });
}

const output = {
  specialties: specData,
  generalSubjects: odadData
};

const dataDir = path.join(rootDir, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

fs.writeFileSync(path.join(dataDir, 'specificationsData.json'), JSON.stringify(output, null, 2), 'utf-8');
console.log(`✅ Specification dataset built! ${Object.keys(specData).length} specialty groups bundled.`);
