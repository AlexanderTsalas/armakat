import { PageHeader } from '../components/layout/PageHeader';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { useTranslation } from 'react-i18next';

export const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader 
        title={t('nav.profile')}
        subtitle={t('about.p1')}
        label="ARMAKAT"
      />
      <About />
      <Stats />
    </>
  );
};
