import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { features as featureMetadata } from '../../constants';

export const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const translatedItems = t('features.items', { returnObjects: true }) as Array<{ title: string; desc: string; details: string[] }>;
  
  // Merge metadata (icons, colors) with translated content
  const features = featureMetadata.map((meta, i) => ({
    ...meta,
    ...translatedItems[i]
  }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1,
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLDivElement) => {
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    gsap.to(cardRef, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (cardRef: HTMLDivElement) => {
    gsap.to(cardRef, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <section id="features" ref={sectionRef} className="section bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="font-mono-label text-indigo-500 mb-4 block">{t('features.label')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('features.title')}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('features.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="feature-card tilt-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{feature.desc}</p>
              
              <ul className="space-y-2 border-t border-slate-100 pt-4">
                {feature.details && (feature.details as string[]).map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
