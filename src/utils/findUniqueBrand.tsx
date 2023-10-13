import { ResponseData } from '../App.types';

export const findUniqueBrand = (inputArray: ResponseData[]): string[] | unknown => {
  const uniqueMakes = new Set();

  inputArray.forEach(item => {
    uniqueMakes.add(item.make);
  });

  return Array.from(uniqueMakes);
};
