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
Perform the following mathematical operations on the provided variables a and b:

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
