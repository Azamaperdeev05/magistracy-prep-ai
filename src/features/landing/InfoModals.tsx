import React, { useState } from 'react';
import { X, HelpCircle, ShieldCheck, FileText, Cookie, MessageSquare, Send, CheckCircle, Mail, User } from 'lucide-react';

export type ModalType = 'faq' | 'support' | 'privacy' | 'terms' | 'cookies' | null;

interface InfoModalsProps {
  activeModal: ModalType;
  onClose: () => void;
  isDark?: boolean;
}

export const InfoModals: React.FC<InfoModalsProps> = ({ activeModal, onClose, isDark = false }) => {
  const [supportFormSent, setSupportFormSent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!activeModal) return null;

  const bgCard = isDark ? 'bg-[#0f1219] text-slate-100 border-slate-800' : 'bg-white text-slate-900 border-slate-200';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-2xl max-h-[85vh] rounded-3xl border shadow-2xl overflow-hidden flex flex-col ${bgCard}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-center justify-between shrink-0 ${isDark ? 'border-slate-800 bg-[#131722]' : 'border-slate-100 bg-slate-50/80'}`}>
          <div className="flex items-center gap-3">
            {activeModal === 'faq' && <HelpCircle className="w-5 h-5 text-blue-600" />}
            {activeModal === 'support' && <MessageSquare className="w-5 h-5 text-emerald-500" />}
            {activeModal === 'privacy' && <ShieldCheck className="w-5 h-5 text-indigo-500" />}
            {activeModal === 'terms' && <FileText className="w-5 h-5 text-amber-500" />}
            {activeModal === 'cookies' && <Cookie className="w-5 h-5 text-rose-500" />}

            <h3 className="text-lg font-black uppercase tracking-tight">
              {activeModal === 'faq' && 'Жиі қойылатын сұрақтар (FAQ)'}
              {activeModal === 'support' && 'Қолдау көрсету орталығы'}
              {activeModal === 'privacy' && 'Құпиялылық саясаты'}
              {activeModal === 'terms' && 'Пайдалану ережелері'}
              {activeModal === 'cookies' && 'Cookies саясаты'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
              isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200/70 text-slate-500 hover:text-slate-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          {/* FAQ Modal Content */}
          {activeModal === 'faq' && (
            <div className="space-y-3">
              {[
                {
                  q: 'MagisCore платформасы деген не?',
                  a: 'MagisCore — Қазақстандағы магистратураға түсушілерге арналған кешенді дайындық онлайн платформасы. Мұнда 133 мамандық спецификациясы, ҰТО форматындағы 150 сұрақты тестілеу симуляторы және ИИ Тьютор ассистенті қамтылған.'
                },
                {
                  q: 'Платформада дайындалу тегін бе?',
                  a: 'Иә, MagisCore платформысында тіркеліп, негізгі тест симуляторлары мен мамандық спецификацияларын тегін пайдалана аласыз.'
                },
                {
                  q: 'Кешенді тестілеу (КТ) форматы қалай өтеді?',
                  a: 'КТ емтиханы 150 сұрақтан тұрады: Шет тілі (Ағылшын) — 50 сұрақ, ТҒО (ОДАТ) — 30 сұрақ, 1-бейіндік пән — 35 сұрақ, 2-бейіндік пән — 35 сұрақ. Жалпы бөлінген уақыт — 230 минут.'
                },
                {
                  q: 'ИИ Ассистент қате талдауын қалай жасайды?',
                  a: 'Тестілеу аяқталған соң ИИ тьютор әр сұрақ бойынша дұрыс жауаптың себебін, ережесін және грамматикалық түсіндірмелерін қадамдап талдап береді.'
                },
                {
                  q: 'ЖОО және Грант базасы актуалды ма?',
                  a: 'Иә, Univision.kz интеграциясы арқылы Қазақстанның 125+ университеті бойынша соңғы жылдардың грант шекті баллдары мен оқу бағдарламалары жаңартылып отырады.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all ${
                    isDark ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200/80 bg-slate-50/50'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full p-4 text-left font-bold flex items-center justify-between gap-4"
                  >
                    <span>{item.q}</span>
                    <span className="text-blue-600 font-black">{openFaqIndex === index ? '−' : '+'}</span>
                  </button>
                  {openFaqIndex === index && (
                    <div className={`px-4 pb-4 text-xs leading-relaxed border-t pt-3 ${textMuted} ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'}`}>
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Support Modal Content */}
          {activeModal === 'support' && (
            <div className="space-y-6">
              <p className={`text-xs sm:text-sm leading-relaxed ${textMuted}`}>
                Сұрақтарыңыз болса немесе платформа бойынша көмек қажет болса, бізге кез келген уақытта жаза аласыз.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://t.me/magiscore_support"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-colors ${
                    isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-slate-50 border-slate-200 hover:border-blue-500'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Telegram Қолдау</p>
                    <p className="text-sm font-black text-blue-600">@magiscore_support</p>
                  </div>
                </a>

                <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Электронды пошта</p>
                    <p className="text-sm font-black">support@magiscore.kz</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`p-5 rounded-2xl border ${isDark ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-white'}`}>
                <h4 className="font-extrabold text-sm uppercase mb-3">Хабарлама қалдыру</h4>
                {supportFormSent ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-center font-bold text-xs flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Хабарламаңыз сәтті жіберілді! Оператор жақында жауап береді.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSupportFormSent(true);
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Аты-жөніңіз"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs outline-none transition-colors ${
                          isDark ? 'bg-slate-900 border-slate-800 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email немесе Телефон"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs outline-none transition-colors ${
                          isDark ? 'bg-slate-900 border-slate-800 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    <div>
                      <textarea
                        required
                        rows={3}
                        placeholder="Сізді не қызықтырады немесе қандай мәселе болды?"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs outline-none transition-colors ${
                          isDark ? 'bg-slate-900 border-slate-800 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-md shadow-blue-500/20"
                    >
                      Хабарлама жіберу
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Privacy Policy Content */}
          {activeModal === 'privacy' && (
            <div className={`space-y-4 leading-relaxed text-xs sm:text-sm ${textMuted}`}>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">1. Деректерді жинау және пайдалану</h4>
              <p>
                MagisCore («Платформа») пайдаланушылардың жеке деректерін құпия ұстауға кепілдік береді. Тіркелу кезінде берілген аты-жөні, электрондық пошта мекенжайы және оқу прогресі тек тест нәтижелерін сақтау мен дайындық сапасын арттыру мақсатында қолданылады.
              </p>

              <h4 className="font-bold text-slate-900 dark:text-white text-base">2. Деректердің қауіпсіздігі</h4>
              <p>
                Пайдаланушылардың барлық құпия ақпараты заманауи шифрлау хаттамалары (SSL/TLS) арқылы қорғалған. Деректер үшінші тараптарға сатылмайды және жария етілмейді.
              </p>

              <h4 className="font-bold text-slate-900 dark:text-white text-base">3. Пайдаланушы құқықтары</h4>
              <p>
                Сіз кез келген уақытта өз аккаунтыңызды өшіруге, жеке деректеріңізді жаңартуға немесе статистиканы тазалауға құқылысыз.
              </p>
            </div>
          )}

          {/* Terms of Service Content */}
          {activeModal === 'terms' && (
            <div className={`space-y-4 leading-relaxed text-xs sm:text-sm ${textMuted}`}>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">1. Жалпы ережелер</h4>
              <p>
                Осы Ережелер MagisCore платформасын пайдалану тәртібін белгілейді. Платформада тіркелу арқылы сіз осы шарттармен толық келісесіз.
              </p>

              <h4 className="font-bold text-slate-900 dark:text-white text-base">2. Зияткерлік меншік</h4>
              <p>
                Платформадағы барлық тест сұрақтары, мамандық спецификациялары, оқу материалдары мен бағдарламалық код MagisCore меншігі болып табылады. Материалдарды рұқсатсыз көшіруге немесе коммерциялық мақсатта таратуға тыйым салынады.
              </p>

              <h4 className="font-bold text-slate-900 dark:text-white text-base">3. Жауапкершілік</h4>
              <p>
                Платформа КТ емтиханына максималды сапалы дайындалуға көмектеседі. Дегенмен, нақты емтихан нәтижесі студенттің жеке білімі мен дайындық деңгейіне байланысты.
              </p>
            </div>
          )}

          {/* Cookies Policy Content */}
          {activeModal === 'cookies' && (
            <div className={`space-y-4 leading-relaxed text-xs sm:text-sm ${textMuted}`}>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Cookies деген не?</h4>
              <p>
                Cookies — бұл веб-сайтқа кірген кезде құрылғыңызда сақталатын шағын мәтіндік файлдар. Олар сайттың дұрыс жұмыс істеуін, жүйеге кіру сессиясын сақтауды және пайдаланушы интерфейсін ыңғайлы етуді қамтамасыз етеді.
              </p>

              <h4 className="font-bold text-slate-900 dark:text-white text-base">Біз қолданатын cookies түрлері:</h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Маңызды Cookies:</strong> Жүйедегі авторизацияны сақтау үшін қажет.</li>
                <li><strong>Функционалды Cookies:</strong> Түс тақырыбын (Light/Dark mode) сақтау үшін.</li>
                <li><strong>Аналитикалық Cookies:</strong> Платформа жылдамдығын оңтайландыру мақсатында.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className={`p-4 sm:p-5 border-t flex justify-end shrink-0 ${isDark ? 'border-slate-800 bg-[#131722]' : 'border-slate-100 bg-slate-50/80'}`}>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Жабу
          </button>
        </div>
      </div>
    </div>
  );
};
