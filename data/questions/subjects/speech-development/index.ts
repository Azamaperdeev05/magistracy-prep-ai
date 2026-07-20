import { spdTilDamytuPaniQuestions } from './01-til-damytu-pani/01TilDamytuPani';
import { spdGylymiNegizderiQuestions } from './02-gylymi-negizderi/02GylymiNegizderi';
import { spdZhumysZhuyesiQuestions } from './03-zhumys-zhuyesi/03ZhumysZhuyesi';
import { spdBailanystyrypSoileuQuestions } from './04-bailanystyryp-soileu/04BailanystyrypSoileu';
import { spd05SozdikKoryQuestions } from './05-sozdik-kory/05SozdikKory';
import { spd06GrammatikalykKurylymQuestions } from './06-grammatikalyk-kurylym/06GrammatikalykKurylym';
import { spd07DybystykMadenietQuestions } from './07-dybystyk-madeniet/07DybystykMadeniet';
import { spd08KorkemAdebietQuestions } from './08-korkem-adebiet/08KorkemAdebiet';
import { spd09SauatAshuQuestions } from './09-sauat-ashu/09SauatAshu';
import { spd10DiagnostikaQuestions } from './10-diagnostika/10Diagnostika';
import { spd11ZhosparlauQuestions } from './11-zhosparlau/11Zhosparlau';
import { spd12AdistemelikBasshylykQuestions } from './12-adistemelik-basshylyk/12AdistemelikBasshylyk';

export const m002SpeechDevQuestions = [
  ...spdTilDamytuPaniQuestions,
  ...spdGylymiNegizderiQuestions,
  ...spdZhumysZhuyesiQuestions,
  ...spdBailanystyrypSoileuQuestions,
  ...spd05SozdikKoryQuestions,
  ...spd06GrammatikalykKurylymQuestions,
  ...spd07DybystykMadenietQuestions,
  ...spd08KorkemAdebietQuestions,
  ...spd09SauatAshuQuestions,
  ...spd10DiagnostikaQuestions,
  ...spd11ZhosparlauQuestions,
  ...spd12AdistemelikBasshylykQuestions,
];
