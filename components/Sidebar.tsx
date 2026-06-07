import React, { useState } from 'react';
import { User, FileText, Map, Calculator, Table, FlaskConical, LogOut } from 'lucide-react';
import ConfirmModal from './modals/ConfirmModal';

interface SidebarProps {
  onFinish: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFinish }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    message: string;
    onConfirm: () => void;
    isAlert?: boolean;
    title?: string;
  } | null>(null);

  const showAlert = (message: string) => {
    setModalConfig({
      message,
      onConfirm: () => {},
      isAlert: true,
      title: 'Ақпарат'
    });
    setModalOpen(true);
  };

  const showConfirm = (message: string, onConfirm: () => void) => {
    setModalConfig({
      message,
      onConfirm,
      isAlert: false,
      title: 'Назар аударыңыз!'
    });
    setModalOpen(true);
  };

  const tools = [
    { icon: <User className="w-6 h-6" />, label: "Жасұлан" },
    { icon: <FileText className="w-6 h-6" />, label: "Бөлімдер" },
    { icon: <Map className="w-6 h-6" />, label: "Жауап картасы" },
    { icon: <Calculator className="w-6 h-6" />, label: "Калькулятор" },
    { icon: <Table className="w-6 h-6" />, label: "Менделеев кестесі" },
    { icon: <FlaskConical className="w-6 h-6" />, label: "Ерігіштік кестесі" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center py-4 text-white text-center">
        {/* User / Tools */}
        <div className="flex flex-col gap-6 w-full">
            {tools.map((tool, index) => (
                <div 
                    key={index} 
                    onClick={() => showAlert(`"${tool.label}" құралы әлі қосылмаған. Бұл тек интерфейс демосы.`)}
                    className="flex flex-col items-center gap-1 cursor-pointer hover:bg-white/20 w-full py-2 transition rounded-md"
                >
                    <div className="p-1">{tool.icon}</div>
                    <span className="text-[10px] font-medium leading-tight px-1">{tool.label}</span>
                </div>
            ))}
        </div>

        <div className="mt-auto mb-4 w-full">
             <button 
                onClick={() => {
                    showConfirm("Тестті аяқтауға сенімдісіз бе?", onFinish);
                }}
                className="flex flex-col items-center gap-1 cursor-pointer hover:bg-red-500/20 w-full py-2 transition text-red-100"
             >
                <LogOut className="w-6 h-6" />
                <span className="text-[10px]">Аяқтау</span>
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
          />
        )}
    </div>
  );
};

export default Sidebar;