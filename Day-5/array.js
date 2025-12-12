/*
1. Declare an array named `teaFlavors` that contain the strings `"green tea"`,`"black tea"`, and `"oolong tea"`.
   Access the first element of the array and store it in a variable name `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
console.log(firstTea);

/*
2. Declare an array named  `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`.
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];
console.log(favoriteCity);

/*
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala tea"`.
    Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala tea"];

teaTypes[1] = "jasmine tea";
console.log(teaTypes);

/*
4. Declare an  array named `citiesVisited` containing `"Mumbai"`, `"Lord"`, and `"Sydney"`.
  Add `"Berlin"` to the array using the push method.
*/

let citiesVisited = ["Mumbai", "Lord", "Sydney"];

citiesVisited.push("Berlin");
console.log(citiesVisited);

/*
5. You have an Array named `teaOrders` with `"Chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`.
  Remove the last element of the array using the `pop` method anbd store it in a variable name `lastOrder`.
*/

let teaOrders = ["Chai", "Iced tea", "Matcha", "Earl tea"];

let lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

/*
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"Chai"`.
  Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "Chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas);

/*
7. You hvae an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy  of this array name `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
console.log(hardCopyCities);

/*
8. You have two arrays: `europeanCities` conatining `"Paris"`, and `"Rome"`, and `asianCities` containing `"Tokyo"`, and  `"Mumbai"`.
  Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Mumbai"];

let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

/*
9. You have an array named `teaMenu` containing `"masala tea"`, `"oolong tea"`, `"green tea"`, and `"earl  tea"`.
  Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala tea", "oolong tea", "green tea", "real tea"];
let menuLength = teaMenu.length;
console.log(menuLength);

/*
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Mumbai"`.
  Check if `"London"`, is in the array and store thee result in a variable named  `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Mumbai"];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
