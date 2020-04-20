export const getItemFromBackend = async (params: { id: string; lang: string }) => {
  return {
    data: { random: Math.random(), id: params.id, lang: params.lang },
  };
};
