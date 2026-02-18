import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const languages = [
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.profile'), path: '/profile' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <Link to="/" className="text-xl font-semibold text-white tracking-tight hover:opacity-70 transition-opacity">
          ARMAKAT
        </Link>
        
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-[13px] font-medium transition-colors ${location.pathname === link.path ? 'text-white' : 'text-white/50 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6 border-l border-[#f5f5f7] pl-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors outline-none">
                <Globe size={16} />
                <span className="uppercase">{currentLanguage.code}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-neutral-900 border-white/10 rounded-xl shadow-2xl p-1 min-w-[140px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className="flex items-center justify-between cursor-pointer hover:bg-white/10 text-white transition-colors py-2.5 px-3 rounded-lg"
                    onClick={() => i18n.changeLanguage(lang.code)}
                  >
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span>{lang.flag}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="bg-white text-black text-[13px] font-medium px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors">
              {t('nav.getStarted')}
            </Link>
          </div>
        </div>
        
        <div className="lg:hidden flex items-center gap-6">
          <button className="text-[#1d1d1f]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-40 px-6 py-10 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setMenuOpen(false)}
                className={`text-3xl font-semibold tracking-tight ${location.pathname === link.path ? 'text-[#0071e3]' : 'text-[#1d1d1f]'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-[#f5f5f7] flex flex-col gap-6">
               <div className="flex items-center gap-4">
                  {languages.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setMenuOpen(false);
                      }}
                      className={`text-sm font-medium px-4 py-2 rounded-full border ${i18n.language === lang.code ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]' : 'text-[#86868b] border-[#f5f5f7]'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
               </div>
               <Link 
                to="/contact" 
                onClick={() => setMenuOpen(false)}
                className="bg-[#0071e3] text-white text-center py-4 rounded-full font-semibold text-lg"
               >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
