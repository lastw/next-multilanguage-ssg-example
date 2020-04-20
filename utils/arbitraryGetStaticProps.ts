import { GetStaticProps } from 'next';

/**
 * If dynamic route has only [lang] param,
 * then we don't need to pass any props to the page.
 */
export const arbitraryGetStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
