import { Question } from '../../types';

// ===== LAZY QUESTION LOADING =====
// Instead of eagerly importing ALL question modules (3MB+), we use dynamic imports
// Each subject group loads only when its questions are actually needed

// Re-export type for consumers
export type { Question };

// Lazy-loaded question module map
const questionModules: Record<string, () => Promise<{ default: Question[] }>> = {
  // M001 Pedagogy
  'm001_pedagogika': () => import('./subjects/general-pedagogy'),
  'm001_psychology': () => import('./subjects/general-psychology'),
  // M002
  'm002_pedagogika': () => import('./subjects/preschool-pedagogy'),
  'm002_speech_dev': () => import('./subjects/speech-development'),
  // Algorithms (M094)
  'algo_1': () => import('./subjects/algorithms/1-procedure-language/procedureLanguage'),
  'algo_2': () => import('./subjects/algorithms/2-operators-and-structure/operatorsAndStructure'),
  'algo_3': () => import('./subjects/algorithms/3-programming-structures/programmingStructures'),
  'algo_4': () => import('./subjects/algorithms/4-functions-and-recursion/functionsAndRecursion'),
  'algo_5': () => import('./subjects/algorithms/5-sorting-and-search/sortingAndSearch'),
  'algo_6': () => import('./subjects/algorithms/6-complexity-evaluation/complexityEvaluation'),
  'algo_7': () => import('./subjects/algorithms/7-linear-structures/linearStructures'),
  'algo_8': () => import('./subjects/algorithms/8-hash-tables/hashTables'),
  'algo_9': () => import('./subjects/algorithms/9-trees-and-heaps/treesAndHeaps'),
  'algo_10': () => import('./subjects/algorithms/10-graphs/graphs'),
  // Database (M094)
  'db_1': () => import('./subjects/databases/1-relational-model/relationalModel'),
  'db_2': () => import('./subjects/databases/2-data-integrity/dataIntegrity'),
  'db_3': () => import('./subjects/databases/3-dbms-architecture/dbmsArchitecture'),
  'db_4': () => import('./subjects/databases/4-er-modeling/erModeling'),
  'db_5': () => import('./subjects/databases/5-keys-and-relationships/keysAndRelationships'),
  'db_6': () => import('./subjects/databases/6-sql-basics/sqlBasics'),
  'db_7': () => import('./subjects/databases/7-sql-queries/sqlQueries'),
  'db_8': () => import('./subjects/databases/8-subqueries/subqueries'),
  'db_9': () => import('./subjects/databases/9-database-design/databaseDesign'),
  'db_10': () => import('./subjects/databases/10-normalization/normalization'),
  'db_11': () => import('./subjects/databases/11-sql-server-architecture/sqlServerArchitecture'),
  // English
  'en_grammar_articles': () => import('./english/grammar/articles'),
  'en_grammar_conditionals': () => import('./english/grammar/conditionals'),
  'en_grammar_modal_verbs': () => import('./english/grammar/modal-verbs'),
  'en_grammar_passive_voice': () => import('./english/grammar/passive-voice'),
  'en_grammar_prepositions': () => import('./english/grammar/prepositions'),
  'en_grammar_tenses': () => import('./english/grammar/tenses'),
  'en_grammar_nouns': () => import('./english/grammar/nouns'),
  'en_grammar_adjective': () => import('./english/grammar/adjective'),
  'en_grammar_pronoun': () => import('./english/grammar/pronoun'),
  'en_grammar_numeral': () => import('./english/grammar/numeral'),
  'en_grammar_non_finite': () => import('./english/grammar/non-finite'),
  'en_grammar_adverb': () => import('./english/grammar/adverb'),
  'en_grammar_mood': () => import('./english/grammar/mood'),
  'en_listening_audio': () => import('./english/listening/audio-texts'),
  'en_listening_01_10': () => import('./english/listening/listening-texts-01-10'),
  'en_listening_11_20': () => import('./english/listening/listening-texts-11-20'),
  'en_listening_21_30': () => import('./english/listening/listening-texts-21-30'),
  'en_reading_passages': () => import('./english/reading/reading-passages'),
  'en_reading_skills': () => import('./english/reading/reading-skills'),
  'en_reading_society': () => import('./english/reading/reading-passages-society'),
  'en_reading_education': () => import('./english/reading/reading-passages-education'),
  'en_reading_countries': () => import('./english/reading/reading-passages-countries'),
  'en_vocab_academic': () => import('./english/vocabulary/academic-vocabulary'),
  'en_vocab_antonyms': () => import('./english/vocabulary/antonyms'),
  'en_vocab_collocations': () => import('./english/vocabulary/collocations'),
  'en_vocab_prefixes': () => import('./english/vocabulary/prefixes'),
  'en_vocab_synonyms': () => import('./english/vocabulary/synonyms'),
  'en_vocab_word_formation': () => import('./english/vocabulary/word-formation'),
  // M095
  'm095_algo': () => import('./subjects/algorithmic-programming'),
  'm095_infosec_01': () => import('./subjects/information-security/01-cryptography/01Cryptography'),
  'm095_infosec_02': () => import('./subjects/information-security/02-identification-auth/02IdentificationAuth'),
  'm095_infosec_03': () => import('./subjects/information-security/03-network-security/03NetworkSecurity'),
  'm095_infosec_04': () => import('./subjects/information-security/04-malware/04Malware'),
  'm095_infosec_05': () => import('./subjects/information-security/05-security-technologies/05SecurityTechnologies'),
  'm095_infosec_06': () => import('./subjects/information-security/06-attacker-types/06AttackerTypes'),
  // TGO
  'tgo_analytical': () => import('./tgo/analytical-thinking/text-analysis'),
  'tgo_critical_algebra': () => import('./tgo/critical-thinking/algebra'),
  'tgo_critical_combinatorics': () => import('./tgo/critical-thinking/combinatorics'),
  'tgo_critical_critical_reasoning': () => import('./tgo/critical-thinking/critical-reasoning'),
  'tgo_critical_geometry': () => import('./tgo/critical-thinking/geometry'),
  'tgo_critical_inequalities': () => import('./tgo/critical-thinking/inequalities'),
  'tgo_critical_math_logic': () => import('./tgo/critical-thinking/mathematical-logic'),
  'tgo_critical_numeric_sequences': () => import('./tgo/critical-thinking/numeric-sequences'),
  'tgo_critical_percentages': () => import('./tgo/critical-thinking/percentages'),
  'tgo_critical_probability': () => import('./tgo/critical-thinking/probability'),
  'tgo_critical_quantity_comparison': () => import('./tgo/critical-thinking/quantity-comparison'),
  'tgo_critical_speed': () => import('./tgo/critical-thinking/speed-problems'),
  'tgo_critical_tables_graphs': () => import('./tgo/critical-thinking/tables-and-graphs'),
  'tgo_critical_work': () => import('./tgo/critical-thinking/work-problems'),
};

// Cache loaded modules
const moduleCache = new Map<string, Question[]>();

/**
 * Load questions for a specific set of module keys.
 * Only loads the modules actually needed for the current test.
 */
export async function loadQuestionsForModules(keys: string[]): Promise<Question[]> {
  const results = await Promise.all(
    keys.map(async (key) => {
      if (moduleCache.has(key)) return moduleCache.get(key)!;
      const loader = questionModules[key];
      if (!loader) {
        console.warn(`[Questions] No loader for key: ${key}`);
        return [];
      }
      const mod = await loader();
      const questions = (mod.default || mod) as Question[];
      moduleCache.set(key, questions);
      return questions;
    })
  );
  return results.flat();
}

// Map SubjectId to module keys
export const SUBJECT_MODULE_KEYS: Record<string, string[]> = {
  'm001_pedagogika': ['m001_pedagogika'],
  'm001_psychology': ['m001_psychology'],
  'm002_pedagogika': ['m002_pedagogika'],
  'm002_speech_dev': ['m002_speech_dev'],
  'algo': ['algo_1','algo_2','algo_3','algo_4','algo_5','algo_6','algo_7','algo_8','algo_9','algo_10'],
  'db': ['db_1','db_2','db_3','db_4','db_5','db_6','db_7','db_8','db_9','db_10','db_11'],
  'english': [
    'en_grammar_articles','en_grammar_conditionals','en_grammar_modal_verbs',
    'en_grammar_passive_voice','en_grammar_prepositions','en_grammar_tenses',
    'en_grammar_nouns','en_grammar_adjective','en_grammar_pronoun','en_grammar_numeral',
    'en_grammar_non_finite','en_grammar_adverb','en_grammar_mood',
    'en_listening_audio','en_listening_01_10','en_listening_11_20','en_listening_21_30',
    'en_reading_passages','en_reading_skills','en_reading_society','en_reading_education','en_reading_countries',
    'en_vocab_academic','en_vocab_antonyms','en_vocab_collocations','en_vocab_prefixes',
    'en_vocab_synonyms','en_vocab_word_formation'
  ],
  'tgo': [
    'tgo_analytical','tgo_critical_algebra','tgo_critical_combinatorics',
    'tgo_critical_critical_reasoning','tgo_critical_geometry','tgo_critical_inequalities',
    'tgo_critical_math_logic','tgo_critical_numeric_sequences','tgo_critical_percentages',
    'tgo_critical_probability','tgo_critical_quantity_comparison','tgo_critical_speed',
    'tgo_critical_tables_graphs','tgo_critical_work'
  ],
  'm095_algo': ['m095_algo'],
  'm095_infosec': ['m095_infosec_01','m095_infosec_02','m095_infosec_03','m095_infosec_04','m095_infosec_05','m095_infosec_06'],
};

/**
 * Load all questions for a given subjectId (lazy).
 */
export async function loadQuestionsBySubject(subjectId: string): Promise<Question[]> {
  const keys = SUBJECT_MODULE_KEYS[subjectId];
  if (!keys) return [];
  return loadQuestionsForModules(keys);
}

// Global question index cache for ID lookups
let allQuestionsIndex: Map<string, Question> | null = null;

async function ensureAllQuestionsIndex(): Promise<Map<string, Question>> {
  if (allQuestionsIndex) return allQuestionsIndex;
  const allKeys = Object.keys(questionModules);
  const allQuestions = await loadQuestionsForModules(allKeys);
  allQuestionsIndex = new Map(allQuestions.map(q => [q.id, q]));
  return allQuestionsIndex;
}

/**
 * Find a single question by ID (lazy-loads all modules on first call, then cached).
 * Use for history/admin views that need to look up specific questions.
 */
export async function findQuestionById(id: string): Promise<Question | undefined> {
  const index = await ensureAllQuestionsIndex();
  return index.get(id);
}

/**
 * Find multiple questions by IDs (lazy-loads all modules on first call, then cached).
 */
export async function findQuestionsByIds(ids: string[]): Promise<Question[]> {
  const index = await ensureAllQuestionsIndex();
  return ids.map(id => index.get(id)).filter(Boolean) as Question[];
}
