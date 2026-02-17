import { PageHeader } from '../components/layout/PageHeader';
import { Features } from '../components/sections/Features';
import { AppShowcase } from '../components/sections/AppShowcase';
import { Stats } from '../components/sections/Stats';
import { useTranslation } from 'react-i18next';

export const FeaturesPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white">
      <PageHeader 
        label={t('pages.features.label')}
        title={t('pages.features.title')}
        subtitle={t('pages.features.subtitle')}
      />
      <Features />
      <AppShowcase />
      <Stats />
    </div>
  );
};
