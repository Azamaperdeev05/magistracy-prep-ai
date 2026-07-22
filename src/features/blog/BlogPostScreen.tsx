import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from '../../components/ui/Motion';
import {
  ArrowLeft, Calendar, BookOpen, Lightbulb, Clock,
  GraduationCap, Target, TrendingUp, Share2
} from 'lucide-react';
import { useTheme } from '../../app/ThemeContext';
import SEO from '../../components/ui/SEO';

interface BlogPostScreenProps {
  onBack?: () => void;
}

const blogPosts = [
  {
    id: 'kt-calendar-2026',
    title: 'КТ 2026 күнтізбесі',
    description: 'Кешенді тестілеудің 2026 жылғы кестесі, тіркеу мерзімдері және дайындық жоспары.',
    icon: <Calendar className="w-5 h-5" />,
    date: '2026 жылдың күнтізбесі',
    readTime: '5 мин',
    tags: ['КТ', 'күнтізбе', '2026'],
    sections: [
      { title: 'Тіркеу мерзімдері', items: ['Наурыз — Тіркеу басталады', 'Сәуір — Тіркеу аяқталады', 'Мамыр — Емтихан кестесі жарияланады'] },
      { title: 'Емтихан кестесі', items: ['Мамыр-Маусым — Негізгі емтихан толқыны', 'Шілде — Қосымша толқын', 'Тамыз — Нәтижелер жарияланады'] },
    ]
  },
  {
    id: 'm094-daindyq',
    title: 'M094 бойынша дайындық',
    description: 'M094 мамандығы бойынша кешенді дайындық жоспары, пәндер және тест форматы.',
    icon: <BookOpen className="w-5 h-5" />,
    date: 'M094 дайындық',
    readTime: '8 мин',
    tags: ['M094', 'алгоритм', 'деректер'],
    sections: [
      { title: 'Пәндер', items: ['Ағылшын тілі — 50 сұрақ (50 балл)', 'ТГО — 30 сұрақ (30 балл)', 'Алгоритмдер — 30 сұрақ (30 балл)', 'Деректер қоры — 20 сұрақ (40 балл)'] },
      { title: 'Дайындық стратегиясы', items: ['Апта сайын 2-3 тест тапсыру', 'Қателерді талдау және қайталау', 'Уақытты басқаруды жаттықтыру'] },
    ]
  },
  {
    id: 'kt-kelestery',
    title: 'KT-де жоғары балл алу үшін 10 кеңес',
    description: 'Тест тапсыру кезінде уақытты тиімді бөлу, стрессіз тапсыру және нәтижені жақсарту.',
    icon: <Lightbulb className="w-5 h-5" />,
    date: 'KT кеңестері',
    readTime: '6 мин',
    tags: ['кеңес', 'стратегия', 'балл'],
    sections: [
      { title: '10 кеңес', items: ['Уақытты алдын-ала бөлу', 'Оңай сұрақтардан бастау', 'Күмәнді сұрақтарды белгілеу', 'Демалыс алу', 'Сергек болу'] },
    ]
  },
  {
    id: 'm095-daindyq',
    title: 'M095 бойынша дайындық',
    description: 'M095 мамандығы бойынша дайындық жоспары, Algorithms және InfoSec пәндері.',
    icon: <Target className="w-5 h-5" />,
    date: 'M095 дайындық',
    readTime: '7 мин',
    tags: ['M095', 'информатика', 'бағдарламалау'],
    sections: [
      { title: 'Пәндер', items: ['Ағылшын тілі — 50 сұрақ (50 балл)', 'ТГО — 30 сұрақ (30 балл)', 'Алгоритмдер — 30 сұрақ (30 балл)', 'Ақпараттық қауіпсіздік — 20 сұрақ (40 балл)'] },
    ]
  },
  {
    id: 'english-daindyq',
    title: 'Ағылшын тілі бойынша дайындық',
    description: 'Ағылшын тілі бөліміне дайындық: тыңдалым, грамматика және оқылым стратегиялары.',
    icon: <GraduationCap className="w-5 h-5" />,
    date: 'Ағылшын тілі',
    readTime: '6 мин',
    tags: ['ағылшын', 'listening', 'grammar'],
    sections: [
      { title: 'Бөлімдер', items: ['Тыңдалым (Listening) — 16 сұрақ', 'Лексика-Грамматика — 18 сұрақ', 'Оқылым (Reading) — 16 сұрақ'] },
    ]
  },
  {
    id: 'tgo-daindyq',
    title: 'ТГО бойынша дайындық',
    description: 'Тестке дайындық: Сыни ойлау (15 сұрақ) және Аналитикалық ойлау (15 сұрақ).',
    icon: <TrendingUp className="w-5 h-5" />,
    date: 'ТГО дайындық',
    readTime: '5 мин',
    tags: ['ТГО', 'сыни ойлау', 'аналитика'],
    sections: [
      { title: 'Бөлімдер', items: ['Сыни ойлау — 15 сұрақ (15 балл)', 'Аналитикалық ойлау — 15 сұрақ (15 балл)'] },
    ]
  },
];

const BlogPostScreen: React.FC<BlogPostScreenProps> = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-white/5' : 'bg-white border-slate-200 shadow-sm';
  const headerBg = isDarkMode ? 'bg-[#07090d]/80 border-white/5' : 'bg-white/90 border-slate-200 shadow-sm';

  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className={`flex items-center justify-center py-20 ${textPrimary}`}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Мәтін табылмады</h1>
          <button
            onClick={() => navigate('/blog')}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-white"
          >
            Блогқа оралу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={textPrimary}>
      <SEO
        title={post.title}
        description={post.description}
        canonical={`https://magis-core.vercel.app/blog/${post.id}`}
      />

      {/* Header */}
      <div className={`mb-6 pb-4 border-b ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/blog')}
            className={`p-2 rounded-lg transition-all ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className={`text-xl font-bold flex-1 ${textPrimary}`}>{post.title}</h1>
          <button className={`p-2 rounded-lg transition-all ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-6">
        {/* Meta */}
        <div className={`flex items-center gap-4 text-xs ${textMuted}`}>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          <span>{post.date}</span>
          <div className="flex gap-1.5">
            {post.tags.map(tag => (
              <span key={tag} className={`px-2 py-0.5 rounded text-[10px] font-bold ${isDarkMode ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        {post.sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`rounded-xl p-5 border ${cardBg}`}
          >
            <h3 className={`text-base font-semibold mb-3 flex items-center gap-2 ${textPrimary}`}>
              {post.icon}
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className={`text-sm flex items-start gap-2 ${textMuted}`}>
                  <span className="text-blue-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* CTA */}
        <div className={`rounded-xl p-6 text-center border ${isDarkMode ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'}`}>
          <h3 className={`text-lg font-bold mb-2 ${textPrimary}`}>Дайындықты бастаңыз!</h3>
          <p className={`text-sm mb-4 ${textMuted}`}>MagisCore-да тест сұрақтарымен тегін дайындалыңыз</p>
          <button
            onClick={() => navigate('/panel')}
            className="px-6 py-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors font-medium text-white text-sm"
          >
            Тест тапсыру
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostScreen;
