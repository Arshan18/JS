/*
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
*/

function stringToNumber(input) {
  const num = Number(input);

  if (isNaN(num)) {
    return "Not a number";
  }
  return num;
}

console.log(stringToNumber("18"));
console.log(stringToNumber("Arshan"));

/*
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
*/

function flipBoolean(input) {
  return !Boolean(input);
}

console.log(flipBoolean(0));
console.log(flipBoolean(1));

/*
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
*/

function whatAmI(input) {
  const convertedNumber = Number(input);

  if (!isNaN(convertedNumber)) {
    return "I'm a number";
  } else {
    return "I'm a string";
  }
}

console.log(whatAmI("84"));
console.log(whatAmI("Attar"));

/*
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

function isItTruthy(input) {
  if (input) {
    return "It's truthy";
  } else {
    return "It's falsey";
  }
}

console.log(isItTruthy(true));
console.log(isItTruthy(false));

/*
Perform the following mathematical operations on the provided variables a = 18 and b = 24:

1.Add
2.Subtract
3.Multiply
4.Divide
5.Increment
6.Decrement
7.Reminder
*/

const a = 18;
const b = 24;

// Addition of two values

function add() {
  const result = a + b;
  return result;
}

console.log("Add:", add());

// Subtract small value from larger one

function sub() {
  const result = b - a;
  return result;
}

console.log("Sub:", sub());

// Multiply two values

function mul() {
  const result = a * b;
  return result;
}

console.log("Mul:", mul());

// Divide larger value by small

function div() {
  const result = b / a;
  return result;
}

console.log("Div:", div());

// Increase value of a by 1

function Increase() {
  let result = a;
  return (result += 1);
}

console.log("Increment:", Increase());

// Decrease value of b by 1

function Decrease() {
  let result = b;
  return (result -= 1);
}

console.log("Decrement:", Decrease());

// Divide larger value by small to find the reminder

function reminder() {
  const result = b % a;
  return result;
}

console.log("Reminder:", reminder());

// Write a function filterNumbers(arr) that returns only numbers from a mixed array

function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

console.log(filterNumbers([1, "arrshan", 2, "attar"]));

// Write a function reverseArray(arr) that reverses the array

function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 4, 3, 5]));

// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([18, 45, 25, 17]));

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 18]));

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray(["Arshan", [18, 20], ["Attar"], [2005]]));

// Write a function sumOfN(n) that returns the sum of the first n natural numbers

function sumOfN(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfN(12));

// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

function printMultiplicationTable(n) {
  let table = [];

  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}

console.log(printMultiplicationTable(6));

// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("learning"));
