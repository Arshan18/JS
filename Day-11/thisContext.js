const person = {
  name: "Arshan",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundName = person.greet.bind({ name: "Ash" });
boundName();
