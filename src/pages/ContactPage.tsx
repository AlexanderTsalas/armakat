import { PageHeader } from '../components/layout/PageHeader';
import { Contact } from '../components/sections/Contact';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white">
      <PageHeader 
        label={t('pages.contact.label')}
        title={t('pages.contact.title')}
        subtitle={t('pages.contact.subtitle')}
      />
      <Contact />
    </div>
  );
};
