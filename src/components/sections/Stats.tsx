import { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { stats as statsMetadata } from '../../constants';

export const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const [counters, setCounters] = useState(statsMetadata.map(() => 0));

  const stats = [
    { ...statsMetadata[0], label: t('stats.homes') },
    { ...statsMetadata[1], label: t('stats.satisfaction') },
    { ...statsMetadata[2], label: t('stats.support') },
    { ...statsMetadata[3], label: t('stats.savings') },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          statsMetadata.forEach((stat, i) => {
            gsap.to({}, {
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                const progress = (this as any).progress();
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[i] = Math.round(stat.value * progress);
                  return newCounters;
                });
              }
            });
          });
        },
        once: true
      });
    }, statsRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={statsRef} className="section bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-gradient mb-2">
                {counters[i]}{stat.suffix}
              </div>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
