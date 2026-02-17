import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.step-card',
        { y: 60, opacity: 0, rotateY: -30 },
        {
          y: 0, opacity: 1, rotateY: 0, stagger: 0.2,
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
    <section id="steps" ref={sectionRef} className="section bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="font-mono-label text-indigo-500 mb-4 block">{t('process.label')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('process.title')}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('process.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="step-card relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-3xl p-8 text-white h-full border border-slate-700">
                <span className="text-6xl font-bold opacity-30">0{i + 1}</span>
                <h3 className="text-2xl font-bold mt-4 mb-4">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="text-indigo-300" size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
