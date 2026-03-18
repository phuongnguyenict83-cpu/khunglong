import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Volume2, Play } from 'lucide-react';
import { useRef, useState } from 'react';

const categories = [
  { id: 'carnivore', name: 'Ăn thịt', color: 'bg-red-500', icon: '🥩' },
  { id: 'herbivore', name: 'Ăn cỏ', color: 'bg-green-500', icon: '🌿' },
  { id: 'flying', name: 'Biết bay', color: 'bg-blue-500', icon: '🦅' },
  { id: 'swimming', name: 'Bơi lội', color: 'bg-cyan-500', icon: '🌊' },
];

const featuredDinosaurs = [
  {
    id: 't-rex',
    name: 'T-Rex',
    category: 'Ăn thịt',
    image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=800',
    description: 'Vua của các loài khủng long với hàm răng sắc nhọn và lực cắn kinh hoàng.',
    color: 'border-red-500',
    bg: 'bg-red-50',
    text: 'text-red-700'
  },
  {
    id: 'triceratops',
    name: 'Triceratops',
    category: 'Ăn cỏ',
    image: 'https://images.unsplash.com/photo-1596743344697-e81050853589?auto=format&fit=crop&q=80&w=800',
    description: 'Khủng long ba sừng hiền lành nhưng sở hữu lớp giáp bảo vệ vô cùng vững chắc.',
    color: 'border-green-500',
    bg: 'bg-green-50',
    text: 'text-green-700'
  },
  {
    id: 'pterodactyl',
    name: 'Pterodactyl',
    category: 'Biết bay',
    image: 'https://images.unsplash.com/photo-1569993358057-7977a481e18c?auto=format&fit=crop&q=80&w=800',
    description: 'Chúa tể bầu trời thời tiền sử với sải cánh khổng lồ lướt trong gió.',
    color: 'border-blue-500',
    bg: 'bg-blue-50',
    text: 'text-blue-700'
  },
];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleWelcomeSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 pb-16">
      {/* Welcome Audio */}
      <audio ref={audioRef} src="https://res.cloudinary.com/dzu1z8mf0/video/upload/v1773850571/t%E1%BA%A3i_xu%E1%BB%91ng_online-audio-converter.com_z1bugz.mp3" onEnded={() => setIsPlaying(false)} />

      {/* Hero Section */}
      <section className="relative bg-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=1600"
            alt="Hình nền khủng long"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display tracking-tight text-amber-300 mb-6 drop-shadow-lg">
              Khám Phá Thế Giới Khủng Long
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto mb-10 drop-shadow-md font-medium">
              Cùng bé bước vào kỷ Jura kỳ thú, tìm hiểu về những sinh vật khổng lồ từng thống trị Trái Đất hàng triệu năm trước!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/dinosaur/t-rex"
                className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-transform hover:scale-105"
              >
                Bắt đầu khám phá
              </Link>
              <button
                onClick={toggleWelcomeSound}
                className="bg-white hover:bg-amber-50 text-stone-900 font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {isPlaying ? <Volume2 className="w-6 h-6 text-amber-500 animate-pulse" /> : <Play className="w-6 h-6 text-amber-500" />}
                {isPlaying ? 'Đang phát...' : 'Nghe lời chào'}
              </button>
              <Link
                to="/games"
                className="bg-emerald-600 hover:bg-emerald-500 border-2 border-emerald-400 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-transform hover:scale-105"
              >
                Chơi trò chơi
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.81,118.92,156.41,115.31,231.5,93.3,262.3,84.27,292.59,72.4,321.39,56.44Z" className="fill-amber-50"></path>
          </svg>
        </div>
      </section>

      {/* Giới thiệu DinoKids */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border-4 border-amber-100">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1596743344697-e81050853589?auto=format&fit=crop&q=80&w=800" 
              alt="Trẻ em học về khủng long" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:to-white/50"></div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display text-emerald-700 mb-6">Chào mừng đến với DinoKids!</h2>
            <p className="text-lg text-stone-600 mb-4 leading-relaxed">
              DinoKids là thế giới diệu kỳ nơi các bé có thể thỏa sức khám phá về những sinh vật khổng lồ thời tiền sử. Chúng tôi mang đến những kiến thức bổ ích được thiết kế riêng cho trẻ em, giúp các bé vừa học vừa chơi một cách tự nhiên nhất.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Với hình ảnh sinh động, trò chơi tương tác và video hấp dẫn, việc tìm hiểu về các loài khủng long chưa bao giờ thú vị và dễ dàng đến thế!
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-stone-800 mb-4">Phân loại Khủng long</h2>
          <p className="text-lg text-stone-600">Bé hãy chọn một nhóm để tìm hiểu thêm nhé!</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${category.color} rounded-3xl p-6 text-center text-white shadow-lg cursor-pointer transform transition-transform hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Dinosaurs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-stone-800 mb-2">Khủng long nổi bật</h2>
            <p className="text-lg text-stone-600">Những người bạn khổng lồ được yêu thích nhất</p>
          </div>
          <Link to="/dinosaur/t-rex" className="hidden md:inline-flex text-emerald-600 font-bold hover:text-emerald-700 items-center gap-1">
            Xem tất cả &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDinosaurs.map((dino, index) => (
            <motion.div
              key={dino.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-md border-b-8 ${dino.color} transition-transform hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={dino.image}
                  alt={dino.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${dino.bg} ${dino.text}`}>
                  {dino.category}
                </div>
                <h3 className="text-2xl font-display text-stone-800 mb-2">{dino.name}</h3>
                <p className="text-stone-600 mb-6">{dino.description}</p>
                <Link
                  to={`/dinosaur/${dino.id}`}
                  className={`inline-block w-full text-center py-3 rounded-xl font-bold text-white transition-colors ${
                    dino.id === 't-rex' ? 'bg-red-500 hover:bg-red-600' :
                    dino.id === 'triceratops' ? 'bg-green-500 hover:bg-green-600' :
                    'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  Tìm hiểu ngay
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/dinosaur/t-rex" className="inline-flex text-emerald-600 font-bold hover:text-emerald-700 items-center gap-1">
            Xem tất cả &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
