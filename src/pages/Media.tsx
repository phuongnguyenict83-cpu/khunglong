import { motion } from 'framer-motion';
import { PlayCircle, Music, Image as ImageIcon } from 'lucide-react';

const videos = [
  {
    id: 'v-cloudinary',
    title: 'Bé Học Màu Kỳ Diệu',
    thumbnail: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=400',
    duration: '3:15',
    link: 'https://res.cloudinary.com/dzu1z8mf0/video/upload/v1773850629/B%C3%A9_H%E1%BB%8Dc_M%C3%A0u_K%E1%BB%B3_Di%E1%BB%87u_essx8t.mp4'
  },
  {
    id: 'v-new',
    title: 'Cuộc chiến Khủng long: T-Rex vs Triceratops',
    thumbnail: 'https://img.youtube.com/vi/G36-096J300/maxresdefault.jpg',
    duration: '4:25',
    link: 'https://www.youtube.com/embed/G36-096J300'
  },
  {
    id: 'v1',
    title: 'Sự thật về T-Rex',
    thumbnail: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=400',
    duration: '3:45',
  },
  {
    id: 'v2',
    title: 'Khủng long ăn cỏ khổng lồ',
    thumbnail: 'https://images.unsplash.com/photo-1596743344697-e81050853589?auto=format&fit=crop&q=80&w=400',
    duration: '5:20',
  },
  {
    id: 'v3',
    title: 'Bí ẩn bầu trời kỷ Jura',
    thumbnail: 'https://images.unsplash.com/photo-1569993358057-7977a481e18c?auto=format&fit=crop&q=80&w=400',
    duration: '4:10',
  },
];

const sounds = [
  { id: 's1', name: 'Tiếng gầm T-Rex', duration: '0:05', icon: '🦖' },
  { id: 's2', name: 'Tiếng gọi bầy Triceratops', duration: '0:08', icon: '🦕' },
  { id: 's3', name: 'Tiếng vỗ cánh Pterodactyl', duration: '0:04', icon: '🦅' },
  { id: 's4', name: 'Tiếng bước chân khổng lồ', duration: '0:10', icon: '🐾' },
];

export default function Media() {
  return (
    <div className="min-h-screen bg-amber-50 pb-16">
      <div className="bg-emerald-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=1600"
            alt="Dinosaur background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display text-amber-300 mb-4 drop-shadow-md"
          >
            Thư Viện Khủng Long
          </motion.h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-medium">
            Khám phá thế giới khủng long qua những thước phim sinh động và âm thanh chân thực!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Videos Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <PlayCircle className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-display text-stone-800">Video Nổi Bật</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <motion.a
                  key={video.id}
                  href={video.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-transparent hover:border-red-400 transition-colors block"
                >
                  <div className="relative h-48">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-stone-800 group-hover:text-red-600 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sounds Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-display text-stone-800">Âm Thanh</h2>
            </div>
            <div className="bg-white rounded-3xl shadow-md p-6 border-4 border-blue-100">
              <ul className="space-y-4">
                {sounds.map((sound, index) => (
                  <motion.li
                    key={sound.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{sound.icon}</div>
                      <div>
                        <h4 className="font-bold text-stone-800 group-hover:text-blue-700 transition-colors">
                          {sound.name}
                        </h4>
                        <span className="text-xs text-stone-500">{sound.duration}</span>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                      <PlayCircle className="w-5 h-5" />
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-display text-stone-800">Thư Viện Ảnh</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1518331647614 + i}?auto=format&fit=crop&q=80&w=400`}
                  alt={`Gallery image ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
