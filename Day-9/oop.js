let car = {
  company: "Toyota",
  model: "Camry",
  launch: 2020,
  start: function () {
    return `${this.company} car got started in ${this.launch}`;
  },
};

// console.log(car.start());

function School(name, scheme) {
  this.name = name;
  this.scheme = scheme;
}

let mySchool = new School("MGVD", "Goverment");
// console.log(mySchool);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} make a sound.`;
};

let myAnimal = new Animal("Cat");
// console.log(myAnimal.speak());

Array.prototype.Arshan = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.Arshan());
let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.Arshan());

class Cricket {
  constructor(format, best) {
    this.format = format;
    this.best = best;
  }
  start() {
    return `In the format of ${this.format} cricket ${this.best} is best for me.`;
  }
}

// Inheritance
class Students extends Cricket {
  learn() {
    return `Students learns form ${this.best}.`;
  }
}

let newStudent = new Students("Test", "Virat Kohli");
// console.log(newStudent.start());
// console.log(newStudent.learn());

let sport = new Cricket("ODI", "Virat Kohli");
// console.log(sport.start());

// Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
account.deposit(500);
// console.log(account.getBalance());

// Abstraction

class CoffeeMachine {
  start() {
    // call db
    return `Starting the machine...`;
  }

  brewCoffee() {
    // abc
    return `Brewing the coffee`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} + ${msg2}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin {
  fly() {
    return `Penguin can't fly`;
  }
}

let myBird = new Bird();
let myPenguin = new Penguin();
// console.log(myBird.fly());
// console.log(myPenguin.fly());

// Static Method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let basicCalc = new Calculator(1, 8);
// console.log(basicCalc.add());
// console.log(Calculator.add(1, 8));

// Getters and Setters

class Employee {
  #salary;

  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }

    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see the salary.`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Arshan", 50000);
// console.log(emp._salary);
emp.salary = 69000;

const Person = {
  name: "Arshan",
  age: 20,
  hobby: ["Cricket", "Gaming"],

  get headline() {
    return `${this.name} is a ${this.age} years old boy and is mainly hobby in ${this.hobby[1]} `;
  },

  set primaryInterest(val) {
    console.log("Setting Primary interest...");
    this.hobby.unshift(val);
  },
};

console.log(Person.headline);
Person.primaryInterest = "WWE";
console.log(Person.headline);
