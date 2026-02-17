import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Play, Star, Home, Wifi, Lock, Battery } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo('.gradient-orb', 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 0.5, duration: 1.5, stagger: 0.2 }
      );
      
      tl.fromTo('.hero-headline',
        { y: 80, opacity: 0, rotateX: 15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1 },
        '-=1'
      );
      
      tl.fromTo('.hero-sub',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );
      
      tl.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
        '-=0.4'
      );
      
      tl.fromTo(phoneRef.current,
        { x: 100, opacity: 0, rotateY: -30 },
        { x: 0, opacity: 1, rotateY: 0, duration: 1.2 },
        '-=1'
      );
      
      tl.fromTo('.float-icon',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5 },
        '-=0.5'
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="gradient-orb w-[600px] h-[600px] bg-slate-900 top-[-200px] right-[-200px]" />
      <div className="gradient-orb w-[400px] h-[400px] bg-slate-800 bottom-[100px] left-[-100px]" />
      <div className="gradient-orb w-[300px] h-[300px] bg-slate-700 top-[50%] left-[30%]" />
      
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="perspective-container">
            <span className="font-mono-label text-indigo-500 mb-4 block">{t('hero.label')}</span>
            <h1 className="hero-headline text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="hero-sub text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="hero-cta btn-primary flex items-center gap-2">
                {t('hero.cta1')} <ArrowRight size={18} />
              </a>
              <a href="#features" className="hero-cta btn-secondary flex items-center gap-2">
                <Play size={18} /> {t('hero.cta2')}
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-white" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-sm text-slate-500">{t('hero.trust')}</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - 3D Phone */}
          <div className="relative perspective-container hidden lg:block">
            <div ref={phoneRef} className="relative animate-float" style={{ transformStyle: 'preserve-3d' }}>
              {/* Phone mockup */}
              <div className="relative mx-auto w-[300px] h-[600px] bg-slate-900 rounded-[40px] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                  <img src="/app_interface.jpg" alt="App Interface" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Floating icons */}
              <div className="float-icon absolute -top-4 -left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed">
                <Home className="text-indigo-500" size={28} />
              </div>
              <div className="float-icon absolute top-20 -right-12 w-14 h-14 bg-indigo-500 rounded-2xl shadow-lg flex items-center justify-center">
                <Wifi className="text-white" size={24} />
              </div>
              <div className="float-icon absolute bottom-32 -left-16 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed">
                <Lock className="text-emerald-500" size={24} />
              </div>
              <div className="float-icon absolute -bottom-4 right-8 w-16 h-14 bg-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
                <Battery className="text-white" size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
