import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{ name: string; text: string }>;

  return (
    <section className="section bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="font-mono-label text-slate-500 mb-4 block">{t('testimonials.label')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('testimonials.title')}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <p className="font-semibold text-slate-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
