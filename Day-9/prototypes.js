let computer = { cpu: 4 };
let hp = {
  screen: "HD",
  __proto__: computer,
};
let mechanic = {};

console.log(`hp`, hp.__proto__);

let car = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, car);

console.log(`tesla`, Object.getPrototypeOf(tesla));
