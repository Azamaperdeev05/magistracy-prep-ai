import { Question } from '../../types';

import { m001PedagogikaQuestions } from './m001/pedagogika';
import { m001PsychologyQuestions } from './m001/psychology';
import { m002PedagogikaQuestions } from './m002/pedagogika';
import { m002SpeechDevQuestions } from './m002/speech-dev';

import { algo1ProcedureLanguageQuestions } from './algo/1-procedure-language/procedureLanguage';
import { algo2OperatorsAndStructureQuestions } from './algo/2-operators-and-structure/operatorsAndStructure';
import { algo3ProgrammingStructuresQuestions } from './algo/3-programming-structures/programmingStructures';
import { algo4FunctionsAndRecursionQuestions } from './algo/4-functions-and-recursion/functionsAndRecursion';
import { algo5SortingAndSearchQuestions } from './algo/5-sorting-and-search/sortingAndSearch';
import { algo6ComplexityEvaluationQuestions } from './algo/6-complexity-evaluation/complexityEvaluation';
import { algo7LinearStructuresQuestions } from './algo/7-linear-structures/linearStructures';
import { algo8HashTablesQuestions } from './algo/8-hash-tables/hashTables';
import { algo9TreesAndHeapsQuestions } from './algo/9-trees-and-heaps/treesAndHeaps';
import { algo10GraphsQuestions } from './algo/10-graphs/graphs';

import { db1RelationalModelQuestions } from './db/1-relational-model/relationalModel';
import { db2DataIntegrityQuestions } from './db/2-data-integrity/dataIntegrity';
import { db3DbmsArchitectureQuestions } from './db/3-dbms-architecture/dbmsArchitecture';
import { db4ErModelingQuestions } from './db/4-er-modeling/erModeling';
import { db5KeysAndRelationshipsQuestions } from './db/5-keys-and-relationships/keysAndRelationships';
import { db6SqlBasicsQuestions } from './db/6-sql-basics/sqlBasics';
import { db7SqlQueriesQuestions } from './db/7-sql-queries/sqlQueries';
import { db8SubqueriesQuestions } from './db/8-subqueries/subqueries';
import { db9DatabaseDesignQuestions } from './db/9-database-design/databaseDesign';
import { db10NormalizationQuestions } from './db/10-normalization/normalization';
import { db11SqlServerArchitectureQuestions } from './db/11-sql-server-architecture/sqlServerArchitecture';

import { englishGrammarArticlesQuestions } from './english/grammar/articles';
import { englishGrammarConditionalsQuestions } from './english/grammar/conditionals';
import { englishGrammarModalVerbsQuestions } from './english/grammar/modal-verbs';
import { englishGrammarPassiveVoiceQuestions } from './english/grammar/passive-voice';
import { englishGrammarPrepositionsQuestions } from './english/grammar/prepositions';
import { englishGrammarTensesQuestions } from './english/grammar/tenses';
import { englishListeningAudioTextsQuestions } from './english/listening/audio-texts';
import { englishReadingReadingPassagesQuestions } from './english/reading/reading-passages';
import { englishReadingReadingSkillsQuestions } from './english/reading/reading-skills';
import { englishVocabularyAcademicVocabularyQuestions } from './english/vocabulary/academic-vocabulary';
import { englishVocabularyAntonymsQuestions } from './english/vocabulary/antonyms';
import { englishVocabularyCollocationsQuestions } from './english/vocabulary/collocations';
import { englishVocabularyPrefixesQuestions } from './english/vocabulary/prefixes';
import { englishVocabularySynonymsQuestions } from './english/vocabulary/synonyms';
import { englishVocabularyWordFormationQuestions } from './english/vocabulary/word-formation';

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
  ...englishListeningAudioTextsQuestions,
  ...englishReadingReadingPassagesQuestions,
  ...englishReadingReadingSkillsQuestions,
  ...englishVocabularyAcademicVocabularyQuestions,
  ...englishVocabularyAntonymsQuestions,
  ...englishVocabularyCollocationsQuestions,
  ...englishVocabularyPrefixesQuestions,
  ...englishVocabularySynonymsQuestions,
  ...englishVocabularyWordFormationQuestions,
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
