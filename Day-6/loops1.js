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

/*
5.Use a `for-in` loop to loop through an object cataining city populationns.
 Stop the loop when the polution of `"Berlin"` is found and store all previos cities populationn in a new object named `cityPopulation`.

 let citiesPopulation = {
 "London": 8900000,
 "New York": 8400000,
 "Paris": 2200000,
 "Berlin": 3500000,
 };

*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewPopulations = {};

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
}
// console.log(cityNewPopulations);

/*
6. Use a `for-in` loop to loop through an object containing city populations.
  Skip any  city with a population below 3 million and store the rest in a new object named `largeCities`.

  let worldCities = {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000
  };

*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const worldCity in worldCities) {
  if (worldCities[worldCity] < 3000000) {
    continue;
  }
  largeCities[worldCity] = worldCities[worldCity];
}
// console.log(largeCities);

/*
7. Write a `forEach` loop that iterates through the array `["earl  grey", "green tea", "chai", "oolong tea"]`.
  Stop loop when `"chai"` is found, and store all previous tea types in an array named `availabeTeas`.
*/

let teaType = ["earl  grey", "green tea", "chai", "oolong tea"];
let availabeTeas = [];

teaType.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availabeTeas.push(tea);
});
// console.log(availabeTeas);

/*
8. Write a `foorEach` loop  that iterates through tha array `["Berlin", "Tokyo", "Sydney", "Paris"]`.
  Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

/*
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`.
  Skip the value `7` and multiply the rest by 2. Storee the results in a new array amed `doubledNumbers`.
*/

let number = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < number.length; i++) {
  if (number[i] === 7) {
    continue;
  }
  doubledNumbers.push(number[i] * 2);
}
console.log(doubledNumbers);

/* 
10. Write a `for-of` loop to iterates through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`.
  and stop when the lenght of the current tea name is greater than 10.
  Store the teas iterated over in an array named `shortTeas`.
*/

let teasCollection = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];
let shortTeas = [];

for (const tea of teasCollection) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
