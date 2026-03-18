import { motion } from 'motion/react';
import { Footprints, BookOpen, Gamepad2, MessageCircleQuestion } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const tabs = [
    { id: 'library', label: 'Thư viện', icon: BookOpen },
    { id: 'quiz', label: 'Trò chơi', icon: Gamepad2 },
    { id: 'chat', label: 'Hỏi đáp', icon: MessageCircleQuestion },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-indigo-100 px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-8">
      <div className="flex items-center gap-2 mr-4 border-r border-indigo-100 pr-4">
        <Footprints className="text-indigo-600" size={24} />
        <span className="font-bold text-indigo-900 hidden sm:inline">Dino Kids</span>
      </div>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative flex flex-col items-center gap-1 group transition-colors ${
            activeTab === tab.id ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-400'
          }`}
        >
          <tab.icon size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-1 w-1 h-1 bg-indigo-600 rounded-full"
            />
          )}
        </button>
      ))}
    </nav>
  );
}
