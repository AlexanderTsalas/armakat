import { PageHeader } from '../components/layout/PageHeader';
import { Services } from '../components/sections/Services';
import { useTranslation } from 'react-i18next';

export const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader 
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        label={t('services.label')}
      />
      <Services />
    </>
  );
};
