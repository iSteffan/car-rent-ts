export const extractRentalPricesInRange = array => {
  // Спочатку ми створимо масив з усіма значеннями rentalPrice, видалимо "$" та перетворимо на числа.
  const rentalPrices = array.map(item =>
    parseInt(item.rentalPrice.replace('$', ''))
  );

  // Знайдемо максимальне значення rentalPrice.
  const maxRentalPrice = Math.max(...rentalPrices);

  // Створимо масив результатів, додаючи значення в проміжку від 10 до максимального значення з кроком в 10.
  const result = [];
  for (let i = 10; i <= maxRentalPrice; i += 10) {
    result.push(i.toString()); // Перетворюємо числа на рядки
  }

  return result;
};
