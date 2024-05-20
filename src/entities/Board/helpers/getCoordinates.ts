import { letters } from '../config/notation';

export const getCoordinates = (position: string) => {
  const splitted = position.split('');

  const letter = splitted[0];
  const letterI = letters.findIndex((lett) => lett === letter);
  const number = Number(splitted[1]);

  return { letterI, number, letter };
};
