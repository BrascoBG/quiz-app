export const arrayShuffle = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};
