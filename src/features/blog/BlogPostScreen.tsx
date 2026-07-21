import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from '../../components/ui/Motion';
import { 
  ArrowLeft, Calendar, BookOpen, Lightbulb, Clock,
  GraduationCap, Target, TrendingUp, Share2, BookmarkPlus
} from 'lucide-react';
import SEO from '../../components/ui/SEO';

interface BlogPostScreenProps {
  onBack?: () => void;
}

const blogContent: Record<string, {
  title: string;
  description: string;
  canonical: string;
  content: React.ReactNode;
}> = {
  'kt-calendar-2026': {
    title: 'КТ 2026 күнтізбесі',
    description: 'Кешенді тестілеудің 2026 жылғы кестесі, тіркеу мерзімдері және дайындық жоспары.',
    canonical: 'https://magis-core.vercel.app/blog/kt-calendar-2026',
    content: (
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">КТ 2026 күнтізбесі</h2>
        
        <div className="bg-[#0f1219] border border-white/5 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            Негізгі күндер
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-slate-300">Тіркеу басталуы</span>
              <span className="text-blue-400 font-medium">Наурыз 2026</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-slate-300">Тіркеу аяқталуы</span>
              <span className="text-blue-400 font-medium">Сәуір 2026</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-slate-300">КТ өткізу күні</span>
              <span className="text-blue-400 font-medium">Мамыр 2026</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-300">Нәтижелер жариялануы</span>
              <span className="text-blue-400 font-medium">Мамыр 2026</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Дайындық жоспары</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">1-ай: Негізгілер</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Пәндердің бағдарламасын зерттеу</li>
              <li>• Әлсіз тұстарды анықтау</li>
              <li>• Үлкен жоспар жасау</li>
            </ul>
          </div>
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">2-ай: Тәжірибе</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Тест тапсыру тәжірибесі</li>
              <li>• Уақытты басқару</li>
              <li>• Қателерді талдау</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-medium">
            💡 Кеңес: Дайындықты ерте бастаңыз! Күніне 2-3 сағат бөлу жеткілікті.
          </p>
        </div>
      </div>
    )
  },
  'm094-daindyq': {
    title: 'M094 бойынша дайындық',
    description: 'M094 мамандығы бойынша кешенді дайындық жоспары, пәндер және тест форматы.',
    canonical: 'https://magis-core.vercel.app/blog/m094-daindyq',
    content: (
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">M094 бойынша дайындық</h2>
        
        <div className="bg-[#0f1219] border border-white/5 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            Тест форматы
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Негізгі пәндер</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Ағылшын тілі: 50 сұрақ (50 балл)</li>
                <li>• ТГО: 30 сұрақ (30 балл)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Бейіндік пәндер</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Алгоритмдер: 30 сұрақ (30 балл)</li>
                <li>• Деректер қоры: 20 сұрақ (40 балл)</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Дайындық стратегиясы</h3>
        <div className="space-y-4 mb-6">
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">1. Алгоритмдер</h4>
            <p className="text-sm text-slate-400">
              Сұрыптау алгоритмдері, іздеу, графтар, DP негіздерін меңгеріңіз. 
              Әр алгоритмнің уақыт күрделілігін түсіну маңызды.
            </p>
          </div>
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">2. Деректер қоры</h4>
            <p className="text-sm text-slate-400">
              SQL сұрақтары, нормализация, индекстер және транзакцияларды үйреніңіз.
              Практикалық тапсырмаларды орындаңыз.
            </p>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-medium">
            💡 MagisCore-да M094 бойынша 2099+ тест сұрағы бар!
          </p>
        </div>
      </div>
    )
  },
  'kt-kelestery': {
    title: 'KT-де жоғары балл алу үшін 10 кеңес',
    description: 'Тест тапсыру кезінде уақытты тиімді бөлу, стрессіз тапсыру және нәтижені жақсарту.',
    canonical: 'https://magis-core.vercel.app/blog/kt-kelestery',
    content: (
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">KT-де жоғары балл алу үшін 10 кеңес</h2>
        
        <div className="space-y-4">
          {[
            { num: 1, title: 'Дайындықты ерте бастаңыз', desc: 'Кемінде 3 ай бұрын бастаңыз. Күніне 2-3 сағат бөлу жеткілікті.' },
            { num: 2, title: 'Бағдарламаны толық зерттеңіз', desc: 'Әр пәннің тест форматын, сұрақ түрлерін және балл жүйесін біліңіз.' },
            { num: 3, title: 'Тест тапсыру тәжірибесі', desc: 'Нақты уақыт режимінде тест тапсырып, уақытты басқаруды үйреніңіз.' },
            { num: 4, title: 'Әлсіз тұстарды анықтаңыз', desc: 'Қате жауаптарды талдау арқылы әлсіз тұстарыңызды табыңыз.' },
            { num: 5, title: 'Стрессіз тапсыру', desc: 'Тестке досыңызбен немесе топпен қатысыңыз немесе жеке талдаңыз. Дұрыс ұйқы мен демалыс аса маңызды.' },
            { num: 6, title: 'Уақытты бөліңіз', desc: 'Әр сұраққа орта есеппен 3-4 минут бөліңіз. Бір сұрақта тым көп уақыт жұмсамаңыз.' },
            { num: 7, title: 'Барлық сұрақтарды қараңыз', desc: 'Әуелі барлық сұрақтарды қарап шығыңыз, жеңістерден бастаңыз.' },
            { num: 8, title: 'Дұрыс жауапты таңдаңыз', desc: 'Бірнеше дұрыс жауап болса, барлығын таңдаңыз (MULTIPLE).' },
            { num: 9, title: 'Сұрақты қайта оқыңыз', desc: 'Күмәнді жауаптар болса, сұрақты қайта оқыңыз.' },
            { num: 10, title: 'Нәтижені талдаңыз', desc: 'Тест аяқталғаннан кейін қателеріңізді талдаңыз.' }
          ].map((item) => (
            <div key={item.num} className="bg-[#0f1219] border border-white/5 rounded-xl p-4 flex gap-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold flex-shrink-0">
                {item.num}
              </div>
              <div>
                <h4 className="font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  'm095-daindyq': {
    title: 'M095 бойынша дайындық',
    description: 'M095 мамандығы бойынша дайындық жоспары, Algorithms және InfoSec пәндері.',
    canonical: 'https://magis-core.vercel.app/blog/m095-daindyq',
    content: (
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">M095 бойынша дайындық</h2>
        
        <div className="bg-[#0f1219] border border-white/5 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            Тест форматы
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Негізгі пәндер</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Ағылшын тілі: 50 сұрақ (50 балл)</li>
                <li>• ТГО: 30 сұрақ (30 балл)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Бейіндік пәндер</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Бағдарламалау: 30 сұрақ (30 балл)</li>
                <li>• Ақпараттық қауіпсіздік: 20 сұрақ (40 балл)</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Дайындық стратегиясы</h3>
        <div className="space-y-4 mb-6">
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">1. Бағдарламалау</h4>
            <p className="text-sm text-slate-400">
              Алгоритмдер мен бағдарламалау тілдерін (C++, Python) меңгеріңіз.
              Логикалық ойлау жаттығуларын орындаңыз.
            </p>
          </div>
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">2. Ақпараттық қауіпсіздік</h4>
            <p className="text-sm text-slate-400">
              Шифрлау, тораптық қауіпсіздік, деректерді қорғау негіздерін үйреніңіз.
              Практикалық мысалдарды зерттеңіз.
            </p>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-medium">
            💡 MagisCore-да M095 бойынша 630+ тест сұрағы бар!
          </p>
        </div>
      </div>
    )
  },
  'english-daindyq': {
    title: 'Ағылшын тілі бойынша дайындық',
    description: 'Ағылшын тілі бөліміне дайындық: тыңдалым, грамматика және оқылым стратегиялары.',
    canonical: 'https://magis-core.vercel.app/blog/english-daindyq',
    content: (
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Ағылшын тілі бойынша дайындық</h2>
        
        <div className="bg-[#0f1219] border border-white/5 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            Тест форматы
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">16</div>
              <div className="text-sm text-slate-400">Тыңдалым</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">18</div>
              <div className="text-sm text-slate-400">Лексика-Грамматика</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">16</div>
              <div className="text-sm text-slate-400">Оқылым</div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Дайындық стратегиясы</h3>
        <div className="space-y-4 mb-6">
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">1. Тыңдалым (Listening)</h4>
            <p className="text-sm text-slate-400">
              Ағылшын тіліндегі подкасттар, хабарлар тыңдаңыз. 
              Негізгі идеяны түсінуге назар аударыңыз.
            </p>
          </div>
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">2. Грамматика (Grammar)</h4>
            <p className="text-sm text-slate-400">
              Негізгі грамматикалық құрылымдарды үйреніңіз: 
              Tenses, Conditionals, Passive Voice, Articles.
            </p>
          </div>
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">3. Оқылым (Reading)</h4>
            <p className="text-sm text-slate-400">
              Ағылшын тіліндегі мақалаларды оқыңыз. 
              Негізгі идеяны және бөлшектерді түсінуге жаттығыңыз.
            </p>
          </div>
        </div>
      </div>
    )
  },
  'tgo-daindyq': {
    title: 'ТГО бойынша дайындық',
    description: 'Тестке дайындық: Сыни ойлау (15 сұрақ) және Аналитикалық ойлау (15 сұрақ).',
    canonical: 'https://magis-core.vercel.app/blog/tgo-daindyq',
    content: (
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">ТГО бойынша дайындық</h2>
        
        <div className="bg-[#0f1219] border border-white/5 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            Тест форматы
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">15</div>
              <div className="text-sm text-slate-400">Сыни ойлау</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">15</div>
              <div className="text-sm text-slate-400">Аналитикалық ойлау</div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Дайындық стратегиясы</h3>
        <div className="space-y-4 mb-6">
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">1. Сыни ойлау (Critical Thinking)</h4>
            <p className="text-sm text-slate-400">
              Логикалық қорытындылар жасау, дәлелдерді бағалау, 
              қарама-қайшылықтарды табу жаттығуларын орындаңыз.
            </p>
          </div>
          <div className="bg-[#0f1219] border border-white/5 rounded-xl p-4">
            <h4 className="font-medium mb-2 text-blue-400">2. Аналитикалық ойлау (Analytical Thinking)</h4>
            <p className="text-sm text-slate-400">
              Мәселелерді талдау, шешімдер қабылдау, 
              деректерді пайдалану жаттығуларын орындаңыз.
            </p>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 font-medium">
            💡 MagisCore-да ТГО бойынша 754 тест сұрағы бар!
          </p>
        </div>
      </div>
    )
  }
};

const BlogPostScreen: React.FC<BlogPostScreenProps> = ({ onBack }) => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  const post = blogContent[postId || ''];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#07090d] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Мәтін табылмады</h1>
          <button
            onClick={() => navigate('/blog')}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Блогқа оралу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090d] text-white">
      <SEO
        title={post.title}
        description={post.description}
        canonical={post.canonical}
      />
      
      {/* Header */}
      <header className="border-b border-white/5 bg-[#07090d]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate('/blog')}
            className="p-2 rounded-full border border-white/5 hover:bg-white/10 text-slate-400 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold flex-1">{post.title}</h1>
          <button className="p-2 rounded-full border border-white/5 hover:bg-white/10 text-slate-400 transition-all">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.content}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Дайындықты бастаңыз!</h3>
          <p className="text-slate-400 mb-4">
            MagisCore-да 7000+ тест сұрағымен тегін дайындалыңыз
          </p>
          <button
            onClick={() => navigate('/home')}
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Тест тапсыру
          </button>
        </div>
      </main>
    </div>
  );
};

export default BlogPostScreen;
