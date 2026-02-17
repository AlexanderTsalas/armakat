import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AppShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const features = t('app.features', { returnObjects: true }) as string[];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.app-phone',
        { x: -100, opacity: 0, rotateY: 20 },
        {
          x: 0, opacity: 1, rotateY: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="app" ref={sectionRef} className="section bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <div className="app-phone perspective-container">
            <div className="relative mx-auto w-[280px] h-[560px] bg-slate-900 rounded-[40px] p-3 shadow-2xl animate-float">
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                <img src="/app_interface.jpg" alt="App" className="w-full h-full object-cover" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="text-sm font-medium">{t('app.status')}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <span className="font-mono-label text-slate-500 mb-4 block">{t('app.label')}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{t('app.title')}</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t('app.subtitle')}</p>
            
            <div className="space-y-4">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Check className="text-slate-600" size={20} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
