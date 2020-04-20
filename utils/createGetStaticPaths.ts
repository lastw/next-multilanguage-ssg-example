import { GetStaticPaths } from 'next';
import { availableLangs } from '../i18n/config';

export const createGetStaticPaths = (
  gspWithoutLangs?: GetStaticPaths,
): GetStaticPaths => async () => {
  // no GSP --> generate only lang params
  if (!gspWithoutLangs) {
    return {
      fallback: false,
      paths: availableLangs.map((lang) => ({
        params: {
          lang,
        },
      })),
    };
  }

  const staticPaths = await gspWithoutLangs();

  return {
    ...staticPaths,
    paths: addLangsToPaths(staticPaths.paths),
  };
};

function addLangsToPaths(paths: Array<string | { params: any }>) {
  // ninja flatmap
  return ([] as typeof paths).concat(
    ...paths.map((path) => {
      return availableLangs.map((lang) => {
        if (typeof path === 'string') {
          return `/${lang}${path}`;
        }

        return {
          ...path,
          params: {
            ...path.params,
            lang,
          },
        };
      });
    }),
  );
}
