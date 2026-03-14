// const person = {
//   name: "Arshan",
//   greet() {
//     console.log(`Hi, I am ${this.name}`);
//   },
// };

// person.greet();

// const greetFunction = person.greet;
// greetFunction();

// const boundName = person.greet.bind({ name: "Ash" });
// boundName();

// function that receives another function
function greet(fn) {
  console.log(fn());
}

const person = {
  name: "Arshan",

  introduce() {
    return `Hello, my name is ${this.name}`;
  },
};

// bind ensures 'this' refers to person
const boundIntroduce = person.introduce.bind(person);

// passing function
greet(boundIntroduce);
