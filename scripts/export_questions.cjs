#!/usr/bin/env node
const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'ios', 'MagisCore', 'Data', 'Questions');

const SUBJECT_MAP = { algo: 'algo', db: 'db', english: 'english', tgo: 'tgo', m001: 'm001', m002: 'm002' };

// Enum stubs from types.ts (needed by m001/m002)
const ENUMS = `
  var SubjectId = { M001_PEDAGOGIKA: "m001_pedagogika", M001_PSYCHOLOGY: "m001_psychology", M002_PEDAGOGIKA: "m002_pedagogika", M002_SPEECH_DEV: "m002_speech_dev" };
  var QuestionType = { SINGLE: "SINGLE", MULTIPLE: "MULTIPLE", AUDIO: "AUDIO" };
  var Difficulty = { EASY: "easy", MEDIUM: "medium", HARD: "hard" };
`;

function findQuestionFiles() {
  const files = [];
  const walk = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.ts') && e.name !== 'index.ts') files.push(full);
    }
  };
  walk(path.join(ROOT, 'data', 'questions'));
  return files;
}

function classifySubject(filePath) {
  const parts = filePath.replace(ROOT, '').split(path.sep);
  for (const p of parts) {
    if (SUBJECT_MAP[p]) return SUBJECT_MAP[p];
  }
  return null;
}

function extractQuestions(filePath) {
  const source = fs.readFileSync(filePath, 'utf-8');

  // Strip types with esbuild
  const result = esbuild.transformSync(source, { loader: 'ts' });
  let code = result.code;

  // Remove import lines, strip 'export' keyword from variable declarations
  code = code.replace(/^import\s.*$/gm, '');
  code = code.replace(/\bexport\s+(const|let|var)\s+/g, 'var ');

  // Fix bare assignments (esbuild strips export const → bare assignment)
  // Look for lines like `identifier = [` and add `var` in front
  code = code.replace(/^(\s*)([a-zA-Z_]\w*)\s*=\s*\[/gm, '$1var $2 = [');

  // Find all var declarations
  const varNames = [...code.matchAll(/var\s+(\w+)\s*=\s*/g)].map(m => m[1]);

  // Wrap with enums and var capture
  const wrapped = `
    (function() {
      ${ENUMS}
      ${code}
      var r = {};
      ${varNames.map(n => `r["${n}"] = ${n};`).join('\n')}
      return r;
    })()
  `;

  try {
    const vars = eval(wrapped);
    const allQuestions = [];
    for (const key of Object.keys(vars)) {
      const val = vars[key];
      if (Array.isArray(val)) {
        const valid = val.filter(q => q && typeof q === 'object' && q.id);
        allQuestions.push(...valid);
      }
    }
    return allQuestions;
  } catch (e) {
    return [];
  }
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = findQuestionFiles();
  console.log(`Found ${files.length} question files\n`);

  const bySubject = {};
  let total = 0;

  for (const file of files) {
    const subj = classifySubject(file);
    if (!subj) continue;

    const questions = extractQuestions(file);
    if (questions.length === 0) continue;

    if (!bySubject[subj]) bySubject[subj] = [];
    for (const q of questions) {
      bySubject[subj].push(q);
    }
    total += questions.length;
    console.log(`  ${path.relative(ROOT, file)}: ${questions.length} questions`);
  }

  // Deduplicate
  for (const subj of Object.keys(bySubject)) {
    const seen = new Set();
    bySubject[subj] = bySubject[subj].filter(q => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
  }

  // Write
  for (const [subject, questions] of Object.entries(bySubject)) {
    const outPath = path.join(OUTPUT_DIR, `${subject}.json`);
    fs.writeFileSync(outPath, JSON.stringify(questions, null, 2), 'utf-8');
    console.log(`  -> ${subject}: ${questions.length} questions`);
  }

  console.log(`\nTotal: ${total} questions across ${Object.keys(bySubject).length} subjects`);
}

main();
