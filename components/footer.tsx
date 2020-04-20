import { Link } from './link';
import { useTranslation } from '../i18n/useTranslation';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <hr />←{' '}
      <Link href="/">
        <a>{t('Go back to root')}</a>
      </Link>
    </div>
  );
};
