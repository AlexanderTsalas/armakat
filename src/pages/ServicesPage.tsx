import { PageHeader } from '../components/layout/PageHeader';
import { Services } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { useTranslation } from 'react-i18next';

export const ServicesPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white">
      <PageHeader 
        label={t('pages.services.label')}
        title={t('pages.services.title')}
        subtitle={t('pages.services.subtitle')}
      />
      <Services />
      <Process />
      <Testimonials />
    </div>
  );
};
