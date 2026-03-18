import { motion } from 'framer-motion';
import { BookOpen, Users, FileText, Download, CheckCircle2 } from 'lucide-react';

const resources = [
  {
    title: 'Bản đồ Kỷ Jura (Dành cho bé)',
    type: 'PDF',
    size: '2.4 MB',
    icon: FileText,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    title: 'Tranh tô màu Khủng long',
    type: 'PDF',
    size: '5.1 MB',
    icon: FileText,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    title: 'Thẻ Flashcard từ vựng tiếng Việt',
    type: 'PDF',
    size: '3.8 MB',
    icon: FileText,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
];

const tips = [
  'Khuyến khích trẻ đặt câu hỏi về kích thước, thức ăn và môi trường sống của từng loài khủng long.',
  'Sử dụng các mô hình đồ chơi khủng long ở nhà để minh họa trực quan cho các bài học trên website.',
  'Kết hợp việc học với các hoạt động thủ công như nặn đất sét, vẽ tranh hình khủng long.',
  'Tổ chức các trò chơi đố vui nhỏ sau mỗi bài học để củng cố kiến thức cho bé một cách tự nhiên.',
];

export default function Guide() {
  return (
    <div className="min-h-screen bg-amber-50 pb-16">
      <div className="bg-stone-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1596743344697-e81050853589?auto=format&fit=crop&q=80&w=1600"
            alt="Hình nền phụ huynh và bé"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display text-amber-400 mb-4 drop-shadow-md"
          >
            Góc Phụ Huynh & Giáo Viên
          </motion.h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto font-medium">
            Tài liệu và hướng dẫn chi tiết giúp bạn đồng hành cùng trẻ trong hành trình khám phá thế giới khủng long.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Guide Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-emerald-600" />
                <h2 className="text-3xl font-display text-stone-800">Phương pháp học tập</h2>
              </div>
              <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=800" 
                  alt="Trẻ em học tập" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                DinoKids được thiết kế dựa trên phương pháp học tập qua trải nghiệm (Experiential Learning). Chúng tôi tin rằng trẻ em tiếp thu kiến thức tốt nhất khi được tham gia trực tiếp vào các hoạt động tương tác, trò chơi và những câu chuyện sinh động.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Nội dung trên website được chia thành các cấp độ từ dễ đến khó, phù hợp với nhiều lứa tuổi khác nhau. Phụ huynh có thể bắt đầu bằng việc cùng con xem các video giới thiệu, sau đó chuyển sang phần đọc thông tin chi tiết và cuối cùng là chơi trò chơi để ôn tập lại những gì đã học.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-amber-500" />
                <h2 className="text-3xl font-display text-stone-800">Mẹo đồng hành cùng con</h2>
              </div>
              <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1569993358057-7977a481e18c?auto=format&fit=crop&q=80&w=800" 
                  alt="Phụ huynh và con cái" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-0.5" />
                    <span className="text-stone-700 font-medium leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 border-4 border-emerald-100 sticky top-24"
            >
              <div className="flex items-center gap-3 mb-8">
                <Download className="w-8 h-8 text-emerald-600" />
                <h2 className="text-3xl font-display text-stone-800">Tài liệu tải về</h2>
              </div>
              <p className="text-stone-600 mb-8 text-lg">
                Các tài liệu in ấn miễn phí giúp mở rộng trải nghiệm học tập của trẻ ra ngoài màn hình máy tính.
              </p>
              
              <div className="space-y-4">
                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-2xl ${resource.bg} border border-transparent hover:border-current transition-colors cursor-pointer group`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-white shadow-sm ${resource.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-800 group-hover:text-emerald-700 transition-colors">
                            {resource.title}
                          </h4>
                          <span className="text-sm text-stone-500">
                            {resource.type} • {resource.size}
                          </span>
                        </div>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-white text-stone-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-stone-100 text-center">
                <p className="text-stone-500 text-sm mb-4">
                  Bạn cần thêm tài liệu? Hãy đăng ký nhận bản tin của chúng tôi.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    className="flex-1 px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-colors shrink-0">
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
