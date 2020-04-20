import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
  const router = useRouter();

  /**
   * Root page is only for redirecting to one of the localized index pages.
   * There you can detect preferred language.
   *
   * You should do this on server if you can,
   * but this example is about statically generated pages.
   */
  useEffect(() => {
    router.replace('/en');
  }, []);

  return <div>Redirecting...</div>;
};

export default IndexPage;
