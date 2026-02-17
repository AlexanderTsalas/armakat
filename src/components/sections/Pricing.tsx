import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { pricing as pricingMetadata } from '../../constants';

export const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const translatedItems = t('pricing.items', { returnObjects: true }) as Array<{ name: string; desc: string; price: string; features: string[]; featured?: boolean }>;
  
  const pricing = pricingMetadata.map((meta, i) => ({
    ...meta,
    ...translatedItems[i]
  }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card',
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15,
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
    <section id="pricing" ref={sectionRef} className="section bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="font-mono-label text-indigo-500 mb-4 block">{t('pricing.title')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('pricing.subtitle')}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <div 
              key={i} 
              className={`pricing-card rounded-3xl p-8 ${plan.featured ? 'bg-gradient-to-br from-slate-800 to-slate-950 text-white glow-strong border border-slate-700' : 'bg-white shadow-lg'}`}
            >
              {plan.featured && (
                <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">{t('pricing.popular')}</span>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.featured ? 'text-indigo-100' : 'text-slate-500'}`}>{plan.desc}</p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>{plan.price === 'Custom' ? t('pricing.custom') : `€${plan.price}`}</span>
                {plan.price !== 'Custom' && <span className={plan.featured ? 'text-indigo-100' : 'text-slate-500'}>/{t('pricing.onetime')}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f: string, j: number) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check size={18} className={plan.featured ? 'text-slate-400' : 'text-slate-600'} />
                    <span className={plan.featured ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-semibold transition-all ${plan.featured ? 'bg-white text-slate-900 hover:bg-slate-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                {t('pricing.button')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
