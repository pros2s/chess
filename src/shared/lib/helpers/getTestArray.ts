export const getTestArray = (length: number) =>
  Array(length)
    .fill(0)
    .map((_, i) => i + 1);
