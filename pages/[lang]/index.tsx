import React from 'react';
import { NextPage } from 'next';
import { useTranslation } from '../../i18n/useTranslation';
import { Link } from '../../components/link';
import { arbitraryGetStaticProps } from '../../utils/arbitraryGetStaticProps';
import { createGetStaticPaths } from '../../utils/createGetStaticPaths';

const IndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('This is index page for every language')}
      <h2>{t('All pages')}</h2>
      <h3>{t('SSG without dynamic params other than [lang]')}</h3>
      <ul>
        <li>
          <Link href="/about">
            <a>/about</a>
          </Link>
        </li>
      </ul>
      <h3>{t('SSG with other params and fallback')}</h3>
      <ul>
        <li>
          <Link href="/item/one">
            <a>/item/one</a>
          </Link>{' '}
          — {t('pre-generated via getStaticPaths')}
        </li>
        <li>
          <Link href="/item/two">
            <a>/item/two</a>
          </Link>{' '}
          — {t('pre-generated via getStaticPaths')}
        </li>
        <li>
          <Link href="/item/three">
            <a>/item/three</a>
          </Link>{' '}
          — {t('is not specified in getStaticPaths')}
        </li>
        <li>you can try /en/item/any_text or /ru/item/any_text for fallback</li>
      </ul>
      <h3>{t('Specific pages without dynamic [lang] routing')}</h3>
      <ul>
        <li>
          <Link href="/en/specific-english-article" withoutLang>
            <a>/en/specific-english-article</a>
          </Link>{' '}
          — Specific english article (does not have russian alternative)
        </li>
        <li>
          <Link href="/ru/legal" withoutLang>
            <a>/ru/legal</a>
          </Link>{' '}
          — Особенная русская юридическая страница (для неё нет английской версии)
        </li>
      </ul>
      <hr />
      <h2>{t('All languages')}</h2>
      <ul>
        <li>
          <Link href="/" lang="en">
            <a>English 🇬🇧</a>
          </Link>
        </li>
        <li>
          <Link href="/" lang="ru">
            <a>Русский 🇷🇺</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const getStaticProps = arbitraryGetStaticProps;
export const getStaticPaths = createGetStaticPaths();

export default IndexPage;
