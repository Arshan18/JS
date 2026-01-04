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

  move() {
    return `The vehicle is moving`;
  }

  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }

  move() {
    return `The car is driving`;
  }
}

let myCar = new Car("BMW", "M4");
let randomobj = { Make: "Test", Model: "Obj" };
// console.log(myCar.getDetails());
// console.log(myCar.startEngine());
// console.log(myCar.move());
// console.log(Vehicle.isVehicle(myCar));
// console.log(Vehicle.isVehicle(randomobj));

/*
3.
Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
*/

class BankAccount {
  constructor() {
    this._balance = 0;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
    return `The Balance is ${this._balance}.`;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be positive");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient Balance");
    }
    this._balance -= amount;
    return `The Balance is ${this._balance}.`;
  }
}

let amount = new BankAccount();
console.log(amount.deposit(1000));
console.log(amount.withdraw(100));
