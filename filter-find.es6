// filter er kaj holo jekono akta array er modhe theke onek gulo upadan ase shekhan theke shorto moto jekono akta shorto diye jodi ante chai taile amader filter dye korte hoi achara if else er motoi prai filter kaj kore
const number = [2, 4, 56, 7, 87, 8, 4, 4, 54, 5, 45, 4, 94, 5, 4];
const mostBigNumber = number.filter((num) => num > 40);
console.log(mostBigNumber);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];
const allTecnologyName = products.filter((t) => t.price > 1000);
console.log(allTecnologyName);

const blackDimon = products.filter((b) => b.color == "black");
console.log(blackDimon);

const lowPrice = products.filter((l) => l.price < 100);
console.log(lowPrice);

/*
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter((number) => number > 20);
const smallNumbers = numbers.filter((number) => number < 10);
// console.log(smallNumbers);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const expensive = products.filter((product) => product.price > 100);
// console.log(expensive);
const blacks = products.filter((product) => product.color == "pink");
// console.log(blacks);

const whiteItem = products.find((product) => product.color == "black");
console.log(whiteItem);
*/
