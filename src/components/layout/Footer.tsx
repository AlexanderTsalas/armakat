import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Armakat<span className="text-indigo-400">.</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">{t('footer.subtitle')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">{t('features.items.0.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('features.items.1.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('features.items.2.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('features.items.3.title')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/features" className="hover:text-white transition-colors">{t('nav.features')}</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.blog')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('footer.help')}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500">
            <p>{t('footer.copy')} {t('footer.rights')}</p>
            <p className="mt-1">
              {t('footer.designedBy')} <a href="https://distarter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">distarter</a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
