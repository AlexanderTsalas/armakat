import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="section bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <span className="font-mono-label text-indigo-500 mb-4 block">CONTACT</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{t('contact.title')}</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t('contact.subtitle')}</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Phone className="text-indigo-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t('contact.phone')}</p>
                  <p className="font-semibold text-slate-900">+1 (212) 555-0137</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Mail className="text-indigo-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t('contact.email')}</p>
                  <p className="font-semibold text-slate-900">hello@armakat.studio</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <MapPin className="text-indigo-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t('contact.location')}</p>
                  <p className="font-semibold text-slate-900">{t('contact.loc_city')}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Form */}
          <div className="glass rounded-3xl p-8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.name')}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('contact.name_placeholder')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.email')}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.phone')}</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.message')}</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all h-32 resize-none" placeholder={t('contact.message_placeholder')} />
              </div>
              <button type="submit" className="w-full btn-primary py-4">{t('contact.send')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
