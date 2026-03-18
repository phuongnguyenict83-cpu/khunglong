import { Link, Outlet } from 'react-router-dom';
import { Home, Gamepad2, PlaySquare, BookOpen, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Home, label: 'Trang chủ' },
    { to: '/games', icon: Gamepad2, label: 'Trò chơi' },
    { to: '/media', icon: PlaySquare, label: 'Video & Âm thanh' },
    { to: '/guide', icon: BookOpen, label: 'Góc Phụ huynh' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 font-sans text-stone-800">
      <header className="bg-emerald-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-3xl font-display tracking-tight text-amber-300">DinoKids</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-500 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-emerald-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-600"
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-display text-amber-400 mb-4">DinoKids</h3>
              <p className="text-sm">
                Khám phá thế giới khủng long kỳ thú qua các bài học, trò chơi và video sinh động dành cho trẻ em.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Khám phá</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-amber-400 transition-colors">Các loài khủng long</Link></li>
                <li><Link to="/games" className="hover:text-amber-400 transition-colors">Trò chơi tương tác</Link></li>
                <li><Link to="/media" className="hover:text-amber-400 transition-colors">Thư viện Video</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Dành cho phụ huynh</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/guide" className="hover:text-amber-400 transition-colors">Hướng dẫn học cùng con</Link></li>
                <li><Link to="/guide" className="hover:text-amber-400 transition-colors">Tài liệu in ấn</Link></li>
                <li><Link to="/guide" className="hover:text-amber-400 transition-colors">Liên hệ</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} DinoKids. Bản quyền thuộc về những người yêu khủng long.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
