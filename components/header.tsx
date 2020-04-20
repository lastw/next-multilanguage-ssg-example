import React from 'react';
import { useTranslation } from '../i18n/useTranslation';

export const Header = () => {
  const { t, lang } = useTranslation();

  return (
    <div>
      {t('Current language')}: <b>{lang}</b>
      <hr />
    </div>
  );
};
