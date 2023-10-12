export const findUniqueBrand = inputArray => {
  const uniqueMakes = new Set();

  inputArray.forEach(item => {
    uniqueMakes.add(item.make);
  });

  return Array.from(uniqueMakes);
};
