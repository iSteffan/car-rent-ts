export const searchFilter = (itemsAmount, searchParam) => {
  if (!searchParam) {
    return false;
  }

  const filteredCars = itemsAmount.filter(car => car.make === searchParam.make);

  const targetRentalPrice = parseInt(
    searchParam.rentalPrice.replace('$', ''),
    10
  );

  const filteredByRentalPrice = filteredCars.filter(
    car => parseInt(car.rentalPrice.replace('$', ''), 10) <= targetRentalPrice
  );

  const filteredByMileage = filteredByRentalPrice.filter(
    car =>
      car.mileage >= parseInt(searchParam.fromMileage, 10) &&
      car.mileage <= parseInt(searchParam.toMileage, 10)
  );

  const sortedCars = filteredByMileage.sort((a, b) => a.mileage - b.mileage);

  return sortedCars;
};
