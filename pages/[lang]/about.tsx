import React from 'react';
import { NextPage } from 'next';
import { useTranslation } from '../../i18n/useTranslation';
import { arbitraryGetStaticProps } from '../../utils/arbitraryGetStaticProps';
import { createGetStaticPaths } from '../../utils/createGetStaticPaths';

const AboutPage: NextPage = () => {
  const { t } = useTranslation();

  return <div>{t('This is "about" page, common for all languages')}</div>;
};

export const getStaticProps = arbitraryGetStaticProps;
export const getStaticPaths = createGetStaticPaths();

export default AboutPage;
