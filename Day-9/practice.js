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
console.log(myDog.type);
console.log(myDog.speak());
console.log(myDog.bark());
