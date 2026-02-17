import { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const faqs = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-item',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1,
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="section bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="font-mono-label text-indigo-500 mb-4 block">FAQ</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('faq.title')}</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item glass rounded-2xl overflow-hidden">
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <ChevronRight className={`text-indigo-500 transition-transform ${activeFaq === i ? 'rotate-90' : ''}`} size={20} />
              </button>
              {activeFaq === i && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
