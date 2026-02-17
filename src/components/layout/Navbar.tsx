import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
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
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
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

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      if (menuOpen) setMenuOpen(false);
    };
    handleRouteChange();
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="flex items-center justify-between px-6 lg:px-12">
        <Link to="/" className="text-2xl font-bold text-slate-900">
          Armakat<span className="text-slate-400">.</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/features" className={`text-sm font-medium transition-colors ${location.pathname === '/features' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>{t('nav.features')}</Link>
          <Link to="/services" className={`text-sm font-medium transition-colors ${location.pathname === '/services' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>{t('nav.services')}</Link>
          <Link to="/pricing" className={`text-sm font-medium transition-colors ${location.pathname === '/pricing' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>{t('nav.pricing')}</Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>{t('nav.contact')}</Link>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors outline-none">
                <Languages size={18} />
                <span>{currentLanguage.flag}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur-md border-slate-200">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors"
                    onClick={() => i18n.changeLanguage(lang.code)}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="btn-primary text-sm">{t('nav.getStarted')}</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4 lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium text-slate-900 outline-none">
              <Languages size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur-md border-slate-200">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => i18n.changeLanguage(lang.code)}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="text-slate-900" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass border-t border-slate-200 px-6 py-6 space-y-4 absolute top-full left-0 right-0 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/features" className="block text-slate-700 font-medium">{t('nav.features')}</Link>
          <Link to="/services" className="block text-slate-700 font-medium">{t('nav.services')}</Link>
          <Link to="/pricing" className="block text-slate-700 font-medium">{t('nav.pricing')}</Link>
          <Link to="/contact" className="block text-slate-700 font-medium">{t('nav.contact')}</Link>
          <Link to="/contact" className="btn-primary text-center block">{t('nav.getStarted')}</Link>
        </div>
      )}
    </nav>
  );
};
