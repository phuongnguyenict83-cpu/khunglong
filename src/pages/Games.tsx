import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Puzzle, Paintbrush, Brain, X, RotateCcw, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

// Memory Match Game Component
const MemoryGame = ({ onClose }: { onClose: () => void }) => {
  const dinoIcons = ['🦖', '🦕', '🦕', '🦖', '🦅', '🦅', '🌊', '🌊', '🦴', '🦴', '🥚', '🥚'];
  const [cards, setCards] = useState<{ id: number; icon: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    const shuffled = [...dinoIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({ id: index, icon, isFlipped: false, isMatched: false }));
    setCards(shuffled);
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].icon === cards[second].icon) {
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[first].isMatched = true;
          matchedCards[second].isMatched = true;
          setCards(matchedCards);
          setFlippedCards([]);
          if (matchedCards.every(c => c.isMatched)) setIsWon(true);
        }, 500);
      } else {
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[first].isFlipped = false;
          resetCards[second].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const shuffled = [...dinoIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({ id: index, icon, isFlipped: false, isMatched: false }));
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="bg-emerald-600 p-6 flex justify-between items-center text-white">
          <div>
            <h2 className="text-2xl font-display">Trí Nhớ Khủng Long</h2>
            <p className="text-emerald-100">Số lượt: {moves}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-emerald-700 rounded-full transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>
        
        <div className="p-8">
          {isWon ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-3xl font-display text-emerald-600 mb-2">Tuyệt vời!</h3>
              <p className="text-stone-600 mb-8 text-lg">Bạn đã hoàn thành trong {moves} lượt!</p>
              <button
                onClick={resetGame}
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-emerald-500 transition-transform hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-6 h-6" />
                Chơi lại
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {cards.map(card => (
                <motion.div
                  key={card.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCardClick(card.id)}
                  className={`aspect-square rounded-2xl flex items-center justify-center text-4xl cursor-pointer transition-all duration-300 shadow-md ${
                    card.isFlipped || card.isMatched ? 'bg-amber-100 rotate-y-180' : 'bg-emerald-100'
                  }`}
                >
                  {(card.isFlipped || card.isMatched) ? card.icon : '❓'}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Quiz Game Component
const QuizGame = ({ onClose }: { onClose: () => void }) => {
  const questions = [
    {
      q: 'Loài khủng long nào được gọi là "Vua của các loài khủng long"?',
      options: ['Triceratops', 'T-Rex', 'Brachiosaurus', 'Stegosaurus'],
      correct: 1
    },
    {
      q: 'Khủng long T-Rex ăn gì?',
      options: ['Cỏ', 'Lá cây', 'Thịt', 'Trái cây'],
      correct: 2
    },
    {
      q: 'Khủng long có đẻ trứng không?',
      options: ['Có', 'Không'],
      correct: 0
    },
    {
      q: 'Loài khủng long nào có 3 sừng trên đầu?',
      options: ['Triceratops', 'Velociraptor', 'Pterodactyl', 'Diplodocus'],
      correct: 0
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    if (idx === questions[currentIdx].correct) setScore(s => s + 1);
    
    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(c => c + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="bg-amber-500 p-6 flex justify-between items-center text-stone-900">
          <div>
            <h2 className="text-2xl font-display">Đố Vui Khủng Long</h2>
            <p className="text-amber-900">Câu {currentIdx + 1} / {questions.length}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-amber-600 rounded-full transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="p-8">
          {showResult ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🦖</div>
              <h3 className="text-3xl font-display text-amber-600 mb-2">Kết quả!</h3>
              <p className="text-stone-600 mb-8 text-lg">Bạn đã trả lời đúng {score} / {questions.length} câu hỏi!</p>
              <button
                onClick={() => {
                  setCurrentIdx(0);
                  setScore(0);
                  setShowResult(false);
                }}
                className="bg-amber-500 text-stone-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-amber-400 transition-transform hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-6 h-6" />
                Chơi lại
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-800 mb-8">{questions[currentIdx].q}</h3>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentIdx].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selected !== null}
                    className={`p-6 rounded-2xl text-left text-xl font-bold transition-all flex items-center justify-between ${
                      selected === idx
                        ? idx === questions[currentIdx].correct
                          ? 'bg-emerald-500 text-white'
                          : 'bg-red-500 text-white'
                        : selected !== null && idx === questions[currentIdx].correct
                        ? 'bg-emerald-500 text-white'
                        : 'bg-amber-50 hover:bg-amber-100 text-stone-800 border-2 border-amber-200'
                    }`}
                  >
                    {option}
                    {selected === idx && (
                      idx === questions[currentIdx].correct ? <CheckCircle2 className="w-6 h-6" /> : <X className="w-6 h-6" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const games = [
  {
    id: 'dino-run',
    title: 'Trí Nhớ Khủng Long',
    category: 'Trí tuệ',
    icon: Brain,
    color: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1569993358057-7977a481e18c?auto=format&fit=crop&q=80&w=600',
    description: 'Tìm các cặp hình khủng long giống nhau để giành chiến thắng!',
  },
  {
    id: 'dino-quiz',
    title: 'Đố Vui Khủng Long',
    category: 'Học tập',
    icon: Brain,
    color: 'bg-amber-500',
    image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=600',
    description: 'Kiểm tra kiến thức của bạn về thế giới khủng long kỳ diệu.',
  },
  {
    id: 'dino-puzzle',
    title: 'Ghép hình xương khủng long',
    category: 'Trí tuệ',
    icon: Puzzle,
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1596743344697-e81050853589?auto=format&fit=crop&q=80&w=600',
    description: 'Trở thành nhà khảo cổ học và ghép các mảnh xương lại với nhau. (Sắp ra mắt)',
  },
  {
    id: 'dino-paint',
    title: 'Tô màu khủng long',
    category: 'Sáng tạo',
    icon: Paintbrush,
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=600',
    description: 'Thỏa sức sáng tạo với những bức tranh khủng long đầy màu sắc. (Sắp ra mắt)',
  },
];

export default function Games() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-amber-50 pb-16">
      <AnimatePresence>
        {activeGame === 'dino-run' && <MemoryGame onClose={() => setActiveGame(null)} />}
        {activeGame === 'dino-quiz' && <QuizGame onClose={() => setActiveGame(null)} />}
      </AnimatePresence>

      <div className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display text-amber-300 mb-4 drop-shadow-md"
          >
            Trò Chơi Khủng Long
          </motion.h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-medium">
            Vừa học vừa chơi với những trò chơi tương tác thú vị về thế giới khủng long!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-amber-100 hover:border-amber-300 transition-colors group cursor-pointer"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className={`absolute top-4 left-4 ${game.color} text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-md`}>
                    <Icon className="w-4 h-4" />
                    {game.category}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-display text-stone-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-stone-600 mb-6 text-lg">
                    {game.description}
                  </p>
                  <button 
                    onClick={() => setActiveGame(game.id)}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg px-6 py-4 rounded-2xl shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Gamepad2 className="w-6 h-6" />
                    Chơi ngay
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
