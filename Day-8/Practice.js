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
