import { PageHeader } from '../components/layout/PageHeader';
import { Blog } from '../components/sections/Blog';
import { useTranslation } from 'react-i18next';

export const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader 
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        label={t('blog.label')}
      />
      <Blog />
    </>
  );
};
