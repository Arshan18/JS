// Checking if a number is greater than another number:

let num1 = 18;
let num2 = 45;

if (num1 > num2) {
  console.log("num1 is greater than num2 ");
} else {
  console.log("num1 is smaller than num2");
}

// Checking if the string is equal to another string:

let userName1 = "Ash";
let userName2 = "Ash";

if (userName1 == userName2) {
  console.log("String is equal to another string");
} else {
  console.log("String are not equal");
}

// Checking if the variable is a number or not:

let var1 = "18";
if (typeof var1 === "number") {
  console.log("Yess, this is the number");
} else {
  console.log("No,that is not a number");
}

// Checking if a boolean vakue is true or false:

let isTeaReady = true;
if (isTeaReady) {
  console.log("Tea is ready");
} else {
  console.log("No, Tea is not ready");
}

// Checking if an array is empty or not:

let arr = ["arr1"];
console.log(arr.length);

if (arr.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
