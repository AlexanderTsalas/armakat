import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { services as serviceMetadata } from '../../constants';

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const translatedItems = t('services.items', { returnObjects: true }) as Array<{ title: string; desc: string; features: string[] }>;
  
  const services = serviceMetadata.map((meta, i) => ({
    ...meta,
    ...translatedItems[i]
  }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { x: 100, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.15,
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
    <section id="services" ref={sectionRef} className="section bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="font-mono-label text-indigo-500 mb-4 block">{t('services.label')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('services.title')}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div key={i} className="service-card group relative overflow-hidden rounded-3xl shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f: string, idx: number) => (
                    <span key={idx} className="text-[10px] font-mono-label px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white/80">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
