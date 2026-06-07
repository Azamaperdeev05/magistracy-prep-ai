import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SPECIALTIES, Specialty } from '../data/specialties';
import { getSavedUser, updateUserProfileFields, UserProfile } from '../services/authService';
import { ArrowLeft, Info, ChevronDown } from 'lucide-react';
import ConfirmModal from './modals/ConfirmModal';

interface TestSetupScreenProps {
  onStart: (name: string) => Promise<void>;
  isLoading: boolean;
}

const TestSetupScreen: React.FC<TestSetupScreenProps> = ({ onStart, isLoading }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(getSavedUser());
  const navigate = useNavigate();

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    message: string;
    onConfirm: () => void;
    isAlert?: boolean;
    title?: string;
    confirmText?: string;
  } | null>(null);

  const showAlert = (message: string, title: string = 'Назар аударыңыз!') => {
    setModalConfig({
      message,
      onConfirm: () => {},
      isAlert: true,
      title
    });
    setModalOpen(true);
  };

  const showConfirm = (
    message: string, 
    onConfirm: () => void, 
    title: string = 'Назар аударыңыз!', 
    confirmText?: string
  ) => {
    setModalConfig({
      message,
      onConfirm,
      isAlert: false,
      title,
      confirmText
    });
    setModalOpen(true);
  };

  // Personal details state variables (fully editable inputs)
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [email, setEmail] = useState('');

  // Testing parameters state variables
  const [testLang, setTestLang] = useState(currentUser?.test_lang || 'қазақша');
  const [foreignLang, setForeignLang] = useState(currentUser?.foreign_lang || 'ағылшын');
  const [tgoLang, setTgoLang] = useState(currentUser?.tgo_lang || 'қазақша');
  const [selectedGopCode, setSelectedGopCode] = useState(currentUser?.specialty_code || 'M094');

  // Split name on load or whenever currentUser changes
  useEffect(() => {
    if (currentUser) {
      if (currentUser.last_name || currentUser.first_name) {
        setLastName(currentUser.last_name || '');
        setFirstName(currentUser.first_name || '');
        setPatronymic(currentUser.patronymic || '');
      } else {
        const nameVal = currentUser.full_name || '';
        if (nameVal.trim()) {
          const parts = nameVal.trim().split(/\s+/);
          setLastName(parts[0] || '');
          setFirstName(parts[1] || '');
          setPatronymic(parts.slice(2).join(' ') || '');
        } else {
          setLastName('');
          setFirstName('');
          setPatronymic('');
        }
      }
      
      setEmail(currentUser.email || '');
      if (currentUser.test_lang) setTestLang(currentUser.test_lang);
      if (currentUser.foreign_lang) setForeignLang(currentUser.foreign_lang);
      if (currentUser.tgo_lang) setTgoLang(currentUser.tgo_lang);
      if (currentUser.specialty_code) setSelectedGopCode(currentUser.specialty_code);
    }
  }, [currentUser]);

  const selectedGop = SPECIALTIES.find(s => s.code === selectedGopCode) || SPECIALTIES.find(s => s.code === 'M094')!;

  const handleGopChange = (code: string) => {
    setSelectedGopCode(code);
  };

  const handleContinue = async () => {
    if (!lastName.trim() || !firstName.trim()) {
      showAlert('Тегі мен Аты өрістерін толтыру қажет');
      return;
    }

    const updatedFullName = `${lastName} ${firstName} ${patronymic}`.trim();
    const saveAndStart = async () => {
      try {
        updateUserProfileFields({
          last_name: lastName,
          first_name: firstName,
          patronymic: patronymic,
          full_name: updatedFullName,
          email,
          test_lang: testLang,
          foreign_lang: foreignLang,
          tgo_lang: tgoLang,
          specialty_code: selectedGop.code,
          specialty_name: selectedGop.name
        });

        // Start the test using updated user full name
        await onStart(updatedFullName);
      } catch (err: any) {
        showAlert(err.message || 'Қате орын алды', 'Қате орын алды');
      }
    };

    // If specialty is not implemented yet, warn the user
    if (!['M094'].includes(selectedGop.code)) {
      showConfirm(
        `«${selectedGop.name}» мамандығының сұрақтары әзірлену үстінде.\n\nТестке дайындықты IT бағытының (M094 - Ақпараттық технологиялар) профильдік сұрақтары арқылы жалғастыруды қалайсыз ба?`,
        saveAndStart,
        'Назар аударыңыз!',
        'Жалғастыру'
      );
    } else {
      await saveAndStart();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 py-10 px-4 md:px-8 selection:bg-blue-500/20">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/home')}
          className="mb-6 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Басты бетке қайту
        </button>

        {/* Section: Жеке мәліметтер */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-[2px] bg-[#3b82f6] flex-1"></div>
          <h2 className="text-xl font-extrabold tracking-widest text-[#1e293b] uppercase px-4 text-center">
            ЖЕКЕ МӘЛІМЕТТЕР
          </h2>
          <div className="h-[2px] bg-[#3b82f6] flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-8 gap-y-5 max-w-3xl mx-auto mb-10 text-sm font-bold text-slate-700">
          <div className="flex items-center">Тегі</div>
          <div>
            <input 
              type="text" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="Тегіңізді енгізіңіз"
              className="w-full max-w-md px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]" 
            />
          </div>

          <div className="flex items-center">Аты</div>
          <div>
            <input 
              type="text" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              placeholder="Атыңызды енгізіңіз"
              className="w-full max-w-md px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]" 
            />
          </div>

          <div className="flex items-center">Әкесінің аты</div>
          <div>
            <input 
              type="text" 
              value={patronymic} 
              onChange={(e) => setPatronymic(e.target.value)} 
              placeholder="Әкесінің атыңызды енгізіңіз (міндетті емес)"
              className="w-full max-w-md px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]" 
            />
          </div>

          <div className="flex items-center">Электронды мекен-жайыңыз</div>
          <div>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Электронды поштаңызды енгізіңіз"
              className="w-full max-w-md px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]" 
            />
          </div>
        </div>

        {/* Section: Тестілеу параметрлері */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-[2px] bg-[#3b82f6] flex-1"></div>
          <h2 className="text-xl font-extrabold tracking-widest text-[#1e293b] uppercase px-4 text-center">
            ТЕСТІЛЕУ ПАРАМЕТРЛЕРІ
          </h2>
          <div className="h-[2px] bg-[#3b82f6] flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-8 gap-y-5 max-w-3xl mx-auto mb-10 text-sm font-bold text-slate-700">
          <div className="flex items-center">Язык сдачи тестирования</div>
          <div className="relative w-full max-w-md">
            <select 
              value={testLang} 
              onChange={(e) => setTestLang(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold appearance-none cursor-pointer pr-10 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]"
            >
              <option value="қазақша">қазақша</option>
              <option value="орысша">орысша</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>

          <div className="flex items-center">Иностранный язык</div>
          <div className="relative w-full max-w-md">
            <select 
              value={foreignLang} 
              onChange={(e) => setForeignLang(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold appearance-none cursor-pointer pr-10 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]"
            >
              <option value="ағылшын">ағылшын</option>
              <option value="неміс">неміс</option>
              <option value="француз">француз</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>

          <div className="flex items-center">Язык сдачи ТГО</div>
          <div className="relative w-full max-w-md">
            <select 
              value={tgoLang} 
              onChange={(e) => setTgoLang(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold appearance-none cursor-pointer pr-10 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]"
            >
              <option value="қазақша">қазақша</option>
              <option value="орысша">орысша</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>

          <div className="flex items-center">ГОП</div>
          <div className="relative w-full max-w-md">
            <select 
              value={selectedGopCode} 
              onChange={(e) => handleGopChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold appearance-none cursor-pointer pr-10 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]"
            >
              {SPECIALTIES.filter(spec => ['M094'].includes(spec.code)).map((spec) => (
                <option key={spec.code} value={spec.code}>
                  {spec.code} - {spec.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>
        </div>

        {/* Specialty warning banner */}
        {!['M094'].includes(selectedGopCode) && (
          <div className="max-w-3xl mx-auto mb-8 bg-amber-50 border border-amber-300/70 rounded-xl p-4 flex gap-3 text-amber-800 text-sm font-semibold leading-relaxed shadow-sm">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold">Назар аударыңыз!</span> «{selectedGop.name}» мамандығының сұрақтары әзірлену үстінде. Әзірге сіз жалпы пәндерді (Ағылшын тілі + ОДАТ) немесе дайындық үшін IT бағытының (M094) сұрақтарын тапсыра аласыз.
            </div>
          </div>
        )}

        {/* Section: Нұсқалар саны кестесі (Replica NTC layout) */}
        <div className="max-w-3xl mx-auto mb-10 overflow-hidden rounded-sm border border-slate-700 bg-white">
          <table className="w-full border-collapse text-sm text-center">
            <thead>
              <tr className="border-b border-slate-700 bg-white">
                <th colSpan={5} className="p-3 font-extrabold text-[#1e293b] tracking-wider uppercase text-center border-b border-slate-700">
                  НҰСҚАЛАР САНЫ
                </th>
              </tr>
              <tr className="bg-white border-b border-slate-700">
                <th className="p-2 border-r border-slate-700 font-extrabold text-slate-800 text-xs w-12">№</th>
                <th className="p-2 border-r border-slate-700 font-extrabold text-slate-800 text-xs">ПӘН</th>
                <th className="p-2 border-r border-slate-700 font-extrabold text-slate-800 text-xs w-24">БАРЛЫҒЫ</th>
                <th className="p-2 border-r border-slate-700 font-extrabold text-slate-800 text-xs w-32">ҚОЛДАНЫЛҒАН</th>
                <th className="p-2 font-extrabold text-slate-800 text-xs w-32">ҚОЛДАНЫЛМАҒАН</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 text-slate-800 font-semibold bg-white">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border-r border-slate-700">1</td>
                <td className="p-3 border-r border-slate-700 text-center">Ағылшын тілі</td>
                <td className="p-3 border-r border-slate-700">5</td>
                <td className="p-3 border-r border-slate-700">1</td>
                <td className="p-3">4</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border-r border-slate-700">2</td>
                <td className="p-3 border-r border-slate-700 text-center">Оқу дайындығын анықтайтын тест</td>
                <td className="p-3 border-r border-slate-700">5</td>
                <td className="p-3 border-r border-slate-700">1</td>
                <td className="p-3">4</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border-r border-slate-700">3</td>
                <td className="p-3 border-r border-slate-700 text-center">{selectedGop.profile1}</td>
                <td className="p-3 border-r border-slate-700">{['M094'].includes(selectedGopCode) ? 5 : 0}</td>
                <td className="p-3 border-r border-slate-700">{['M094'].includes(selectedGopCode) ? 1 : 0}</td>
                <td className="p-3">{['M094'].includes(selectedGopCode) ? 4 : 0}</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border-r border-slate-700">4</td>
                <td className="p-3 border-r border-slate-700 text-center">{selectedGop.profile2}</td>
                <td className="p-3 border-r border-slate-700">{['M094'].includes(selectedGopCode) ? 5 : 0}</td>
                <td className="p-3 border-r border-slate-700">{['M094'].includes(selectedGopCode) ? 1 : 0}</td>
                <td className="p-3">{['M094'].includes(selectedGopCode) ? 4 : 0}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Start Button */}
        <div className="max-w-3xl mx-auto">
          <button
            onClick={handleContinue}
            disabled={isLoading}
            className="w-full py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold rounded-md transition-all active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-50 text-base shadow-lg hover:shadow-blue-500/10"
          >
            {isLoading ? 'Жүктелуде...' : 'Жалғастыру'}
          </button>
        </div>

        {modalConfig && (
          <ConfirmModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onConfirm={modalConfig.onConfirm}
            message={modalConfig.message}
            title={modalConfig.title}
            isAlert={modalConfig.isAlert}
            confirmText={modalConfig.confirmText}
          />
        )}
      </div>
    </div>
  );
};

export default TestSetupScreen;
