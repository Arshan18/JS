/*

Primitive Datatypes

String
Number
Boolean
Big int

Undefined
Null
Symbol

Non-Primitive

Object
Array 
Function

*/

// Numbers

let num1 = 0xf;
console.log(num1);

let num = 100000;
console.log(num);

let num2 = -110 / 0;
console.log(num2);

console.log(Number.MIN_VALUE);

number = 12343029898764512345678n;
console.log(number);

// String

let user = 'Arshan \n"Attar"';
console.log(user);

let firstName = "Arshan";
let lastName = "Attar";
let Name = firstName + " " + lastName;

console.log(Name);

// Boolean

let bool = 5 > 6;
console.log(bool);
console.log(typeof bool);

/*
Write a function named `makeTea` that takes one parameter, `typeofTea`, and returns a string like `"Making green tea"` when called with `"green tea"`.
Stores the result in a variable name `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
console.log(teaOrder);

/*
Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable name 'sum'.
*/

let sum = 0;
let i = 1;

while (i <= 5) {
  sum = sum += i;
  i++;
}
console.log(sum);

/*
Write a 'while' loop that counts down fromm 5 to 1 and stores the numbers in an array name 'countdown'.
*/

let countdown = [];
let j = 5;

while (j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown);
