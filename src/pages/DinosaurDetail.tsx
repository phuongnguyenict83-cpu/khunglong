import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Info, MapPin, Calendar, Ruler, Weight, ImageIcon } from 'lucide-react';

export default function DinosaurDetail() {
  const { id } = useParams();

  // Dữ liệu mẫu tĩnh cho T-Rex
  const dinosaur = {
    name: 'Tyrannosaurus Rex',
    nickname: 'T-Rex',
    image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=1200',
    category: 'Ăn thịt',
    description: 'T-Rex (Khủng long bạo chúa) là một trong những loài khủng long ăn thịt lớn nhất và đáng sợ nhất từng sống trên Trái Đất. Chúng sở hữu chiếc đầu khổng lồ, hàm răng sắc nhọn như dao cưa và lực cắn cực mạnh có thể nghiền nát xương con mồi dễ dàng!',
    stats: {
      length: '12 mét',
      weight: '8 tấn',
      period: 'Kỷ Phấn Trắng',
      location: 'Bắc Mỹ',
    },
    funFacts: [
      'T-Rex có lực cắn mạnh nhất trong số các loài động vật trên cạn từng được biết đến.',
      'Răng của T-Rex có thể dài tới 30cm, to bằng kích thước của một quả chuối lớn!',
      'Mặc dù có thân hình khổng lồ, T-Rex lại có hai cánh tay rất nhỏ bé với chỉ 2 ngón tay mỗi bên.',
      'Chúng có khứu giác cực kỳ nhạy bén, giúp phát hiện con mồi từ khoảng cách rất xa.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1569993358057-7977a481e18c?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1596743344697-e81050853589?auto=format&fit=crop&q=80&w=600'
    ]
  };

  return (
    <div className="min-h-screen bg-amber-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-bold mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Quay lại danh sách
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-amber-200">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96">
            <img
              src={dinosaur.image}
              alt={dinosaur.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-3 uppercase tracking-wider">
                {dinosaur.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-display text-white mb-2 drop-shadow-lg">
                {dinosaur.name}
              </h1>
              <p className="text-xl md:text-2xl text-amber-300 font-bold drop-shadow-md">
                "{dinosaur.nickname}"
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-display text-stone-800 mb-6 flex items-center gap-3">
                  <Info className="w-8 h-8 text-emerald-500" />
                  Giới thiệu về {dinosaur.nickname}
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  {dinosaur.description}
                </p>

                {/* Inline Images */}
                <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dinosaur.gallery.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`Hình ảnh ${dinosaur.nickname} ${idx + 1}`} 
                      className="rounded-2xl shadow-md w-full h-48 object-cover border-2 border-amber-100 hover:border-amber-300 transition-colors" 
                    />
                  ))}
                </div>

                <h2 className="text-3xl font-display text-stone-800 mb-6 flex items-center gap-3 mt-12">
                  <Play className="w-8 h-8 text-amber-500" />
                  Sự thật thú vị
                </h2>
                <ul className="space-y-4">
                  {dinosaur.funFacts.map((fact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start bg-amber-100 p-4 rounded-2xl border border-amber-200"
                    >
                      <span className="text-2xl mr-4 shrink-0">🦖</span>
                      <span className="text-stone-700 font-medium leading-relaxed">{fact}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Sidebar Stats */}
              <div>
                <div className="bg-emerald-50 rounded-3xl p-8 border-2 border-emerald-200 sticky top-24">
                  <h3 className="text-2xl font-display text-emerald-800 mb-6 text-center">
                    Hồ sơ Khủng long
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-emerald-200 pb-4">
                      <div className="flex items-center text-emerald-700 font-bold">
                        <Ruler className="w-5 h-5 mr-3" />
                        Chiều dài
                      </div>
                      <span className="text-stone-800 font-medium">{dinosaur.stats.length}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-emerald-200 pb-4">
                      <div className="flex items-center text-emerald-700 font-bold">
                        <Weight className="w-5 h-5 mr-3" />
                        Cân nặng
                      </div>
                      <span className="text-stone-800 font-medium">{dinosaur.stats.weight}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-emerald-200 pb-4">
                      <div className="flex items-center text-emerald-700 font-bold">
                        <Calendar className="w-5 h-5 mr-3" />
                        Thời kỳ
                      </div>
                      <span className="text-stone-800 font-medium">{dinosaur.stats.period}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-emerald-700 font-bold">
                        <MapPin className="w-5 h-5 mr-3" />
                        Nơi sống
                      </div>
                      <span className="text-stone-800 font-medium">{dinosaur.stats.location}</span>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <button className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg px-6 py-4 rounded-2xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                      <Play className="w-6 h-6" />
                      Nghe tiếng gầm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
