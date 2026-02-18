import { PageHeader } from '../components/layout/PageHeader';
import { Contact } from '../components/sections/Contact';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader 
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        label="CONTACT"
      />
      <Contact />
    </>
  );
};
