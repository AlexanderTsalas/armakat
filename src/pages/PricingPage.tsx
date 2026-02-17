import { PageHeader } from '../components/layout/PageHeader';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { useTranslation } from 'react-i18next';

export const PricingPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white">
      <PageHeader 
        label={t('pages.pricing.label')}
        title={t('pages.pricing.title')}
        subtitle={t('pages.pricing.subtitle')}
      />
      <Pricing />
      <FAQ />
    </div>
  );
};
