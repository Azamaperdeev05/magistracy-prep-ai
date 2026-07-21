import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from './Motion';
import { 
  ArrowLeft, Calendar, BookOpen, Lightbulb, Clock,
  GraduationCap, Target, TrendingUp, ChevronRight
} from 'lucide-react';
import SEO from './SEO';

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

const BlogScreen: React.FC<BlogScreenProps> = ({ onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#07090d] text-white">
      <SEO
        title="Блог — КТ дайындық кеңестері"
        description="Кешенді тестілеуге дайындық бойынша пайдалы мақалалар, кеңестер және күнтізбелер. M094, M095, M001, M002 мамандықтары бойынша дайындық жоспарлары."
        canonical="https://magis-core.vercel.app/blog"
      />
      
      {/* Header */}
      <header className="border-b border-white/5 bg-[#07090d]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-full border border-white/5 hover:bg-white/10 text-slate-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <h1 className="text-xl font-bold">Блог</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">КТ дайындық кеңестері</h2>
          <p className="text-slate-400">
            Магистратураға түсуге дайындық бойынша пайдалы мақалалар мен стратегиялар
          </p>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f1219] border border-white/5 rounded-xl p-6 hover:border-blue-500/30 transition-all cursor-pointer group"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  {post.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">{post.description}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-white/5 rounded text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogScreen;
