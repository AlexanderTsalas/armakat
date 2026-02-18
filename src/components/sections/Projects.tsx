import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const projectsData = t('projects', { returnObjects: true });
  const projects = (projectsData && typeof projectsData === 'object' && 'items' in projectsData && Array.isArray(projectsData.items))
    ? projectsData.items as Array<{ title: string; desc: string; image: string }>
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
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
    <section id="projects" ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-tight leading-tight">
              {t('projects.title')}
            </h2>
            <p className="text-xl lg:text-2xl text-[#86868b] leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.slice(0, 2).map((project, i) => (
            <div key={i} className="project-card group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#f5f5f7] mb-8">
                <img 
                  src={
                    i === 0 ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1500" :
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1500"
                  } 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-[#86868b] text-lg font-normal mb-6">
                {project.desc}
              </p>
              <Link to="/projects" className="text-[#0066cc] font-medium hover:underline flex items-center gap-1">
                View project <span className="text-lg">›</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/projects" className="text-xl text-[#0066cc] font-medium hover:underline flex items-center justify-center gap-1">
            See all projects <span className="text-2xl">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
