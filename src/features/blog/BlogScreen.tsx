import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from '../../components/ui/Motion';
import {
  Calendar, BookOpen, Lightbulb, Clock,
  GraduationCap, Target, TrendingUp, ChevronRight
} from 'lucide-react';
import { useTheme } from '../../app/ThemeContext';
import SEO from '../../components/ui/SEO';

interface BlogScreenProps {
  onBack?: () => void;
}

const blogPosts = [
  {
    id: 'kt-calendar-2026',
    title: 'КТ 2026 күнтізбесі: Қашан тапсыру керек?',
    description: 'Кешенді тестілеудің 2026 жылғы кестесі, тіркеу мерзімдері және дайындық жоспары.',
    icon: <Calendar className="w-6 h-6" />,
    date: '2026 жылдың күнтізбесі',
    readTime: '5 мин',
    tags: ['КТ', 'күнтізбе', '2026']
  },
  {
    id: 'm094-daindyq',
    title: 'M094 бойынша дайындық: Алгоритмдер және Деректер қоры',
    description: 'M094 мамандығы бойынша кешенді дайындық жоспары, пәндер және тест форматы.',
    icon: <BookOpen className="w-6 h-6" />,
    date: 'M094 дайындық',
    readTime: '8 мин',
    tags: ['M094', 'алгоритм', 'деректер']
  },
  {
    id: 'kt-kelestery',
    title: 'KT-де жоғары балл алу үшін 10 кеңес',
    description: 'Тест тапсыру кезінде уақытты тиімді бөлу, стрессіз тапсыру және нәтижені жақсарту.',
    icon: <Lightbulb className="w-6 h-6" />,
    date: 'KT кеңестері',
    readTime: '6 мин',
    tags: ['кеңес', 'стратегия', 'балл']
  },
  {
    id: 'm095-daindyq',
    title: 'M095 бойынша дайындық: Информатика және Бағдарламалау',
    description: 'M095 мамандығы бойынша дайындық жоспары, Algorithms және InfoSec пәндері.',
    icon: <Target className="w-6 h-6" />,
    date: 'M095 дайындық',
    readTime: '7 мин',
    tags: ['M095', 'информатика', 'бағдарламалау']
  },
  {
    id: 'english-daindyq',
    title: 'Ағылшын тілі бойынша дайындық: Listening, Grammar, Reading',
    description: 'Ағылшын тілі бөліміне дайындық: тыңдалым, грамматика және оқылым стратегиялары.',
    icon: <GraduationCap className="w-6 h-6" />,
    date: 'Ағылшын тілі',
    readTime: '6 мин',
    tags: ['ағылшын', 'listening', 'grammar']
  },
  {
    id: 'tgo-daindyq',
    title: 'ТГО бойынша дайындық: Сыни және Аналитикалық ойлау',
    description: 'Тестке дайындық: Сыни ойлау (15 сұрақ) және Аналитикалық ойлау (15 сұрақ).',
    icon: <TrendingUp className="w-6 h-6" />,
    date: 'ТГО дайындық',
    readTime: '5 мин',
    tags: ['ТГО', 'сыни ойлау', 'аналитика']
  }
];

const BlogScreen: React.FC<BlogScreenProps> = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-white/5 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md';

  return (
    <div className={textPrimary}>
      <SEO
        title="Блог — КТ дайындық кеңестері"
        description="Кешенді тестілеуге дайындық бойынша пайдалы мақалалар, кеңестер және күнтізбелер."
        canonical="https://magis-core.vercel.app/blog"
      />

      <div className="max-w-4xl space-y-6">
        <div>
          <h1 className={`text-2xl font-bold ${textPrimary}`}>Блог</h1>
          <p className={`text-sm mt-1 ${textMuted}`}>КТ дайындық кеңестері</p>
        </div>

        <div className="grid gap-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl p-5 transition-all cursor-pointer group border ${cardBg}`}
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg transition-colors ${isDarkMode ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
                  {post.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-base font-semibold mb-1.5 transition-colors ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm mb-3 ${textMuted}`}>{post.description}</p>
                  <div className={`flex items-center gap-3 text-xs ${textMuted}`}>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                    <div className="flex gap-1.5">
                      {post.tags.map(tag => (
                        <span key={tag} className={`px-2 py-0.5 rounded text-[10px] font-bold ${isDarkMode ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 shrink-0 mt-1 transition-colors ${isDarkMode ? 'text-slate-600 group-hover:text-blue-400' : 'text-slate-300 group-hover:text-blue-500'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;
