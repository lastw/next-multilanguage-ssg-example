import React from 'react';
import { useTranslation } from '../../i18n/useTranslation';

export default () => {
  const { t } = useTranslation();

  return (
    <div>
      <article>Особенная русская юридическая страница (для неё нет английской версии)</article>
      <div>{t('But it still can use translation')}</div>
    </div>
  );
};
