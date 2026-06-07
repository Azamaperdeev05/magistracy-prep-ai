import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { loginWithGoogle } from '../services/authService';
import { auth } from '../firebase';

interface AuthScreenProps {
  onAuthSuccess: (user: { id: number; email: string; full_name: string }) => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    setError('');
    setIsLoading(true);
    try {
      const result = await loginWithGoogle();
      onAuthSuccess(result.user);
    } catch (err: any) {
      setError(err.message || 'Google арқылы кіру кезінде қате орын алды');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090d] text-[#f8fafc] flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] top-[-100px] right-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] bottom-[-50px] left-[-50px]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 relative">
             <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
             <img src="/logo no bg, white.svg" alt="MagisCore Logo" className="w-full h-full object-contain relative z-10" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight uppercase">
            Magis<span className="text-blue-500">Core</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            {!auth ? 'Жүйе баптаулары қажет' : 'Платформаға кіру'}
          </p>
        </div>

        {/* Card */}
        <div className="glass-dark rounded-3xl p-8 border border-white/5 shadow-2xl">
          {!auth ? (
            <div className="text-center py-4">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-black text-white mb-2">Firebase бапталмаған</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Қосымша дұрыс жұмыс істеуі үшін Firebase кілттері қажет. <code>.env</code> немесе Vercel орталық айнымалыларында келесі айнымалыларды орнатыңыз:
              </p>
              <div className="bg-black/50 text-left font-mono text-[10px] p-4 rounded-xl text-indigo-300 border border-white/5 space-y-1 mb-4 overflow-x-auto">
                <div>VITE_FIREBASE_API_KEY</div>
                <div>VITE_FIREBASE_AUTH_DOMAIN</div>
                <div>VITE_FIREBASE_PROJECT_ID</div>
                <div>VITE_FIREBASE_STORAGE_BUCKET</div>
                <div>VITE_FIREBASE_MESSAGING_SENDER_ID</div>
                <div>VITE_FIREBASE_APP_ID</div>
              </div>
              <p className="text-[10px] text-slate-500">
                Жергілікті тестілеу үшін жоба түбіріндегі <code>.env</code> файлында осы кілттерді толтырып шығыңыз.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Description */}
              <div className="text-center">
                <p className="text-slate-400 text-sm font-medium">
                  Дайындықты бастау және нәтижелерді сақтау үшін Google аккаунтыңызбен кіріңіз
                </p>
              </div>

              {/* Messages */}
              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-bold"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" /> {error}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Google Sign-in Button */}
              <button 
                type="button" 
                onClick={handleGoogleSignIn} 
                disabled={isLoading}
                className="w-full py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="text-slate-500">Жүктелуде...</span>
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                    <span>Google аккаунтымен кіру</span>
                  </>
                )}
              </button>
              
              {/* Registration Disclaimer */}
              <div className="pt-6 border-t border-white/5 text-[11px] text-slate-500 font-semibold leading-relaxed space-y-2.5">
                <p>
                  <span className="text-slate-300 font-bold">MagisCore</span> — магистратура КТ емтиханына дайындалуға арналған тәуелсіз онлайн симулятор. Бұл Ұлттық тестілеу орталығының ресми сайты емес.
                </p>
                <p>
                  Платформа ЖСН (ИИН), жеке куәлік деректері және телефон нөмірін жинамайды.
                </p>
                <p>
                  Платформа тек аты-жөніңізді, email мекенжайыңызды және тест нәтижелеріңізді аккаунт ашу, нәтиже тарихын сақтау және оқу прогресін көрсету мақсатында ғана өңдейді.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-[10px] text-slate-700 mt-10 font-bold tracking-[0.2em] uppercase">
          © 2026 MagisCore. Secure Auth.
        </p>
      </motion.div>
    </div>
  );
};

export default AuthScreen;
