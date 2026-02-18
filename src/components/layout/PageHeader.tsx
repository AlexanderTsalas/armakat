import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  label: string;
}

export const PageHeader = ({ title, subtitle, label }: PageHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.header-content > *', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="pt-48 pb-32 bg-white border-b border-[#f5f5f7]">
      <div className="header-content max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-[13px] font-semibold text-[#0071e3] mb-6 block uppercase tracking-wider">
          {label}
        </span>
        <h1 className="text-5xl lg:text-7xl font-semibold text-[#1d1d1f] mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="text-xl lg:text-2xl text-[#86868b] max-w-3xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
