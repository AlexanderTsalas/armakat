import { PageHeader } from '../components/layout/PageHeader';
import { Projects } from '../components/sections/Projects';
import { useTranslation } from 'react-i18next';

export const ProjectsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader 
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
        label={t('projects.label')}
      />
      <Projects />
    </>
  );
};
