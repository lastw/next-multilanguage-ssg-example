import React from 'react';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { LangContext } from '../i18n/context';
import { defaultLang } from '../i18n/config';
import { isValidLang } from '../i18n/isValidLang';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function App({ Component, pageProps, router }: AppProps) {
  const lang = getLang(router);

  return (
    <LangContext.Provider value={lang}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </LangContext.Provider>
  );
}

function getLang(router: Router) {
  if (router.query.lang && isValidLang(router.query.lang as string)) {
    return router.query.lang as string;
  }

  if (router.asPath.split('/')[1]) {
  }
  if (router.asPath.startsWith('/ru')) {
    return 'ru';
  }

  return defaultLang;
}
