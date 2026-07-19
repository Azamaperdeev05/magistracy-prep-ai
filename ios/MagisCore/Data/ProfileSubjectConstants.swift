import Foundation

extension Constants {
    static func setupProfileSubjects() {
        profileSubjects = Self.allProfileConfigs
    }

    private static let allProfileConfigs: [SubjectId: SubjectConfig] = [
        .prof_biotekhniia_zhane_zhabaiy_zhanuarlardy_osiru: SubjectConfig(
            id: .prof_biotekhniia_zhane_zhabaiy_zhanuarlardy_osiru,
            name: "Biотехния және жабайы жануарларды өсіру",
            totalQuestions: 20,
            maxScore: 40,
            description: "Biотехния және жабайы жануарларды өсіру",
            topics: [],
            isProfile: true
        ),
        .prof_pr_teoriiasy_men_tazhiribesi: SubjectConfig(
            id: .prof_pr_teoriiasy_men_tazhiribesi,
            name: "PR теориясы мен тәжірибесі",
            totalQuestions: 30,
            maxScore: 30,
            description: "PR теориясы мен тәжірибесі",
            topics: [],
            isProfile: true
        ),
        .prof_indettanu_zhane_zhanuarlardyn_zhukpaly_aurulary: SubjectConfig(
            id: .prof_indettanu_zhane_zhanuarlardyn_zhukpaly_aurulary,
            name: "Індеттану және жануарлардың жұқпалы аурулары",
            totalQuestions: 20,
            maxScore: 40,
            description: "Індеттану және жануарлардың жұқпалы аурулары",
            topics: [],
            isProfile: true
        ),
        .prof_aviatsialyk_tekhnikanyn_teoriialyk_negizderi: SubjectConfig(
            id: .prof_aviatsialyk_tekhnikanyn_teoriialyk_negizderi,
            name: "Авиациалық техниканың теориялық негіздері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Авиациалық техниканың теориялық негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_aviatsiialyk_apattardy_tergeu_zhane_ushu_kauipsizdigi: SubjectConfig(
            id: .prof_aviatsiialyk_apattardy_tergeu_zhane_ushu_kauipsizdigi,
            name: "Авиациялық апаттарды тергеу және ұшу қауіпсіздігі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Авиациялық апаттарды тергеу және ұшу қауіпсіздігі",
            topics: [],
            isProfile: true
        ),
        .prof_akvakultura: SubjectConfig(
            id: .prof_akvakultura,
            name: "Аквакультура",
            totalQuestions: 20,
            maxScore: 40,
            description: "Аквакультура",
            topics: [],
            isProfile: true
        ),
        .prof_algoritmder_zhane_derekter_kurylymy: SubjectConfig(
            id: .prof_algoritmder_zhane_derekter_kurylymy,
            name: "Алгоритмдер және деректер құрылымы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Алгоритмдер және деректер құрылымы",
            topics: [],
            isProfile: true
        ),
        .prof_algoritmdik_bagdarlamalau_tilderi: SubjectConfig(
            id: .prof_algoritmdik_bagdarlamalau_tilderi,
            name: "Алгоритмдік бағдарламалау тілдері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Алгоритмдік бағдарламалау тілдері",
            topics: [],
            isProfile: true
        ),
        .prof_analitikalyk_khimiia: SubjectConfig(
            id: .prof_analitikalyk_khimiia,
            name: "Аналитикалық химия",
            totalQuestions: 20,
            maxScore: 40,
            description: "Аналитикалық химия",
            topics: [],
            isProfile: true
        ),
        .prof_arnaiy_pedagogika: SubjectConfig(
            id: .prof_arnaiy_pedagogika,
            name: "Арнайы педагогика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Арнайы педагогика",
            topics: [],
            isProfile: true
        ),
        .prof_arkheografiia: SubjectConfig(
            id: .prof_arkheografiia,
            name: "Археография",
            totalQuestions: 20,
            maxScore: 40,
            description: "Археография",
            topics: [],
            isProfile: true
        ),
        .prof_arkheologiia_negizderi: SubjectConfig(
            id: .prof_arkheologiia_negizderi,
            name: "Археология негіздері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Археология негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_audarma_teoriiasyagylshyn: SubjectConfig(
            id: .prof_audarma_teoriiasyagylshyn,
            name: "Аударма теориясы(ағылшын)",
            totalQuestions: 30,
            maxScore: 30,
            description: "Аударма теориясы(ағылшын)",
            topics: [],
            isProfile: true
        ),
        .prof_audit: SubjectConfig(
            id: .prof_audit,
            name: "Аудит",
            totalQuestions: 20,
            maxScore: 40,
            description: "Аудит",
            topics: [],
            isProfile: true
        ),
        .prof_auylsharuashylyk_mashinalary: SubjectConfig(
            id: .prof_auylsharuashylyk_mashinalary,
            name: "Ауылшаруашылық машиналары",
            totalQuestions: 30,
            maxScore: 30,
            description: "Ауылшаруашылық машиналары",
            topics: [],
            isProfile: true
        ),
        .prof_agash_ondeitin_zhabdyktar_buiymdar_tekhnologiiasy_koldanu: SubjectConfig(
            id: .prof_agash_ondeitin_zhabdyktar_buiymdar_tekhnologiiasy_koldanu,
            name: "Ағаш өңдейтін жабдықтар бұйымдар технологиясы (қолдану",
            totalQuestions: 30,
            maxScore: 30,
            description: "Ағаш өңдейтін жабдықтар бұйымдар технологиясы (қолдану",
            topics: [],
            isProfile: true
        ),
        .prof_agashtan_buiym_zhasau_tekhnologiiasy_salasy_boiynsha: SubjectConfig(
            id: .prof_agashtan_buiym_zhasau_tekhnologiiasy_salasy_boiynsha,
            name: "Ағаштан бұйым жасау технологиясы саласы бойынша)",
            totalQuestions: 20,
            maxScore: 40,
            description: "Ағаштан бұйым жасау технологиясы саласы бойынша)",
            topics: [],
            isProfile: true
        ),
        .prof_akparattyk_kauipsizdik_negizderi: SubjectConfig(
            id: .prof_akparattyk_kauipsizdik_negizderi,
            name: "Ақпараттық қауіпсіздік негіздері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Ақпараттық қауіпсіздік негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_balyk_aulau: SubjectConfig(
            id: .prof_balyk_aulau,
            name: "Балық аулау",
            totalQuestions: 30,
            maxScore: 30,
            description: "Балық аулау",
            topics: [],
            isProfile: true
        ),
        .prof_bastapky_askeri_daiyndykty_okytu_adistemesi: SubjectConfig(
            id: .prof_bastapky_askeri_daiyndykty_okytu_adistemesi,
            name: "Бастапқы әскери дайындықты оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Бастапқы әскери дайындықты оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_bastauysh_synyptarda_matematikany_okytu_adistemesi: SubjectConfig(
            id: .prof_bastauysh_synyptarda_matematikany_okytu_adistemesi,
            name: "Бастауыш сыныптарда математиканы оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Бастауыш сыныптарда математиканы оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_bagdarlamalau: SubjectConfig(
            id: .prof_bagdarlamalau,
            name: "Бағдарламалау",
            totalQuestions: 30,
            maxScore: 30,
            description: "Бағдарламалау",
            topics: [],
            isProfile: true
        ),
        .prof_beiorganikalyk_khimiia: SubjectConfig(
            id: .prof_beiorganikalyk_khimiia,
            name: "Бейорганикалық химия",
            totalQuestions: 30,
            maxScore: 30,
            description: "Бейорганикалық химия",
            topics: [],
            isProfile: true
        ),
        .prof_beton_tekhnologiiasy_1_kurastyrylymdarynyn_ondirisi: SubjectConfig(
            id: .prof_beton_tekhnologiiasy_1_kurastyrylymdarynyn_ondirisi,
            name: "Бетон технологиясы 1 құрастырылымдарының өндірісі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Бетон технологиясы 1 құрастырылымдарының өндірісі",
            topics: [],
            isProfile: true
        ),
        .prof_biznesti_uiymdastyru: SubjectConfig(
            id: .prof_biznesti_uiymdastyru,
            name: "Бизнесті ұйымдастыру",
            totalQuestions: 20,
            maxScore: 40,
            description: "Бизнесті ұйымдастыру",
            topics: [],
            isProfile: true
        ),
        .prof_biologiia: SubjectConfig(
            id: .prof_biologiia,
            name: "Биология",
            totalQuestions: 30,
            maxScore: 30,
            description: "Биология",
            topics: [],
            isProfile: true
        ),
        .prof_biologiiany_okytu_adistemesi: SubjectConfig(
            id: .prof_biologiiany_okytu_adistemesi,
            name: "Биологияны оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Биологияны оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_biostatistika: SubjectConfig(
            id: .prof_biostatistika,
            name: "Биостатистика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Биостатистика",
            topics: [],
            isProfile: true
        ),
        .prof_biotekhnologiia_negizderi: SubjectConfig(
            id: .prof_biotekhnologiia_negizderi,
            name: "Биотехнология негіздері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Биотехнология негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_biokhimiia: SubjectConfig(
            id: .prof_biokhimiia,
            name: "Биохимия",
            totalQuestions: 30,
            maxScore: 30,
            description: "Биохимия",
            topics: [],
            isProfile: true
        ),
        .prof_botanika: SubjectConfig(
            id: .prof_botanika,
            name: "Ботаника",
            totalQuestions: 20,
            maxScore: 40,
            description: "Ботаника",
            topics: [],
            isProfile: true
        ),
        .prof_bukhgalterlik_esep_negizderi: SubjectConfig(
            id: .prof_bukhgalterlik_esep_negizderi,
            name: "Бухгалтерлік есеп негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Бухгалтерлік есеп негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_geografiia: SubjectConfig(
            id: .prof_geografiia,
            name: "География",
            totalQuestions: 30,
            maxScore: 30,
            description: "География",
            topics: [],
            isProfile: true
        ),
        .prof_geografiiany_okytu_adistemesi: SubjectConfig(
            id: .prof_geografiiany_okytu_adistemesi,
            name: "Географияны оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Географияны оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_geodeziia: SubjectConfig(
            id: .prof_geodeziia,
            name: "Геодезия",
            totalQuestions: 30,
            maxScore: 30,
            description: "Геодезия",
            topics: [],
            isProfile: true
        ),
        .prof_geoekologiia: SubjectConfig(
            id: .prof_geoekologiia,
            name: "Геоэкология",
            totalQuestions: 30,
            maxScore: 30,
            description: "Геоэкология",
            topics: [],
            isProfile: true
        ),
        .prof_gigiena_zhane_epidemiologiia: SubjectConfig(
            id: .prof_gigiena_zhane_epidemiologiia,
            name: "Гигиена және эпидемиология",
            totalQuestions: 20,
            maxScore: 40,
            description: "Гигиена және эпидемиология",
            topics: [],
            isProfile: true
        ),
        .prof_gidravlika: SubjectConfig(
            id: .prof_gidravlika,
            name: "Гидравлика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Гидравлика",
            topics: [],
            isProfile: true
        ),
        .prof_gidrologiia_negizderi: SubjectConfig(
            id: .prof_gidrologiia_negizderi,
            name: "Гидрология негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Гидрология негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_gidrologiialyk_akparatty_statistikalyk_ondeudin_zamanaui_adisteri: SubjectConfig(
            id: .prof_gidrologiialyk_akparatty_statistikalyk_ondeudin_zamanaui_adisteri,
            name: "Гидрологиялық ақпаратты статистикалық өңдеудің заманауи әдістері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Гидрологиялық ақпаратты статистикалық өңдеудің заманауи әдістері",
            topics: [],
            isProfile: true
        ),
        .prof_gidrotekhnikalyk_kurylymdar: SubjectConfig(
            id: .prof_gidrotekhnikalyk_kurylymdar,
            name: "Гидротехникалық құрылымдар",
            totalQuestions: 20,
            maxScore: 40,
            description: "Гидротехникалық құрылымдар",
            topics: [],
            isProfile: true
        ),
        .prof_dalalyk_zhane_ungymalardy_geofizikalyk_zertteudin_teoriialyk_negizderine_kirispe: SubjectConfig(
            id: .prof_dalalyk_zhane_ungymalardy_geofizikalyk_zertteudin_teoriialyk_negizderine_kirispe,
            name: "Далалық және ұңғымаларды геофизикалық зерттеудің теориялық негіздеріне кіріспе",
            totalQuestions: 30,
            maxScore: 30,
            description: "Далалық және ұңғымаларды геофизикалық зерттеудің теориялық негіздеріне кіріспе",
            topics: [],
            isProfile: true
        ),
        .prof_dalalyk_zhane_ungymalardy_geofizikalyk_zertteulerdi_ondeu_men_interpretatsiialaudy_zhurgizudin_adisi_tekhnikasy_men_tekhnologiiasy: SubjectConfig(
            id: .prof_dalalyk_zhane_ungymalardy_geofizikalyk_zertteulerdi_ondeu_men_interpretatsiialaudy_zhurgizudin_adisi_tekhnikasy_men_tekhnologiiasy,
            name: "Далалық және ұңғымаларды геофизикалық зерттеулерді өңдеу мен интерпретациялауды жүргізудің әдісі, техникасы мен технологиясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Далалық және ұңғымаларды геофизикалық зерттеулерді өңдеу мен интерпретациялауды жүргізудің әдісі, техникасы мен технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_damu_psikhologiiasy: SubjectConfig(
            id: .prof_damu_psikhologiiasy,
            name: "Даму психологиясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Даму психологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_dene_shynyktyru_teoriiasy_men_adistemesi: SubjectConfig(
            id: .prof_dene_shynyktyru_teoriiasy_men_adistemesi,
            name: "Дене шынықтыру теориясы мен әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Дене шынықтыру теориясы мен әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_derekter_bazasy: SubjectConfig(
            id: .prof_derekter_bazasy,
            name: "Деректер базасы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Деректер базасы",
            topics: [],
            isProfile: true
        ),
        .prof_diplomatiialyk_zhane_konsuldyk_kyzmet: SubjectConfig(
            id: .prof_diplomatiialyk_zhane_konsuldyk_kyzmet,
            name: "Дипломатиялық және консулдық қызмет",
            totalQuestions: 20,
            maxScore: 40,
            description: "Дипломатиялық және консулдық қызмет",
            topics: [],
            isProfile: true
        ),
        .prof_differentsialdyk_tendeuler: SubjectConfig(
            id: .prof_differentsialdyk_tendeuler,
            name: "Дифференциалдық теңдеулер",
            totalQuestions: 20,
            maxScore: 40,
            description: "Дифференциалдық теңдеулер",
            topics: [],
            isProfile: true
        ),
        .prof_dinder_tarikhy: SubjectConfig(
            id: .prof_dinder_tarikhy,
            name: "Діндер тарихы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Діндер тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_duniezhuzinin_ekonomikalyk_aleumettik_zhane_saiasi_geografiiasy: SubjectConfig(
            id: .prof_duniezhuzinin_ekonomikalyk_aleumettik_zhane_saiasi_geografiiasy,
            name: "Дүниежүзінің экономикалық, әлеуметтік және саяси географиясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Дүниежүзінің экономикалық, әлеуметтік және саяси географиясы",
            topics: [],
            isProfile: true
        ),
        .prof_daleldi_meditsina: SubjectConfig(
            id: .prof_daleldi_meditsina,
            name: "Дәлелді медицина",
            totalQuestions: 20,
            maxScore: 40,
            description: "Дәлелді медицина",
            topics: [],
            isProfile: true
        ),
        .prof_darilerdin_onerkasiptik_tekhnologiiasy: SubjectConfig(
            id: .prof_darilerdin_onerkasiptik_tekhnologiiasy,
            name: "Дәрілердің өнеркәсіптік технологиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Дәрілердің өнеркәсіптік технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_enbek_korgaudy_baskaru_zhuieleri: SubjectConfig(
            id: .prof_enbek_korgaudy_baskaru_zhuieleri,
            name: "Еңбек қорғауды басқару жүйелері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Еңбек қорғауды басқару жүйелері",
            topics: [],
            isProfile: true
        ),
        .prof_zhalpy_zhane_tarikhi_geologiia: SubjectConfig(
            id: .prof_zhalpy_zhane_tarikhi_geologiia,
            name: "Жалпы және тарихи геология",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жалпы және тарихи геология",
            topics: [],
            isProfile: true
        ),
        .prof_zhalpy_metallurgiia: SubjectConfig(
            id: .prof_zhalpy_metallurgiia,
            name: "Жалпы металлургия",
            totalQuestions: 20,
            maxScore: 40,
            description: "Жалпы металлургия",
            topics: [],
            isProfile: true
        ),
        .prof_zhalpy_psikhologiia: SubjectConfig(
            id: .prof_zhalpy_psikhologiia,
            name: "Жалпы психология",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жалпы психология",
            topics: [],
            isProfile: true
        ),
        .prof_zhalpy_til_bilimi: SubjectConfig(
            id: .prof_zhalpy_til_bilimi,
            name: "Жалпы тіл білімі",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жалпы тіл білімі",
            topics: [],
            isProfile: true
        ),
        .prof_zhalpy_fizika: SubjectConfig(
            id: .prof_zhalpy_fizika,
            name: "Жалпы физика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жалпы физика",
            topics: [],
            isProfile: true
        ),
        .prof_zhalpy_khimiialyk_tekhnologiia: SubjectConfig(
            id: .prof_zhalpy_khimiialyk_tekhnologiia,
            name: "Жалпы химиялық технология",
            totalQuestions: 20,
            maxScore: 40,
            description: "Жалпы химиялық технология",
            topics: [],
            isProfile: true
        ),
        .prof_zhanuarlar_patologiiasy: SubjectConfig(
            id: .prof_zhanuarlar_patologiiasy,
            name: "Жануарлар патологиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жануарлар патологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_zher_asty_sularyn_izdeu_zhane_barlau_geologiia: SubjectConfig(
            id: .prof_zher_asty_sularyn_izdeu_zhane_barlau_geologiia,
            name: "Жер асты суларын іздеу және барлау геология",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жер асты суларын іздеу және барлау геология",
            topics: [],
            isProfile: true
        ),
        .prof_zher_resurstaryn_baskaru: SubjectConfig(
            id: .prof_zher_resurstaryn_baskaru,
            name: "Жер ресурстарын басқару",
            totalQuestions: 20,
            maxScore: 40,
            description: "Жер ресурстарын басқару",
            topics: [],
            isProfile: true
        ),
        .prof_zhetkizu_tizbekterin_baskaru: SubjectConfig(
            id: .prof_zhetkizu_tizbekterin_baskaru,
            name: "Жеткізу тізбектерін басқару",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жеткізу тізбектерін басқару",
            topics: [],
            isProfile: true
        ),
        .prof_zhenil_onerkasip_buiymdarynyn_buiymdar_materialtanuy: SubjectConfig(
            id: .prof_zhenil_onerkasip_buiymdarynyn_buiymdar_materialtanuy,
            name: "Жеңіл өнеркәсіп бұйымдарының бұйымдар материалтануы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жеңіл өнеркәсіп бұйымдарының бұйымдар материалтануы",
            topics: [],
            isProfile: true
        ),
        .prof_zhylu_tekhnikasynyn_teoriialyk_negizderi: SubjectConfig(
            id: .prof_zhylu_tekhnikasynyn_teoriialyk_negizderi,
            name: "Жылу техникасының теориялық негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Жылу техникасының теориялық негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_imidzhelogiia: SubjectConfig(
            id: .prof_imidzhelogiia,
            name: "Имиджелогия",
            totalQuestions: 20,
            maxScore: 40,
            description: "Имиджелогия",
            topics: [],
            isProfile: true
        ),
        .prof_inzhenerlik_geologiialyk_zertteuler: SubjectConfig(
            id: .prof_inzhenerlik_geologiialyk_zertteuler,
            name: "Инженерлік-геологиялық зерттеулер",
            totalQuestions: 20,
            maxScore: 40,
            description: "Инженерлік-геологиялық зерттеулер",
            topics: [],
            isProfile: true
        ),
        .prof_inkliuzivti_bilim_beru: SubjectConfig(
            id: .prof_inkliuzivti_bilim_beru,
            name: "Инклюзивті білім беру",
            totalQuestions: 20,
            maxScore: 40,
            description: "Инклюзивті білім беру",
            topics: [],
            isProfile: true
        ),
        .prof_integraldyk_zhane_mikroprotsessorlyk_skhemotekhnika: SubjectConfig(
            id: .prof_integraldyk_zhane_mikroprotsessorlyk_skhemotekhnika,
            name: "Интегралдық және микропроцессорлық схемотехника",
            totalQuestions: 20,
            maxScore: 40,
            description: "Интегралдық және микропроцессорлық схемотехника",
            topics: [],
            isProfile: true
        ),
        .prof_informatikany_okytu_adistemesi: SubjectConfig(
            id: .prof_informatikany_okytu_adistemesi,
            name: "Информатиканы оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Информатиканы оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_kartografiia: SubjectConfig(
            id: .prof_kartografiia,
            name: "Картография",
            totalQuestions: 20,
            maxScore: 40,
            description: "Картография",
            topics: [],
            isProfile: true
        ),
        .prof_kvalimetriia_metrologiia_sala_boiynsha: SubjectConfig(
            id: .prof_kvalimetriia_metrologiia_sala_boiynsha,
            name: "Квалиметрия метрология (сала бойынша)",
            totalQuestions: 30,
            maxScore: 30,
            description: "Квалиметрия метрология (сала бойынша)",
            topics: [],
            isProfile: true
        ),
        .prof_keme_kurylymy_men_teoriiasy: SubjectConfig(
            id: .prof_keme_kurylymy_men_teoriiasy,
            name: "Кеме құрылымы мен теориясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Кеме құрылымы мен теориясы",
            topics: [],
            isProfile: true
        ),
        .prof_kemelerdegi_kyzmetti_uiymdastyru_negizderi: SubjectConfig(
            id: .prof_kemelerdegi_kyzmetti_uiymdastyru_negizderi,
            name: "Кемелердегі қызметті ұйымдастыру негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Кемелердегі қызметті ұйымдастыру негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_kiimge_arnalgan_materialdardy_konfektsionerleu: SubjectConfig(
            id: .prof_kiimge_arnalgan_materialdardy_konfektsionerleu,
            name: "Киімге арналған материалдарды конфекционерлеу",
            totalQuestions: 20,
            maxScore: 40,
            description: "Киімге арналған материалдарды конфекционерлеу",
            topics: [],
            isProfile: true
        ),
        .prof_klassikalyk_zhane_kazirgi_shygystanu: SubjectConfig(
            id: .prof_klassikalyk_zhane_kazirgi_shygystanu,
            name: "Классикалық және қазіргі шығыстану",
            totalQuestions: 30,
            maxScore: 30,
            description: "Классикалық және қазіргі шығыстану",
            topics: [],
            isProfile: true
        ),
        .prof_kletka_biologiiasy: SubjectConfig(
            id: .prof_kletka_biologiiasy,
            name: "Клетка биологиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Клетка биологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_klimatologiia: SubjectConfig(
            id: .prof_klimatologiia,
            name: "Климатология",
            totalQuestions: 20,
            maxScore: 40,
            description: "Климатология",
            topics: [],
            isProfile: true
        ),
        .prof_korporativtik_karzhy: SubjectConfig(
            id: .prof_korporativtik_karzhy,
            name: "Корпоративтік қаржы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Корпоративтік қаржы",
            topics: [],
            isProfile: true
        ),
        .prof_kriminalistika: SubjectConfig(
            id: .prof_kriminalistika,
            name: "Криминалистика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Криминалистика",
            topics: [],
            isProfile: true
        ),
        .prof_kasibi_bagyttalgan_shet_tili_agylshyn: SubjectConfig(
            id: .prof_kasibi_bagyttalgan_shet_tili_agylshyn,
            name: "Кәсіби бағытталған шет тілі (ағылшын)",
            totalQuestions: 20,
            maxScore: 40,
            description: "Кәсіби бағытталған шет тілі (ағылшын)",
            topics: [],
            isProfile: true
        ),
        .prof_kasibi_bagyttalgan_shet_tili: SubjectConfig(
            id: .prof_kasibi_bagyttalgan_shet_tili,
            name: "Кәсіби-бағытталған шет тілі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Кәсіби-бағытталған шет тілі",
            topics: [],
            isProfile: true
        ),
        .prof_kasiporyn_ekonomikasy: SubjectConfig(
            id: .prof_kasiporyn_ekonomikasy,
            name: "Кәсіпорын экономикасы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Кәсіпорын экономикасы",
            topics: [],
            isProfile: true
        ),
        .prof_kasiptik_okytudyn_zamanaui_tekhnologiialary: SubjectConfig(
            id: .prof_kasiptik_okytudyn_zamanaui_tekhnologiialary,
            name: "Кәсіптік оқытудың заманауи технологиялары",
            totalQuestions: 20,
            maxScore: 40,
            description: "Кәсіптік оқытудың заманауи технологиялары",
            topics: [],
            isProfile: true
        ),
        .prof_kolik_logistikasy: SubjectConfig(
            id: .prof_kolik_logistikasy,
            name: "Көлік логистикасы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Көлік логистикасы",
            topics: [],
            isProfile: true
        ),
        .prof_kolik_tekhnikasyn_tekhnikalyk_paidalanu_tekhnologiia_negizderi: SubjectConfig(
            id: .prof_kolik_tekhnikasyn_tekhnikalyk_paidalanu_tekhnologiia_negizderi,
            name: "Көлік техникасын техникалық пайдалану технология негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Көлік техникасын техникалық пайдалану технология негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_kolik_tekhnikasynyn_energetikalyk_kondyrgylary: SubjectConfig(
            id: .prof_kolik_tekhnikasynyn_energetikalyk_kondyrgylary,
            name: "Көлік техникасының энергетикалық қондырғылары",
            totalQuestions: 20,
            maxScore: 40,
            description: "Көлік техникасының энергетикалық қондырғылары",
            topics: [],
            isProfile: true
        ),
        .prof_kolik_turlerinin_ozara_karym_katynasy: SubjectConfig(
            id: .prof_kolik_turlerinin_ozara_karym_katynasy,
            name: "Көлік түрлерінің өзара қарым-қатынасы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Көлік түрлерінің өзара қарым-қатынасы",
            topics: [],
            isProfile: true
        ),
        .prof_kolik_kurylymdarynyn_kurylysyn_uiymdastyru_zhane_zhosparlau: SubjectConfig(
            id: .prof_kolik_kurylymdarynyn_kurylysyn_uiymdastyru_zhane_zhosparlau,
            name: "Көлік құрылымдарының құрылысын ұйымдастыру және жоспарлау",
            totalQuestions: 20,
            maxScore: 40,
            description: "Көлік құрылымдарының құрылысын ұйымдастыру және жоспарлау",
            topics: [],
            isProfile: true
        ),
        .prof_korkem_enbek_grafika_zhane_zhobalaudy_okytu_adistemesi: SubjectConfig(
            id: .prof_korkem_enbek_grafika_zhane_zhobalaudy_okytu_adistemesi,
            name: "Көркем еңбек, графика және жобалауды оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Көркем еңбек, графика және жобалауды оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_lingvistika_iliminin_tarikhy: SubjectConfig(
            id: .prof_lingvistika_iliminin_tarikhy,
            name: "Лингвистика ілімінің тарихы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Лингвистика ілімінің тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_makroekonomika: SubjectConfig(
            id: .prof_makroekonomika,
            name: "Макроэкономика",
            totalQuestions: 20,
            maxScore: 40,
            description: "Макроэкономика",
            topics: [],
            isProfile: true
        ),
        .prof_mal_azyktandyru: SubjectConfig(
            id: .prof_mal_azyktandyru,
            name: "Мал азықтандыру",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мал азықтандыру",
            topics: [],
            isProfile: true
        ),
        .prof_mal_sharuashylygy_onimderin_ondiru_tekhnologiiasy: SubjectConfig(
            id: .prof_mal_sharuashylygy_onimderin_ondiru_tekhnologiiasy,
            name: "Мал шаруашылығы өнімдерін өндіру технологиясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мал шаруашылығы өнімдерін өндіру технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_mal_sharuashylygyn_mekhanikalandyru_zhane_avtomattandyru_mashinalary: SubjectConfig(
            id: .prof_mal_sharuashylygyn_mekhanikalandyru_zhane_avtomattandyru_mashinalary,
            name: "Мал шаруашылығын механикаландыру және автоматтандыру машиналары",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мал шаруашылығын механикаландыру және автоматтандыру машиналары",
            topics: [],
            isProfile: true
        ),
        .prof_marketing: SubjectConfig(
            id: .prof_marketing,
            name: "Маркетинг",
            totalQuestions: 30,
            maxScore: 30,
            description: "Маркетинг",
            topics: [],
            isProfile: true
        ),
        .prof_marketingtik_zertteuler: SubjectConfig(
            id: .prof_marketingtik_zertteuler,
            name: "Маркетингтік зерттеулер",
            totalQuestions: 20,
            maxScore: 40,
            description: "Маркетингтік зерттеулер",
            topics: [],
            isProfile: true
        ),
        .prof_marksheiderlik_istin_zhalpy_kursy: SubjectConfig(
            id: .prof_marksheiderlik_istin_zhalpy_kursy,
            name: "Маркшейдерлік істің жалпы курсы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Маркшейдерлік істің жалпы курсы",
            topics: [],
            isProfile: true
        ),
        .prof_matematika: SubjectConfig(
            id: .prof_matematika,
            name: "Математика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Математика",
            topics: [],
            isProfile: true
        ),
        .prof_matematika_m107: SubjectConfig(
            id: .prof_matematika_m107,
            name: "Математика М107",
            totalQuestions: 20,
            maxScore: 40,
            description: "Математика М107",
            topics: [],
            isProfile: true
        ),
        .prof_matematikalyk_taldau: SubjectConfig(
            id: .prof_matematikalyk_taldau,
            name: "Математикалық талдау",
            totalQuestions: 30,
            maxScore: 30,
            description: "Математикалық талдау",
            topics: [],
            isProfile: true
        ),
        .prof_matematikany_okytu_adistemesi: SubjectConfig(
            id: .prof_matematikany_okytu_adistemesi,
            name: "Математиканы оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Математиканы оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_materialdardyn_mekhanikalyk_kasietteri: SubjectConfig(
            id: .prof_materialdardyn_mekhanikalyk_kasietteri,
            name: "Материалдардың механикалық қасиеттері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Материалдардың механикалық қасиеттері",
            topics: [],
            isProfile: true
        ),
        .prof_mashina_bolshekteri: SubjectConfig(
            id: .prof_mashina_bolshekteri,
            name: "Машина бөлшектері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Машина бөлшектері",
            topics: [],
            isProfile: true
        ),
        .prof_meimankhana_zhane_meiramkhana_menedzhmenti: SubjectConfig(
            id: .prof_meimankhana_zhane_meiramkhana_menedzhmenti,
            name: "Мейманхана және мейрамхана менеджменті",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мейманхана және мейрамхана менеджменті",
            topics: [],
            isProfile: true
        ),
        .prof_meiramkhana_zhane_konak_ui_biznesindegi_biznesi_kasipkerlik_kyzmettin_negizderi: SubjectConfig(
            id: .prof_meiramkhana_zhane_konak_ui_biznesindegi_biznesi_kasipkerlik_kyzmettin_negizderi,
            name: "Мейрамхана және қонақ үй бизнесіндегі бизнесі кәсіпкерлік қызметтің негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мейрамхана және қонақ үй бизнесіндегі бизнесі кәсіпкерлік қызметтің негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_meiirger_isi_negizderi: SubjectConfig(
            id: .prof_meiirger_isi_negizderi,
            name: "Мейіргер ісі негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мейіргер ісі негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_meiirger_isindegi_menendzhment: SubjectConfig(
            id: .prof_meiirger_isindegi_menendzhment,
            name: "Мейіргер ісіндегі мененджмент",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мейіргер ісіндегі мененджмент",
            topics: [],
            isProfile: true
        ),
        .prof_mektepke_deiingi_zhastagy_balalardyn_tilin_damytu_adistemesi: SubjectConfig(
            id: .prof_mektepke_deiingi_zhastagy_balalardyn_tilin_damytu_adistemesi,
            name: "Мектепке дейінгі жастағы балалардың тілін дамыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мектепке дейінгі жастағы балалардың тілін дамыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_mektepke_deiingi_pedagogika: SubjectConfig(
            id: .prof_mektepke_deiingi_pedagogika,
            name: "Мектепке дейінгі педагогика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мектепке дейінгі педагогика",
            topics: [],
            isProfile: true
        ),
        .prof_memleket_zhane_kukyk_teoriiasy: SubjectConfig(
            id: .prof_memleket_zhane_kukyk_teoriiasy,
            name: "Мемлекет және құқық теориясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мемлекет және құқық теориясы",
            topics: [],
            isProfile: true
        ),
        .prof_memleket_zhane_kukyk_teoriiasy_negizderi: SubjectConfig(
            id: .prof_memleket_zhane_kukyk_teoriiasy_negizderi,
            name: "Мемлекет және құқық теориясы негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мемлекет және құқық теориясы негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_memlekettik_baskaru_teoriiasy: SubjectConfig(
            id: .prof_memlekettik_baskaru_teoriiasy,
            name: "Мемлекеттік басқару теориясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мемлекеттік басқару теориясы",
            topics: [],
            isProfile: true
        ),
        .prof_menedzhment: SubjectConfig(
            id: .prof_menedzhment,
            name: "Менеджмент",
            totalQuestions: 30,
            maxScore: 30,
            description: "Менеджмент",
            topics: [],
            isProfile: true
        ),
        .prof_menedzhment_negizderi: SubjectConfig(
            id: .prof_menedzhment_negizderi,
            name: "Менеджмент негіздері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Менеджмент негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_metallurgiialyk_protsessterinin_teoriiasy: SubjectConfig(
            id: .prof_metallurgiialyk_protsessterinin_teoriiasy,
            name: "Металлургиялық процесстерінің теориясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Металлургиялық процесстерінің теориясы",
            topics: [],
            isProfile: true
        ),
        .prof_mekhanika: SubjectConfig(
            id: .prof_mekhanika,
            name: "Механика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Механика",
            topics: [],
            isProfile: true
        ),
        .prof_mekhanika_nanotekhnologiialar: SubjectConfig(
            id: .prof_mekhanika_nanotekhnologiialar,
            name: "Механика нанотехнологиялар",
            totalQuestions: 30,
            maxScore: 30,
            description: "Механика нанотехнологиялар",
            topics: [],
            isProfile: true
        ),
        .prof_mekhanika_tekhnologiiasy: SubjectConfig(
            id: .prof_mekhanika_tekhnologiiasy,
            name: "Механика технологиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Механика технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_molekulalyk_genetika_negizimen_zhalpy_genetika: SubjectConfig(
            id: .prof_molekulalyk_genetika_negizimen_zhalpy_genetika,
            name: "Молекулалық генетика негізімен жалпы генетика",
            totalQuestions: 20,
            maxScore: 40,
            description: "Молекулалық генетика негізімен жалпы генетика",
            topics: [],
            isProfile: true
        ),
        .prof_molekulalyk_fizika: SubjectConfig(
            id: .prof_molekulalyk_fizika,
            name: "Молекулалық физика",
            totalQuestions: 20,
            maxScore: 40,
            description: "Молекулалық физика",
            topics: [],
            isProfile: true
        ),
        .prof_muzyka_panin_okytu_adistemesi: SubjectConfig(
            id: .prof_muzyka_panin_okytu_adistemesi,
            name: "Музыка пәнін оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Музыка пәнін оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_munai_zhane_gaz_ungymalaryn_burgylau: SubjectConfig(
            id: .prof_munai_zhane_gaz_ungymalaryn_burgylau,
            name: "Мұнай және газ ұңғымаларын бұрғылау",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мұнай және газ ұңғымаларын бұрғылау",
            topics: [],
            isProfile: true
        ),
        .prof_munai_ondirudin_tekhnologiiasy_men_tekhnikasy: SubjectConfig(
            id: .prof_munai_ondirudin_tekhnologiiasy_men_tekhnikasy,
            name: "Мұнай өңдірудің технологиясы мен техникасы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мұнай өңдірудің технологиясы мен техникасы",
            topics: [],
            isProfile: true
        ),
        .prof_madeni_antropologiia: SubjectConfig(
            id: .prof_madeni_antropologiia,
            name: "Мәдени антропология",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мәдени антропология",
            topics: [],
            isProfile: true
        ),
        .prof_madeni_tynygu_kyzmeti_salasyndagy_menedzhment_marketing: SubjectConfig(
            id: .prof_madeni_tynygu_kyzmeti_salasyndagy_menedzhment_marketing,
            name: "Мәдени-тынығу қызметі саласындағы менеджмент, маркетинг",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мәдени-тынығу қызметі саласындағы менеджмент, маркетинг",
            topics: [],
            isProfile: true
        ),
        .prof_madeni_tynygu_kyzmetindegi_adistemelik_zhetekshilik_tekhnologiiasy: SubjectConfig(
            id: .prof_madeni_tynygu_kyzmetindegi_adistemelik_zhetekshilik_tekhnologiiasy,
            name: "Мәдени-тынығу қызметіндегі әдістемелік жетекшілік технологиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Мәдени-тынығу қызметіндегі әдістемелік жетекшілік технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_nanotekhnologiia_negizderi: SubjectConfig(
            id: .prof_nanotekhnologiia_negizderi,
            name: "Нанотехнология негіздері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Нанотехнология негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_orman_ekpeleri: SubjectConfig(
            id: .prof_orman_ekpeleri,
            name: "Орман екпелері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Орман екпелері",
            topics: [],
            isProfile: true
        ),
        .prof_orys_tilin_okytu_adistemesi: SubjectConfig(
            id: .prof_orys_tilin_okytu_adistemesi,
            name: "Орыс тілін оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Орыс тілін оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_paidaly_kazba_ken_oryndarynyn_geologiiasy: SubjectConfig(
            id: .prof_paidaly_kazba_ken_oryndarynyn_geologiiasy,
            name: "Пайдалы қазба кен орындарының геологиясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Пайдалы қазба кен орындарының геологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_paidaly_kazbalardy_baiytu_negizderi: SubjectConfig(
            id: .prof_paidaly_kazbalardy_baiytu_negizderi,
            name: "Пайдалы қазбаларды байыту негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Пайдалы қазбаларды байыту негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_pedagogika: SubjectConfig(
            id: .prof_pedagogika,
            name: "Педагогика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Педагогика",
            topics: [],
            isProfile: true
        ),
        .prof_pedagogika_russ: SubjectConfig(
            id: .prof_pedagogika_russ,
            name: "Педагогика русс",
            totalQuestions: 30,
            maxScore: 30,
            description: "Педагогика русс",
            topics: [],
            isProfile: true
        ),
        .prof_psikhologiia: SubjectConfig(
            id: .prof_psikhologiia,
            name: "Психология",
            totalQuestions: 20,
            maxScore: 40,
            description: "Психология",
            topics: [],
            isProfile: true
        ),
        .prof_radiotekhnika_zhane_telekommunikatsiia_negizderi: SubjectConfig(
            id: .prof_radiotekhnika_zhane_telekommunikatsiia_negizderi,
            name: "Радиотехника және телекоммуникация негіздері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Радиотехника және телекоммуникация негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_saiasat_teoriiasy: SubjectConfig(
            id: .prof_saiasat_teoriiasy,
            name: "Саясат теориясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Саясат теориясы",
            topics: [],
            isProfile: true
        ),
        .prof_seismikalyk_zhazbalar_boiynsha_zher_silkinudin_parametrlerin_anyktau: SubjectConfig(
            id: .prof_seismikalyk_zhazbalar_boiynsha_zher_silkinudin_parametrlerin_anyktau,
            name: "Сейсмикалық жазбалар бойынша жер сілкінудің параметрлерін анықтау",
            totalQuestions: 20,
            maxScore: 40,
            description: "Сейсмикалық жазбалар бойынша жер сілкінудің параметрлерін анықтау",
            topics: [],
            isProfile: true
        ),
        .prof_seismologiianyn_fizikalyk_negizderi: SubjectConfig(
            id: .prof_seismologiianyn_fizikalyk_negizderi,
            name: "Сейсмологияның физикалық негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Сейсмологияның физикалық негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_sintetikalyk_darilik_zattardyn_khimiiasy_zhane_tekhnologiiasy: SubjectConfig(
            id: .prof_sintetikalyk_darilik_zattardyn_khimiiasy_zhane_tekhnologiiasy,
            name: "Синтетикалық дәрілік заттардың химиясы және технологиясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Синтетикалық дәрілік заттардың химиясы және технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_situatsiialyk_keis: SubjectConfig(
            id: .prof_situatsiialyk_keis,
            name: "Ситуациялық кейс",
            totalQuestions: 20,
            maxScore: 40,
            description: "Ситуациялық кейс",
            topics: [],
            isProfile: true
        ),
        .prof_sot_ekspertologiiasy: SubjectConfig(
            id: .prof_sot_ekspertologiiasy,
            name: "Сот экспертологиясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Сот экспертологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_su_resurstaryn_keshendi_paidalanu: SubjectConfig(
            id: .prof_su_resurstaryn_keshendi_paidalanu,
            name: "Су ресурстарын кешенді пайдалану",
            totalQuestions: 20,
            maxScore: 40,
            description: "Су ресурстарын кешенді пайдалану",
            topics: [],
            isProfile: true
        ),
        .prof_syzykty_avtomatty_retteu_zhuieleri: SubjectConfig(
            id: .prof_syzykty_avtomatty_retteu_zhuieleri,
            name: "Сызықты автоматты реттеу жүйелері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Сызықты автоматты реттеу жүйелері",
            topics: [],
            isProfile: true
        ),
        .prof_synaudan_otkizu_onim_kauipsizdigi_men_bakylau: SubjectConfig(
            id: .prof_synaudan_otkizu_onim_kauipsizdigi_men_bakylau,
            name: "Сынаудан өткізу, өнім қауіпсіздігі мен бақылау",
            totalQuestions: 20,
            maxScore: 40,
            description: "Сынаудан өткізу, өнім қауіпсіздігі мен бақылау",
            topics: [],
            isProfile: true
        ),
        .prof_saulettik_tipologiia: SubjectConfig(
            id: .prof_saulettik_tipologiia,
            name: "Сәулеттік типология",
            totalQuestions: 30,
            maxScore: 30,
            description: "Сәулеттік типология",
            topics: [],
            isProfile: true
        ),
        .prof_tamak_ondirisinin_zhalpy_tekhnologiiasy: SubjectConfig(
            id: .prof_tamak_ondirisinin_zhalpy_tekhnologiiasy,
            name: "Тамақ өндірісінің жалпы технологиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Тамақ өндірісінің жалпы технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_tarikhty_okytu_adistemesi: SubjectConfig(
            id: .prof_tarikhty_okytu_adistemesi,
            name: "Тарихты оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Тарихты оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_tasmaldaudy_uiymdastyru_zhane_kozgalysty_baskaru: SubjectConfig(
            id: .prof_tasmaldaudy_uiymdastyru_zhane_kozgalysty_baskaru,
            name: "Тасмалдауды ұйымдастыру және қозғалысты басқару",
            totalQuestions: 20,
            maxScore: 40,
            description: "Тасмалдауды ұйымдастыру және қозғалысты басқару",
            topics: [],
            isProfile: true
        ),
        .prof_tau_ken_kasiporyndarynyn_kurylysy: SubjectConfig(
            id: .prof_tau_ken_kasiporyndarynyn_kurylysy,
            name: "Тау-кен кәсіпорындарының құрылысы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Тау-кен кәсіпорындарының құрылысы",
            topics: [],
            isProfile: true
        ),
        .prof_tau_ken_ondirisinyn_negizderi: SubjectConfig(
            id: .prof_tau_ken_ondirisinyn_negizderi,
            name: "Тау-кен өңдірісіның негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Тау-кен өңдірісіның негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_teoriialyk_mekhanika: SubjectConfig(
            id: .prof_teoriialyk_mekhanika,
            name: "Теориялық механика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Теориялық механика",
            topics: [],
            isProfile: true
        ),
        .prof_topyraktanu: SubjectConfig(
            id: .prof_topyraktanu,
            name: "Топырақтану",
            totalQuestions: 20,
            maxScore: 40,
            description: "Топырақтану",
            topics: [],
            isProfile: true
        ),
        .prof_turizmologiia_negizderi: SubjectConfig(
            id: .prof_turizmologiia_negizderi,
            name: "Туризмология негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Туризмология негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_til_teoriiasynyn_negizderi_agylshyn: SubjectConfig(
            id: .prof_til_teoriiasynyn_negizderi_agylshyn,
            name: "Тіл теориясының негіздері (ағылшын)",
            totalQuestions: 30,
            maxScore: 30,
            description: "Тіл теориясының негіздері (ағылшын)",
            topics: [],
            isProfile: true
        ),
        .prof_turki_tilderinin_salystyrmaly_tarikhi_grammatikasy: SubjectConfig(
            id: .prof_turki_tilderinin_salystyrmaly_tarikhi_grammatikasy,
            name: "Түркі тілдерінің салыстырмалы-тарихи грамматикасы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Түркі тілдерінің салыстырмалы-тарихи грамматикасы",
            topics: [],
            isProfile: true
        ),
        .prof_turki_khalyktarynyn_zhalpy_tarikhy: SubjectConfig(
            id: .prof_turki_khalyktarynyn_zhalpy_tarikhy,
            name: "Түркі халықтарының жалпы тарихы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Түркі халықтарының жалпы тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_tutas_orta_mekhanikasyna_kirispe: SubjectConfig(
            id: .prof_tutas_orta_mekhanikasyna_kirispe,
            name: "Тұтас орта механикасына кіріспе",
            totalQuestions: 20,
            maxScore: 40,
            description: "Тұтас орта механикасына кіріспе",
            topics: [],
            isProfile: true
        ),
        .prof_farmatsevtikalyk_khimiia_zhane_farmakognoziia: SubjectConfig(
            id: .prof_farmatsevtikalyk_khimiia_zhane_farmakognoziia,
            name: "Фармацевтикалық химия және фармакогнозия",
            totalQuestions: 20,
            maxScore: 40,
            description: "Фармацевтикалық химия және фармакогнозия",
            topics: [],
            isProfile: true
        ),
        .prof_farmatsiianyn_baskaryluy: SubjectConfig(
            id: .prof_farmatsiianyn_baskaryluy,
            name: "Фармацияның басқарылуы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Фармацияның басқарылуы",
            topics: [],
            isProfile: true
        ),
        .prof_fizika: SubjectConfig(
            id: .prof_fizika,
            name: "Физика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Физика",
            topics: [],
            isProfile: true
        ),
        .prof_fizika_tekhnologiiasy: SubjectConfig(
            id: .prof_fizika_tekhnologiiasy,
            name: "Физика технологиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Физика технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_fizikalyk_meteorologiia: SubjectConfig(
            id: .prof_fizikalyk_meteorologiia,
            name: "Физикалық метеорология",
            totalQuestions: 30,
            maxScore: 30,
            description: "Физикалық метеорология",
            topics: [],
            isProfile: true
        ),
        .prof_fizikalyk_khimiia: SubjectConfig(
            id: .prof_fizikalyk_khimiia,
            name: "Физикалық химия",
            totalQuestions: 30,
            maxScore: 30,
            description: "Физикалық химия",
            topics: [],
            isProfile: true
        ),
        .prof_fizikany_okytu_adistemesi: SubjectConfig(
            id: .prof_fizikany_okytu_adistemesi,
            name: "Физиканы оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Физиканы оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_flotatsiialyk_baiytu_adisteri: SubjectConfig(
            id: .prof_flotatsiialyk_baiytu_adisteri,
            name: "Флотациялық байыту әдістері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Флотациялық байыту әдістері",
            topics: [],
            isProfile: true
        ),
        .prof_folklor: SubjectConfig(
            id: .prof_folklor,
            name: "Фольклор",
            totalQuestions: 30,
            maxScore: 30,
            description: "Фольклор",
            topics: [],
            isProfile: true
        ),
        .prof_khalykaralyk_katynastar_zhuiesindegi_aimaktardyn_kazirgi_maseleleri: SubjectConfig(
            id: .prof_khalykaralyk_katynastar_zhuiesindegi_aimaktardyn_kazirgi_maseleleri,
            name: "Халықаралық қатынастар жүйесіндегі аймақтардың қазіргі мәселелері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Халықаралық қатынастар жүйесіндегі аймақтардың қазіргі мәселелері",
            topics: [],
            isProfile: true
        ),
        .prof_khimiia: SubjectConfig(
            id: .prof_khimiia,
            name: "Химия",
            totalQuestions: 30,
            maxScore: 30,
            description: "Химия",
            topics: [],
            isProfile: true
        ),
        .prof_khimiia_m111: SubjectConfig(
            id: .prof_khimiia_m111,
            name: "Химия М111",
            totalQuestions: 20,
            maxScore: 40,
            description: "Химия М111",
            topics: [],
            isProfile: true
        ),
        .prof_khimiiany_okytu_adistemesi: SubjectConfig(
            id: .prof_khimiiany_okytu_adistemesi,
            name: "Химияны оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Химияны оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_shygys_elderinin_zhana_zhane_kazirgi_zaman_tarikhy: SubjectConfig(
            id: .prof_shygys_elderinin_zhana_zhane_kazirgi_zaman_tarikhy,
            name: "Шығыс елдерінің жаңа және қазіргі заман тарихы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Шығыс елдерінің жаңа және қазіргі заман тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_ekologiialyk_monitoring: SubjectConfig(
            id: .prof_ekologiialyk_monitoring,
            name: "Экологиялық мониторинг",
            totalQuestions: 20,
            maxScore: 40,
            description: "Экологиялық мониторинг",
            topics: [],
            isProfile: true
        ),
        .prof_ekonomika_zhane_zhylzhymaityn_mulikti_baskaru: SubjectConfig(
            id: .prof_ekonomika_zhane_zhylzhymaityn_mulikti_baskaru,
            name: "Экономика және жылжымайтын мүлікті басқару",
            totalQuestions: 30,
            maxScore: 30,
            description: "Экономика және жылжымайтын мүлікті басқару",
            topics: [],
            isProfile: true
        ),
        .prof_ekonomikalyk_teoriia: SubjectConfig(
            id: .prof_ekonomikalyk_teoriia,
            name: "Экономикалық теория",
            totalQuestions: 30,
            maxScore: 30,
            description: "Экономикалық теория",
            topics: [],
            isProfile: true
        ),
        .prof_ekonomikalyk_teoriia_negizderi: SubjectConfig(
            id: .prof_ekonomikalyk_teoriia_negizderi,
            name: "Экономикалық теория негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Экономикалық теория негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_ekonomikany_memlekettik_retteu: SubjectConfig(
            id: .prof_ekonomikany_memlekettik_retteu,
            name: "Экономиканы мемлекеттік реттеу",
            totalQuestions: 20,
            maxScore: 40,
            description: "Экономиканы мемлекеттік реттеу",
            topics: [],
            isProfile: true
        ),
        .prof_ekskursiiatanu: SubjectConfig(
            id: .prof_ekskursiiatanu,
            name: "Экскурсиятану",
            totalQuestions: 20,
            maxScore: 40,
            description: "Экскурсиятану",
            topics: [],
            isProfile: true
        ),
        .prof_elektr_mashinalary: SubjectConfig(
            id: .prof_elektr_mashinalary,
            name: "Электр машиналары",
            totalQuestions: 20,
            maxScore: 40,
            description: "Электр машиналары",
            topics: [],
            isProfile: true
        ),
        .prof_elektr_tekhnikanyn_teoriialyk_negizderi: SubjectConfig(
            id: .prof_elektr_tekhnikanyn_teoriialyk_negizderi,
            name: "Электр техниканың теориялық негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Электр техниканың теориялық негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_elektr_tekhnikanyn_teoriialyk_negizderi_kamtamasyz_etu: SubjectConfig(
            id: .prof_elektr_tekhnikanyn_teoriialyk_negizderi_kamtamasyz_etu,
            name: "Электр техниканың теориялық негіздері қамтамасыз ету",
            totalQuestions: 30,
            maxScore: 30,
            description: "Электр техниканың теориялық негіздері қамтамасыз ету",
            topics: [],
            isProfile: true
        ),
        .prof_elektrlik_bailanys_teoriiasy_tekhnologiialar: SubjectConfig(
            id: .prof_elektrlik_bailanys_teoriiasy_tekhnologiialar,
            name: "Электрлік байланыс теориясы технологиялар",
            totalQuestions: 30,
            maxScore: 30,
            description: "Электрлік байланыс теориясы технологиялар",
            topics: [],
            isProfile: true
        ),
        .prof_elektronika_negizderi: SubjectConfig(
            id: .prof_elektronika_negizderi,
            name: "Электроника негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Электроника негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_elektrtekhnikanyn_teoriialyk_negizderi: SubjectConfig(
            id: .prof_elektrtekhnikanyn_teoriialyk_negizderi,
            name: "Электртехниканың теориялық негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Электртехниканың теориялық негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_kazandyk_kondyrgylar_zhane_zhylulyk_kozgaltkyshtar: SubjectConfig(
            id: .prof_kazandyk_kondyrgylar_zhane_zhylulyk_kozgaltkyshtar,
            name: "Қазандық қондырғылар және жылулық қозғалтқыштар",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қазандық қондырғылар және жылулық қозғалтқыштар",
            topics: [],
            isProfile: true
        ),
        .prof_kazak_zhurnalistikasynyn_tarikhy: SubjectConfig(
            id: .prof_kazak_zhurnalistikasynyn_tarikhy,
            name: "Қазақ журналистикасының тарихы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазақ журналистикасының тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_kazak_madenietinin_tarikhy: SubjectConfig(
            id: .prof_kazak_madenietinin_tarikhy,
            name: "Қазақ мәдениетінің тарихы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазақ мәдениетінің тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_kazak_tilin_okytu_adistemesi: SubjectConfig(
            id: .prof_kazak_tilin_okytu_adistemesi,
            name: "Қазақ тілін оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қазақ тілін оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_kazak_filosofiiasy: SubjectConfig(
            id: .prof_kazak_filosofiiasy,
            name: "Қазақ философиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазақ философиясы",
            topics: [],
            isProfile: true
        ),
        .prof_kazakstan_respublikasynyn_syrtky_saiasaty: SubjectConfig(
            id: .prof_kazakstan_respublikasynyn_syrtky_saiasaty,
            name: "Қазақстан Республикасының сыртқы саясаты",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазақстан Республикасының сыртқы саясаты",
            topics: [],
            isProfile: true
        ),
        .prof_kazakstan_respublikasynyn_ulttyk_bagalau_standarttary: SubjectConfig(
            id: .prof_kazakstan_respublikasynyn_ulttyk_bagalau_standarttary,
            name: "Қазақстан Республикасының Ұлттық бағалау стандарттары",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қазақстан Республикасының Ұлттық бағалау стандарттары",
            topics: [],
            isProfile: true
        ),
        .prof_kazakstan_bioresurstary: SubjectConfig(
            id: .prof_kazakstan_bioresurstary,
            name: "Қазақстан биоресурстары",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазақстан биоресурстары",
            topics: [],
            isProfile: true
        ),
        .prof_kazakstan_tarikhy: SubjectConfig(
            id: .prof_kazakstan_tarikhy,
            name: "Қазақстан тарихы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазақстан тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_kazakstandagy_kazirgi_dini_zhagdai: SubjectConfig(
            id: .prof_kazakstandagy_kazirgi_dini_zhagdai,
            name: "Қазақстандағы қазіргі діни жағдай",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қазақстандағы қазіргі діни жағдай",
            topics: [],
            isProfile: true
        ),
        .prof_kazakstannyn_ezhelgi_zhane_ortagasyrlar_tarikhy: SubjectConfig(
            id: .prof_kazakstannyn_ezhelgi_zhane_ortagasyrlar_tarikhy,
            name: "Қазақстанның ежелгі және ортағасырлар тарихы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазақстанның ежелгі және ортағасырлар тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_kazakstannyn_fizikalyk_geografiiasy: SubjectConfig(
            id: .prof_kazakstannyn_fizikalyk_geografiiasy,
            name: "Қазақстанның физикалық географиясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазақстанның физикалық географиясы",
            topics: [],
            isProfile: true
        ),
        .prof_kazirgi_dasturden_tys_dini_kozgalystar_zhane_kultter: SubjectConfig(
            id: .prof_kazirgi_dasturden_tys_dini_kozgalystar_zhane_kultter,
            name: "Қазіргі дәстүрден тыс діни қозғалыстар және культтер",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қазіргі дәстүрден тыс діни қозғалыстар және культтер",
            topics: [],
            isProfile: true
        ),
        .prof_kazirgi_zhurnalistikanyn_zhanrlyk_turi_men_kyzmeti: SubjectConfig(
            id: .prof_kazirgi_zhurnalistikanyn_zhanrlyk_turi_men_kyzmeti,
            name: "Қазіргі журналистиканың жанрлық түрі мен қызметі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қазіргі журналистиканың жанрлық түрі мен қызметі",
            topics: [],
            isProfile: true
        ),
        .prof_kazirgi_kazak_tili: SubjectConfig(
            id: .prof_kazirgi_kazak_tili,
            name: "Қазіргі қазақ тілі",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қазіргі қазақ тілі",
            topics: [],
            isProfile: true
        ),
        .prof_kazirgi_kazak_adebieti: SubjectConfig(
            id: .prof_kazirgi_kazak_adebieti,
            name: "Қазіргі қазақ әдебиеті",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қазіргі қазақ әдебиеті",
            topics: [],
            isProfile: true
        ),
        .prof_kala_kurylys_negizderi: SubjectConfig(
            id: .prof_kala_kurylys_negizderi,
            name: "Қала құрылыс негіздері",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қала құрылыс негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_karzhy_negizderi: SubjectConfig(
            id: .prof_karzhy_negizderi,
            name: "Қаржы негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Қаржы негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_koldanbaly_saiasattanu: SubjectConfig(
            id: .prof_koldanbaly_saiasattanu,
            name: "Қолданбалы саясаттану",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қолданбалы саясаттану",
            topics: [],
            isProfile: true
        ),
        .prof_kogamdyk_densaulyk: SubjectConfig(
            id: .prof_kogamdyk_densaulyk,
            name: "Қоғамдық денсаулық",
            totalQuestions: 20,
            maxScore: 40,
            description: "Қоғамдық денсаулық",
            topics: [],
            isProfile: true
        ),
        .prof_kuzhattanu_arkhiv_isi: SubjectConfig(
            id: .prof_kuzhattanu_arkhiv_isi,
            name: "Құжаттану архив ісі",
            totalQuestions: 30,
            maxScore: 30,
            description: "Құжаттану архив ісі",
            topics: [],
            isProfile: true
        ),
        .prof_kurylys_zhinaktau_zhumystarynyn_tekhnologiiasy: SubjectConfig(
            id: .prof_kurylys_zhinaktau_zhumystarynyn_tekhnologiiasy,
            name: "Құрылыс жинақтау жұмыстарының технологиясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Құрылыс жинақтау жұмыстарының технологиясы",
            topics: [],
            isProfile: true
        ),
        .prof_kurylys_materialdary: SubjectConfig(
            id: .prof_kurylys_materialdary,
            name: "Құрылыс материалдары",
            totalQuestions: 30,
            maxScore: 30,
            description: "Құрылыс материалдары",
            topics: [],
            isProfile: true
        ),
        .prof_kurylys_materialdary_buiymdarynyn_zhane: SubjectConfig(
            id: .prof_kurylys_materialdary_buiymdarynyn_zhane,
            name: "Құрылыс материалдары бұйымдарының және",
            totalQuestions: 30,
            maxScore: 30,
            description: "Құрылыс материалдары бұйымдарының және",
            topics: [],
            isProfile: true
        ),
        .prof_kurylys_materialdary_infrakurylym: SubjectConfig(
            id: .prof_kurylys_materialdary_infrakurylym,
            name: "Құрылыс материалдары инфрақұрылым",
            totalQuestions: 30,
            maxScore: 30,
            description: "Құрылыс материалдары инфрақұрылым",
            topics: [],
            isProfile: true
        ),
        .prof_kurylys_ondirisinin_tekhnologiiasy_1: SubjectConfig(
            id: .prof_kurylys_ondirisinin_tekhnologiiasy_1,
            name: "Құрылыс өндірісінің технологиясы 1",
            totalQuestions: 20,
            maxScore: 40,
            description: "Құрылыс өндірісінің технологиясы 1",
            topics: [],
            isProfile: true
        ),
        .prof_kukyk_zhane_ekonomika_negizderin_okytu_adistemesi: SubjectConfig(
            id: .prof_kukyk_zhane_ekonomika_negizderin_okytu_adistemesi,
            name: "Құқық және экономика негіздерін оқыту әдістемесі",
            totalQuestions: 20,
            maxScore: 40,
            description: "Құқық және экономика негіздерін оқыту әдістемесі",
            topics: [],
            isProfile: true
        ),
        .prof_ushu_apparattarynyn_kurylysy_tekhnologiialar: SubjectConfig(
            id: .prof_ushu_apparattarynyn_kurylysy_tekhnologiialar,
            name: "Ұшу аппараттарының құрылысы технологиялар",
            totalQuestions: 30,
            maxScore: 30,
            description: "Ұшу аппараттарының құрылысы технологиялар",
            topics: [],
            isProfile: true
        ),
        .prof_ushu_apparattarynyn_kurylysy_kozgaltkyshtardy_ushuda_paidalanu: SubjectConfig(
            id: .prof_ushu_apparattarynyn_kurylysy_kozgaltkyshtardy_ushuda_paidalanu,
            name: "Ұшу аппараттарының құрылысы қозғалтқыштарды ұшуда пайдалану",
            totalQuestions: 30,
            maxScore: 30,
            description: "Ұшу аппараттарының құрылысы қозғалтқыштарды ұшуда пайдалану",
            topics: [],
            isProfile: true
        ),
        .prof_adebiet_teoriiasy: SubjectConfig(
            id: .prof_adebiet_teoriiasy,
            name: "Әдебиет теориясы",
            totalQuestions: 20,
            maxScore: 40,
            description: "Әдебиет теориясы",
            topics: [],
            isProfile: true
        ),
        .prof_aleumettanu_tarikhy: SubjectConfig(
            id: .prof_aleumettanu_tarikhy,
            name: "Әлеуметтану тарихы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Әлеуметтану тарихы",
            topics: [],
            isProfile: true
        ),
        .prof_aleumettanulyk_zertteulerdi_zhosparlau_zhane_uiymdastyru: SubjectConfig(
            id: .prof_aleumettanulyk_zertteulerdi_zhosparlau_zhane_uiymdastyru,
            name: "Әлеуметтанулық зерттеулерді жоспарлау және ұйымдастыру",
            totalQuestions: 20,
            maxScore: 40,
            description: "Әлеуметтанулық зерттеулерді жоспарлау және ұйымдастыру",
            topics: [],
            isProfile: true
        ),
        .prof_aleumettik_zhumys_teoriiasy: SubjectConfig(
            id: .prof_aleumettik_zhumys_teoriiasy,
            name: "Әлеуметтік жұмыс теориясы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Әлеуметтік жұмыс теориясы",
            topics: [],
            isProfile: true
        ),
        .prof_aleumettik_zhumys_adisteri_men_tekhnologiialary: SubjectConfig(
            id: .prof_aleumettik_zhumys_adisteri_men_tekhnologiialary,
            name: "Әлеуметтік жұмыс әдістері мен технологиялары",
            totalQuestions: 20,
            maxScore: 40,
            description: "Әлеуметтік жұмыс әдістері мен технологиялары",
            topics: [],
            isProfile: true
        ),
        .prof_aleumettik_pedagogika: SubjectConfig(
            id: .prof_aleumettik_pedagogika,
            name: "Әлеуметтік педагогика",
            totalQuestions: 30,
            maxScore: 30,
            description: "Әлеуметтік педагогика",
            topics: [],
            isProfile: true
        ),
        .prof_aleumettik_psikhologiia: SubjectConfig(
            id: .prof_aleumettik_psikhologiia,
            name: "Әлеуметтік психология",
            totalQuestions: 20,
            maxScore: 40,
            description: "Әлеуметтік психология",
            topics: [],
            isProfile: true
        ),
        .prof_aleumettik_filosofiia: SubjectConfig(
            id: .prof_aleumettik_filosofiia,
            name: "Әлеуметтік философия",
            totalQuestions: 20,
            maxScore: 40,
            description: "Әлеуметтік философия",
            topics: [],
            isProfile: true
        ),
        .prof_ozara_almasymdylyk_negizderi: SubjectConfig(
            id: .prof_ozara_almasymdylyk_negizderi,
            name: "Өзара алмасымдылық негіздері",
            totalQuestions: 30,
            maxScore: 30,
            description: "Өзара алмасымдылық негіздері",
            topics: [],
            isProfile: true
        ),
        .prof_onerkasiptik_kauipsizdikti_tekhnikalyk_retteu_sharalar: SubjectConfig(
            id: .prof_onerkasiptik_kauipsizdikti_tekhnikalyk_retteu_sharalar,
            name: "Өнеркәсіптік қауіпсіздікті техникалық реттеу шаралар",
            totalQuestions: 30,
            maxScore: 30,
            description: "Өнеркәсіптік қауіпсіздікті техникалық реттеу шаралар",
            topics: [],
            isProfile: true
        ),
        .prof_osimdik_sharuashylygy: SubjectConfig(
            id: .prof_osimdik_sharuashylygy,
            name: "Өсімдік шаруашылығы",
            totalQuestions: 30,
            maxScore: 30,
            description: "Өсімдік шаруашылығы",
            topics: [],
            isProfile: true
        ),

    ]
}
