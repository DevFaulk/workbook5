'use strict';

let products = [
  { prodId: 2, name: 'Notepads (12 pk)', price: 12.29 },
  { prodId: 12, name: 'Black Pens (12 pk)', price: 5.7 },
  { prodId: 22, name: 'Stapler', price: 12.79 },
];

// Product sort by name
products.sort((productA, productB) => {
  if (productA.name < productB.name) {
    return -1;
  } else if (productA.name == productB.name) {
    return 0;
  } else {
    return 1;
  }
});
console.log(products);
// Product sort by price
products.sort((productA, productB) => productB.price - productA.price);
console.log(products);
