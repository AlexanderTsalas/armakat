import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

export const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const processData = t('process', { returnObjects: true });
  const steps = (processData && typeof processData === 'object' && 'steps' in processData && Array.isArray(processData.steps))
    ? processData.steps as Array<{ title: string; desc: string }>
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
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
    <section id="steps" ref={sectionRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="text-4xl lg:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-tight">{t('process.title')}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <div key={i} className="process-step group flex flex-col gap-8">
              <div className="text-6xl font-semibold text-[#f5f5f7] transition-colors group-hover:text-[#0071e3] duration-500">
                {i + 1}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#86868b] leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#f5f5f7]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
