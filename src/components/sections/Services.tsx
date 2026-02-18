import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { 
  Pencil, 
  Construction, 
  ClipboardCheck, 
  Sun, 
  Smartphone, 
  Box 
} from 'lucide-react';

const icons = [Pencil, Construction, ClipboardCheck, Sun, Smartphone, Box];

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const servicesData = t('services', { returnObjects: true });
  const services = (servicesData && typeof servicesData === 'object' && 'items' in servicesData && Array.isArray(servicesData.items)) 
    ? servicesData.items 
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
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
    <section id="services" ref={sectionRef} className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="text-4xl lg:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-tight">{t('services.title')}</h2>
          <p className="text-xl lg:text-2xl text-[#86868b] max-w-2xl leading-relaxed">{t('services.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="service-card group bg-white p-12 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="mb-10 text-[#0071e3]">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-6 tracking-tight leading-tight">{service.title}</h3>
                <p className="text-[#86868b] mb-10 leading-relaxed text-lg">
                  {service.desc}
                </p>
                <div className="space-y-4 pt-10 border-t border-[#f5f5f7]">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#86868b] font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
