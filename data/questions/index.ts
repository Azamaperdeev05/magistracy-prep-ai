import { Question } from '../../types';

import { m001PedagogikaQuestions } from './subjects/general-pedagogy';
import { m001PsychologyQuestions } from './subjects/general-psychology';
import { m002PedagogikaQuestions } from './subjects/preschool-pedagogy';
import { m002SpeechDevQuestions } from './subjects/speech-development';

import { algo1ProcedureLanguageQuestions } from './subjects/algorithms/1-procedure-language/procedureLanguage';
import { algo2OperatorsAndStructureQuestions } from './subjects/algorithms/2-operators-and-structure/operatorsAndStructure';
import { algo3ProgrammingStructuresQuestions } from './subjects/algorithms/3-programming-structures/programmingStructures';
import { algo4FunctionsAndRecursionQuestions } from './subjects/algorithms/4-functions-and-recursion/functionsAndRecursion';
import { algo5SortingAndSearchQuestions } from './subjects/algorithms/5-sorting-and-search/sortingAndSearch';
import { algo6ComplexityEvaluationQuestions } from './subjects/algorithms/6-complexity-evaluation/complexityEvaluation';
import { algo7LinearStructuresQuestions } from './subjects/algorithms/7-linear-structures/linearStructures';
import { algo8HashTablesQuestions } from './subjects/algorithms/8-hash-tables/hashTables';
import { algo9TreesAndHeapsQuestions } from './subjects/algorithms/9-trees-and-heaps/treesAndHeaps';
import { algo10GraphsQuestions } from './subjects/algorithms/10-graphs/graphs';

import { db1RelationalModelQuestions } from './subjects/databases/1-relational-model/relationalModel';
import { db2DataIntegrityQuestions } from './subjects/databases/2-data-integrity/dataIntegrity';
import { db3DbmsArchitectureQuestions } from './subjects/databases/3-dbms-architecture/dbmsArchitecture';
import { db4ErModelingQuestions } from './subjects/databases/4-er-modeling/erModeling';
import { db5KeysAndRelationshipsQuestions } from './subjects/databases/5-keys-and-relationships/keysAndRelationships';
import { db6SqlBasicsQuestions } from './subjects/databases/6-sql-basics/sqlBasics';
import { db7SqlQueriesQuestions } from './subjects/databases/7-sql-queries/sqlQueries';
import { db8SubqueriesQuestions } from './subjects/databases/8-subqueries/subqueries';
import { db9DatabaseDesignQuestions } from './subjects/databases/9-database-design/databaseDesign';
import { db10NormalizationQuestions } from './subjects/databases/10-normalization/normalization';
import { db11SqlServerArchitectureQuestions } from './subjects/databases/11-sql-server-architecture/sqlServerArchitecture';

import { englishGrammarArticlesQuestions } from './english/grammar/articles';
import { englishGrammarConditionalsQuestions } from './english/grammar/conditionals';
import { englishGrammarModalVerbsQuestions } from './english/grammar/modal-verbs';
import { englishGrammarPassiveVoiceQuestions } from './english/grammar/passive-voice';
import { englishGrammarPrepositionsQuestions } from './english/grammar/prepositions';
import { englishGrammarTensesQuestions } from './english/grammar/tenses';
import { englishGrammarNounsQuestions } from './english/grammar/nouns';
import { englishGrammarAdjectiveQuestions } from './english/grammar/adjective';
import { englishGrammarPronounQuestions } from './english/grammar/pronoun';
import { englishGrammarNumeralQuestions } from './english/grammar/numeral';
import { englishGrammarNonFiniteQuestions } from './english/grammar/non-finite';
import { englishGrammarAdverbQuestions } from './english/grammar/adverb';
import { englishGrammarMoodQuestions } from './english/grammar/mood';
import { englishListeningAudioTextsQuestions } from './english/listening/audio-texts';
import { englishListeningTexts01to10Questions } from './english/listening/listening-texts-01-10';
import { englishListeningTexts11to20Questions } from './english/listening/listening-texts-11-20';
import { englishListeningTexts21to30Questions } from './english/listening/listening-texts-21-30';
import { englishReadingReadingPassagesQuestions } from './english/reading/reading-passages';
import { englishReadingReadingSkillsQuestions } from './english/reading/reading-skills';
import { englishReadingSocietyQuestions } from './english/reading/reading-passages-society';
import { englishReadingEducationQuestions } from './english/reading/reading-passages-education';
import { englishReadingCountriesQuestions } from './english/reading/reading-passages-countries';
import { englishVocabularyAcademicVocabularyQuestions } from './english/vocabulary/academic-vocabulary';
import { englishVocabularyAntonymsQuestions } from './english/vocabulary/antonyms';
import { englishVocabularyCollocationsQuestions } from './english/vocabulary/collocations';
import { englishVocabularyPrefixesQuestions } from './english/vocabulary/prefixes';
import { englishVocabularySynonymsQuestions } from './english/vocabulary/synonyms';
import { englishVocabularyWordFormationQuestions } from './english/vocabulary/word-formation';

import { m095AlgoQuestions } from './subjects/algorithmic-programming';

import { is01CryptographyQuestions } from './subjects/information-security/01-cryptography/01Cryptography';
import { is02IdentificationAuthQuestions } from './subjects/information-security/02-identification-auth/02IdentificationAuth';
import { isNetworkSecurityQuestions } from './subjects/information-security/03-network-security/03NetworkSecurity';
import { is04MalwareQuestions } from './subjects/information-security/04-malware/04Malware';
import { is05SecurityTechnologiesQuestions } from './subjects/information-security/05-security-technologies/05SecurityTechnologies';
import { isAttackerTypesQuestions } from './subjects/information-security/06-attacker-types/06AttackerTypes';

import { tgoAnalyticalThinkingTextAnalysisQuestions } from './tgo/analytical-thinking/text-analysis';
import { tgoCriticalThinkingAlgebraQuestions } from './tgo/critical-thinking/algebra';
import { tgoCriticalThinkingCombinatoricsQuestions } from './tgo/critical-thinking/combinatorics';
import { tgoCriticalThinkingCriticalReasoningQuestions } from './tgo/critical-thinking/critical-reasoning';
import { tgoCriticalThinkingGeometryQuestions } from './tgo/critical-thinking/geometry';
import { tgoCriticalThinkingInequalitiesQuestions } from './tgo/critical-thinking/inequalities';
import { tgoCriticalThinkingMathematicalLogicQuestions } from './tgo/critical-thinking/mathematical-logic';
import { tgoCriticalThinkingNumericSequencesQuestions } from './tgo/critical-thinking/numeric-sequences';
import { tgoCriticalThinkingPercentagesQuestions } from './tgo/critical-thinking/percentages';
import { tgoCriticalThinkingProbabilityQuestions } from './tgo/critical-thinking/probability';
import { tgoCriticalThinkingQuantityComparisonQuestions } from './tgo/critical-thinking/quantity-comparison';
import { tgoCriticalThinkingSpeedProblemsQuestions } from './tgo/critical-thinking/speed-problems';
import { tgoCriticalThinkingTablesAndGraphsQuestions } from './tgo/critical-thinking/tables-and-graphs';
import { tgoCriticalThinkingWorkProblemsQuestions } from './tgo/critical-thinking/work-problems';

export const STATIC_QUESTIONS: Question[] = [
  ...m001PedagogikaQuestions,
  ...m001PsychologyQuestions,
  ...m002PedagogikaQuestions,
  ...m002SpeechDevQuestions,
  ...algo1ProcedureLanguageQuestions,
  ...algo2OperatorsAndStructureQuestions,
  ...algo3ProgrammingStructuresQuestions,
  ...algo4FunctionsAndRecursionQuestions,
  ...algo5SortingAndSearchQuestions,
  ...algo6ComplexityEvaluationQuestions,
  ...algo7LinearStructuresQuestions,
  ...algo8HashTablesQuestions,
  ...algo9TreesAndHeapsQuestions,
  ...algo10GraphsQuestions,
  ...db1RelationalModelQuestions,
  ...db2DataIntegrityQuestions,
  ...db3DbmsArchitectureQuestions,
  ...db4ErModelingQuestions,
  ...db5KeysAndRelationshipsQuestions,
  ...db6SqlBasicsQuestions,
  ...db7SqlQueriesQuestions,
  ...db8SubqueriesQuestions,
  ...db9DatabaseDesignQuestions,
  ...db10NormalizationQuestions,
  ...db11SqlServerArchitectureQuestions,
  ...englishGrammarArticlesQuestions,
  ...englishGrammarConditionalsQuestions,
  ...englishGrammarModalVerbsQuestions,
  ...englishGrammarPassiveVoiceQuestions,
  ...englishGrammarPrepositionsQuestions,
  ...englishGrammarTensesQuestions,
  ...englishGrammarNounsQuestions,
  ...englishGrammarAdjectiveQuestions,
  ...englishGrammarPronounQuestions,
  ...englishGrammarNumeralQuestions,
  ...englishGrammarNonFiniteQuestions,
  ...englishGrammarAdverbQuestions,
  ...englishGrammarMoodQuestions,
  ...englishListeningAudioTextsQuestions,
  ...englishListeningTexts01to10Questions,
  ...englishListeningTexts11to20Questions,
  ...englishListeningTexts21to30Questions,
  ...englishReadingReadingPassagesQuestions,
  ...englishReadingReadingSkillsQuestions,
  ...englishReadingSocietyQuestions,
  ...englishReadingEducationQuestions,
  ...englishReadingCountriesQuestions,
  ...englishVocabularyAcademicVocabularyQuestions,
  ...englishVocabularyAntonymsQuestions,
  ...englishVocabularyCollocationsQuestions,
  ...englishVocabularyPrefixesQuestions,
  ...englishVocabularySynonymsQuestions,
  ...englishVocabularyWordFormationQuestions,
  ...m095AlgoQuestions,
  ...is01CryptographyQuestions,
  ...is02IdentificationAuthQuestions,
  ...isNetworkSecurityQuestions,
  ...is04MalwareQuestions,
  ...is05SecurityTechnologiesQuestions,
  ...isAttackerTypesQuestions,
  ...tgoAnalyticalThinkingTextAnalysisQuestions,
  ...tgoCriticalThinkingAlgebraQuestions,
  ...tgoCriticalThinkingCombinatoricsQuestions,
  ...tgoCriticalThinkingCriticalReasoningQuestions,
  ...tgoCriticalThinkingGeometryQuestions,
  ...tgoCriticalThinkingInequalitiesQuestions,
  ...tgoCriticalThinkingMathematicalLogicQuestions,
  ...tgoCriticalThinkingNumericSequencesQuestions,
  ...tgoCriticalThinkingPercentagesQuestions,
  ...tgoCriticalThinkingProbabilityQuestions,
  ...tgoCriticalThinkingQuantityComparisonQuestions,
  ...tgoCriticalThinkingSpeedProblemsQuestions,
  ...tgoCriticalThinkingTablesAndGraphsQuestions,
  ...tgoCriticalThinkingWorkProblemsQuestions,
];
