export const checkFavorBtnStatus = (array, obj) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === obj.id) {
      return true;
    }
  }
  return false;
};
