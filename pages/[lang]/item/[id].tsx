import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { getItemFromBackend } from '../../../utils/getItemFromBackend';
import { useTranslation } from '../../../i18n/useTranslation';
import { createGetStaticPaths } from '../../../utils/createGetStaticPaths';

interface Props {
  item?: { data: any };
}

/**
 * /en/item/some-id
 */
const Page: NextPage<Props> = ({ item }) => {
  const { t } = useTranslation();

  if (!item) {
    return <div>{t('there is no item — it is fallback page')}</div>;
  }
  return (
    <div>
      {t('Item data is loaded')}:
      <pre style={{ border: '1px solid #999', padding: 8 }}>{JSON.stringify(item.data)}</pre>
    </div>
  );
};

interface Query {
  [i: string]: string | never;
  id: string;
  lang: string;
}

export const getStaticProps: GetStaticProps<Props, Query> = async ({ params }) => {
  if (!params) {
    return {
      props: {},
    };
  }

  return {
    props: {
      item: await getItemFromBackend({ id: params.id, lang: params.lang }),
    },
  };
};

export const getStaticPaths = createGetStaticPaths(async () => {
  return {
    paths: [
      {
        params: {
          id: 'one',
        },
      },
      {
        params: {
          id: 'two',
        },
      },
    ],
    fallback: true,
  };
});

export default Page;
