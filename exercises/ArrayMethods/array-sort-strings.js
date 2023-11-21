let cars = ['Saab', 'Volvo', 'BMW'];

cars.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else return 1;
});

console.log(cars);
