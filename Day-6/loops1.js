/*
1. Write a `for` loop that loops through the array `["green tea", "balck tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
  Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let teas = ["green tea", "balck tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

/*
2. Write a `for` loop through the array `["London", "New York","Paris", "Berlin"]` and skips `"Paris"`.
  Store the other cities in a new array named visitedCities.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
  if (cities[j] === "Paris" || cities[j] === "paris") {
    continue;
  }
  visitedCities.push(cities[j]);
}
// console.log(visitedCities);

/*
3. Use a `for-of` loop to iterate through thee array `[1, 2, 3, 4, 5]` and stop when the number `4` is found . 
  Store the number before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

/*
4. Write a `for-of` loop ti iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skips `"herbal tea"`.
  Stores the  other teas in the array named `prefferedTeas`.
*/

let teasList = ["chai", "green tea", "herbal tea", "black tea"];
let prefferedTeas = [];

for (const skips of teasList) {
  if (skips === "herbal tea") {
    continue;
  }
  prefferedTeas.push(skips);
}
// console.log(prefferedTeas);
