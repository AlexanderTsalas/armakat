import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Process } from '../components/sections/Process';
import { Services } from '../components/sections/Services';
import { AppShowcase } from '../components/sections/AppShowcase';
import { Testimonials } from '../components/sections/Testimonials';
import { Stats } from '../components/sections/Stats';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <Services />
      <AppShowcase />
      <Testimonials />
      <Stats />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
};
