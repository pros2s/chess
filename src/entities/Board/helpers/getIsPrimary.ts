export const getIsPrimary = (number: number, letterI: number) =>
  (number % 2 === 1 && letterI % 2 === 0) || (number % 2 === 0 && letterI % 2 === 1);
