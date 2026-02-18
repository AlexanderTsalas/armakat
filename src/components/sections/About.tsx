import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text > *', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
      gsap.from('.about-image', {
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="about-text">
            <h2 className="text-4xl lg:text-6xl font-semibold text-[#1d1d1f] mb-8 tracking-tight leading-tight">
              {t('about.title')}
            </h2>
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl text-[#86868b] leading-relaxed font-normal">
                {t('about.p1')}
              </p>
              <p className="text-xl text-[#86868b] leading-relaxed font-light">
                {t('about.p2')}
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-12 border-t border-[#f5f5f7] pt-12">
              <div>
                <p className="text-3xl font-semibold text-[#1d1d1f]">2006</p>
                <p className="text-sm text-[#86868b] uppercase tracking-widest font-medium mt-1">Established</p>
              </div>
              <div className="w-[1px] h-12 bg-[#f5f5f7]" />
              <div>
                <p className="text-3xl font-semibold text-[#1d1d1f]">500+</p>
                <p className="text-sm text-[#86868b] uppercase tracking-widest font-medium mt-1">Projects</p>
              </div>
            </div>
          </div>
          
          <div className="about-image relative aspect-square rounded-[2rem] overflow-hidden bg-[#f5f5f7]">
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1500" 
              alt="Quality Engineering" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
