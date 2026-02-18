import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content > *', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="contact-content">
            <h2 className="text-4xl lg:text-7xl font-semibold text-[#1d1d1f] mb-8 tracking-tight leading-tight">
              {t('contact.title')}
            </h2>
            <p className="text-[#86868b] text-xl lg:text-2xl mb-16 leading-relaxed">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 border border-[#f5f5f7] rounded-full flex items-center justify-center text-[#1d1d1f]">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <p className="text-xl font-medium text-[#1d1d1f]">+30 210 123 4567</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 border border-[#f5f5f7] rounded-full flex items-center justify-center text-[#1d1d1f]">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <p className="text-xl font-medium text-[#1d1d1f]">info@armakat.gr</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 border border-[#f5f5f7] rounded-full flex items-center justify-center text-[#1d1d1f]">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <p className="text-xl font-medium text-[#1d1d1f]">{t('contact.loc_city')}</p>
              </div>
            </div>
          </div>
          
          <div className="contact-content bg-[#f5f5f7] p-12 lg:p-16 rounded-[2rem]">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#86868b] ml-1">{t('contact.name')}</label>
                <input 
                  type="text" 
                  className="w-full bg-white rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 transition-all font-medium text-[#1d1d1f]"
                  placeholder={t('contact.name_placeholder')}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#86868b] ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 transition-all font-medium text-[#1d1d1f]"
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#86868b] ml-1">{t('contact.message')}</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 transition-all font-medium text-[#1d1d1f] resize-none"
                  placeholder={t('contact.message_placeholder')}
                ></textarea>
              </div>
              
              <button className="w-full bg-[#1d1d1f] text-white py-5 rounded-full font-semibold text-lg hover:bg-black transition-colors">
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
