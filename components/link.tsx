import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useTranslation } from '../i18n/useTranslation';

type Props = LinkProps & { withoutLang?: boolean; lang?: string };

export const Link: React.FC<Props> = (props) => {
  const { lang: langFromContext } = useTranslation();
  const { lang: langFromProps, withoutLang, ...restProps } = props;

  const lang = langFromProps || langFromContext;

  if (withoutLang) {
    return <NextLink {...restProps} />;
  }

  if (props.href === '/') {
    return <NextLink {...restProps} href="/[lang]" as={`/${lang}`} />;
  }

  const as = props.as ? `/${lang}${props.as}` : `/${lang}${props.href}`;
  const href = props.href ? `/[lang]${props.href}` : props.href;

  return <NextLink {...restProps} as={as} href={href} />;
};
