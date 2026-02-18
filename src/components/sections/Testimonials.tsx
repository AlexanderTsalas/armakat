import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const testimonialsData = t('testimonials', { returnObjects: true });
  const testimonials = (testimonialsData && typeof testimonialsData === 'object' && 'items' in testimonialsData && Array.isArray(testimonialsData.items))
    ? testimonialsData.items as Array<{ name: string; text: string }>
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
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
    <section ref={sectionRef} className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight">{t('testimonials.title')}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card flex flex-col justify-between p-10 bg-white rounded-[2rem] shadow-sm">
              <p className="text-xl text-[#1d1d1f] leading-relaxed font-normal mb-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center font-bold text-[#86868b] text-xs">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="font-semibold text-[#1d1d1f] tracking-tight">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
