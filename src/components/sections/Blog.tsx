import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const blogData = t('blog', { returnObjects: true });
  const posts = (blogData && typeof blogData === 'object' && 'items' in blogData && Array.isArray(blogData.items))
    ? blogData.items as Array<{ title: string; date: string; desc: string }>
    : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-card', {
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
    <section id="blog" ref={sectionRef} className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#1d1d1f] mb-6 tracking-tight">{t('blog.title')}</h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed font-normal">{t('blog.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="blog-card flex flex-col bg-white p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl">
              <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider mb-6">
                {post.date}
              </span>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-6 leading-tight tracking-tight">
                {post.title}
              </h3>
              <p className="text-[#86868b] mb-10 leading-relaxed font-normal flex-grow">
                {post.desc}
              </p>
              <Link to="/blog" className="text-[#0066cc] font-medium hover:underline flex items-center gap-1">
                Read more <span className="text-lg">›</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
