import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const links = {
    services: [
      { name: t('nav.services'), path: '/services' },
      { name: t('nav.projects'), path: '/projects' },
      { name: t('nav.blog'), path: '/blog' }
    ],
    company: [
      { name: t('nav.profile'), path: '/profile' },
      { name: t('nav.contact'), path: '/contact' }
    ],
    support: [
      { name: 'FAQ', path: '#' },
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Use', path: '#' }
    ]
  };

  return (
    <footer className="bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="text-xl font-semibold text-white tracking-tight mb-6 block">
              ARMAKAT
            </Link>
            <p className="text-white/40 leading-relaxed max-w-sm text-sm">
              {t('footer.subtitle')}
            </p>
          </div>
          
          <div>
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4">
              {links.services.map((item, i) => (
                <li key={i}><Link to={item.path} className="text-white/40 hover:text-white transition-all text-[13px]">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4">
              {links.company.map((item, i) => (
                <li key={i}><Link to={item.path} className="text-white/40 hover:text-white transition-all text-[13px]">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-6">{t('footer.support')}</h4>
            <ul className="space-y-4">
              {links.support.map((item, i) => (
                <li key={i}><Link to={item.path} className="text-white/40 hover:text-white transition-all text-[13px]">{item.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-medium text-white/40">
          <p>© 2026 ARMAKAT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link to="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link to="#" className="hover:text-white transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
