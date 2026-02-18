import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });
      gsap.from('.hero-subheadline', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power4.out',
      });
      gsap.from('.hero-actions', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });
      gsap.from('.hero-image', {
        scale: 1.05,
        opacity: 0,
        duration: 2,
        delay: 0.1,
        ease: 'power2.out',
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[95vh] flex flex-col items-center justify-center bg-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <h1 className="hero-headline text-5xl lg:text-8xl font-semibold text-[#1d1d1f] mb-8 tracking-[-0.03em] leading-tight">
          {t('hero.title')}
        </h1>
        <p className="hero-subheadline text-xl lg:text-2xl text-[#86868b] mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link to="/projects" className="btn-primary text-lg px-8 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors">
            {t('hero.cta1')}
          </Link>
          <Link to="/contact" className="btn-secondary text-lg text-[#0066cc] hover:underline flex items-center gap-1">
            {t('hero.cta2')}
            <span className="text-xl">›</span>
          </Link>
        </div>
      </div>

      <div className="hero-image relative mt-20 w-full max-w-7xl mx-auto px-6 aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-[2rem] bg-[#f5f5f7]">
        <img 
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2000" 
          alt="Technical implementation" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
