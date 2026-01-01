function Person(name, age) {
  this.name = name;
  this.age = age;
}

let myInfo = new Person("Arshan", 20);
console.log(myInfo);

function Car(company, model, launchDate) {
  this.company = company;
  this.model = model;
  this.launchDate = launchDate;
}

let myCar = new Car("BMW", "M4", "May 2024");
console.log(myCar);

let myNewCar = new Car("Mahindra", "TharRoxx", "Aug 2024");
console.log(myNewCar);

function Gun(type) {
  this.type = type;
  this.describe = function () {
    return `This is the most loved gun in bgmi ${this.type}`;
  };
}

let lovedGun = new Gun("M416");
console.log(lovedGun.describe());

function Bird(species) {
  this.species = species;
}

Bird.prototype.describe = function () {
  return `${this.species} makes a sound`;
};

let myBird = new Bird("Parrot");
console.log(myBird.describe());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with the new keyword");
  }
  this.name = name;
}

let tea = new Drink("Tea");

let coffee = Drink("coffee");
