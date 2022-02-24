// map hoche pray for loop er moto kono ekta jinish ke jodi bar bar korte hoi taile amra map diye korte pari,

const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = (number) => number * 2;

for (const number of numbers) {
  const result = doubleIt(number);
  output2.push(result);
}
// console.log(output2);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map((x) => x * 2);
// console.log(output);

const squares = numbers.map((x) => x * x);
// console.log(squares);

// const numbers1 = [ 1, 2, 3, 4, 5, 6, 7 ];
// const result = numbers1.map( function ( x )
// {
//      return x * x;
// } );
// console.log(result);
/*
const mapping = [4, 6, 8, 9, 10, 11, 12, 13, 14, 15];
const resulting = mapping.map((functonName) => functonName * functonName);
mapping.push(resulting);
// console.log(resulting);

const precticeNum = [3, 5, 7, 6, 4, 6, 68, 4, 3, 65, 9];
const precticeResult = precticeNum.map((x) => x * x);
const precticeResult1 = precticeNum.map((x) => x + x);
const precticeResult2 = precticeNum.map((x) => x - x);
const precticeResult3 = precticeNum.map((x) => x / x);
const precticeResult4 = precticeNum.map((x) => x + 10);
const precticeResult5 = precticeNum.map((x) => x - 10);
const precticeResult6 = precticeNum.map((x) => x * 15);

console.log(
  precticeResult,
  precticeResult1,
  precticeResult2,
  precticeResult3,
  precticeResult4,
  precticeResult5,
  precticeResult6
);
*/

// const a = 23;
// const f1 = ( )=> {
//   console.log("me");
// }

// if(a===b){
  
// };


function sum ( num1, num2 ) {
  const result = num1 + num2;
  return result;
};
const numberDic =(12, 12);