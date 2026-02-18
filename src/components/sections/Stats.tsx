import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

const stats = [
  { key: 'experience', value: 30, suffix: '+', prefix: '' },
  { key: 'projects', value: 500, suffix: '+', prefix: '' },
  { key: 'satisfaction', value: 99, suffix: '%', prefix: '' },
  { key: 'efficiency', value: 30, suffix: '%', prefix: 'Up to' },
];

export const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stat-value').forEach((el) => {
        const targetValue = parseInt(el.getAttribute('data-value') || '0');
        gsap.fromTo(el, 
          { textContent: 0 },
          {
            textContent: targetValue,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[#86868b] text-sm font-medium mb-2 uppercase tracking-tight">
                {stat.prefix} {t(`stats.${stat.key}`)}
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span 
                  className="stat-value text-5xl lg:text-7xl font-semibold text-[#1d1d1f] tracking-tighter" 
                  data-value={stat.value}
                >
                  0
                </span>
                <span className="text-2xl lg:text-3xl font-semibold text-[#1d1d1f]">
                  {stat.suffix}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
