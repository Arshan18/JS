"use strict"; //treat all JS code as newer version

// String

let name = "Arshan";
console.log("My name is " + name);
console.log("Data Type is " + typeof name);

// Number

let num = 18;
console.log("Data type is " + typeof num);
console.log("The NUmber is " + num);

// Boolean

let x = 20 > 10;
console.log(x);
console.log("Data Type is " + typeof x);

// Undefined - If a variable is defined but the value is not assigned, then the value of the variable will be undefined.

let gender;
console.log(gender);
console.log("Data Type is " + typeof gender);

// Null - null is a special value that represent empty or unknown value.

let num1 = null;
console.log(num1); // In JS null is equal to undefined.

// Object - An objct is a collection of an properties, where each property is defined as a key-value pair.

let person = {
  firstName: "Arshan",
  lastName: "Attar",
  age: 20,
};

console.log(person);
console.log(typeof person);

// Array - Arrays are a type of object that stores a collection of values.

let number = [1, 2, 3, 4, 5];
console.log(number);
console.log(typeof number);
