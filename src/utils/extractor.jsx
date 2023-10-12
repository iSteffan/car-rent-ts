export const extractCity = inputString => {
  const parts = inputString.split(',');
  if (parts.length >= 2) {
    const secondPart = parts[1].trim();
    const words = secondPart.split(' ');
    if (words.length > 0) {
      return words[0];
    }
  }
  return null;
};

export const extractCountry = inputString => {
  const parts = inputString.split(',');
  if (parts.length >= 3) {
    const thirdPart = parts[2].trim();
    const words = thirdPart.split(' ');
    if (words.length > 0) {
      return words[0];
    }
  }
  return null;
};
