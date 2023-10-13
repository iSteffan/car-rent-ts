import { ResponseData } from '../App.types';

export const checkFavorBtnStatus = (array: ResponseData[], obj: ResponseData): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === obj.id) {
      return true;
    }
  }
  return false;
};
