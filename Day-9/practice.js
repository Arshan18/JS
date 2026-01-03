/*
1.Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
*/

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `Animal speaking`;
};

class Dog extends Animal {
  constructor(type) {
    super(type);
  }
  bark() {
    return `Woof!`;
  }
}

let myDog = new Dog("Mammal");
// console.log(myDog.type);
// console.log(myDog.speak());
// console.log(myDog.bark());

/*
2.
Task-2
Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name] and i am [age] years old.".
*/
/*
Task-2
Modify the Person constructor to throw an error if the age is not a positive number.
*/
function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }

  this.name = name;
  this.age = age;

  this.greet = function () {
    return `Hello, my name is ${this.name} and i am ${this.age} years old.`;
  };
}

let person1 = new Person("Arshan", 20);
// console.log(person1.greet());

/*
3.
Task-1.
Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

Task-2
Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".

Task-3
Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
*/

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }
}

let myCar = new Car("BMW", "M4");
console.log(myCar);
