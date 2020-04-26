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
  const langFromQuery = Array.isArray(router.query.lang) ? router.query.lang[0] : router.query.lang;
  if (langFromQuery && isValidLang(langFromQuery)) {
    return langFromQuery;
  }

  const langFromPath = router.asPath.split('/')[1];
  if (langFromPath && isValidLang(langFromPath)) {
    return langFromPath;
  }

  return defaultLang;
}
