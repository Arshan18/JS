// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.Use setTimeout to simulate this behaviour.

function simulateAsyncTask() {
  console.log("Task started");

  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}

// simulateAsyncTask();

// Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.

function simulateMultipleTasks() {
  console.log("Simulating multiple task");

  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000);

  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000);

  setTimeout(() => {
    console.log("Task 3 finished");
  }, 3000);
}

//

// Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    let data = "Fetched data";
    callback(data);
  }, 2000);
}

// fetchDataWithCallback(function (result) {
//   console.log(result);
// });

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.

function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let increment = createCounter();
// console.log(increment());
// console.log(increment());

// Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".

function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return "Rate limit exceeded";
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}

function greet(name) {
  return `Hello ${name}`;
}

const limitedGreet = rateLimiter(greet, 3000);

// console.log(limitedGreet("Arshan"));
// console.log(limitedGreet("Arshan"));

setTimeout(() => {
  // console.log(limitedGreet("Arshan"));
}, 3100);

// Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    } else {
      const result = fn(...args);

      cache[key] = result;

      return result;
    }
  };
}

function add(a, b) {
  // console.log("Calculating");
  return a + b;
}

const memoizedAdd = memoize(add);

// console.log(memoizedAdd(2, 3));
// console.log(memoizedAdd(2, 3));

// Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()

function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  // console.log(this.name + "Makes a sound");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  // console.log(this.name + "is barking");
};

const myDog = new Dog("Rocky");

// myDog.makeSound();

// myDog.bark();

// Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.    Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle

function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  // console.log(this.color + "Color");
};

function Rectangle(color, width, height) {
  Shape.call(this, color);

  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  // return this.width * this.height;
};

const rect = new Rectangle("Green", 10, 6);

// rect.getColor();
// console.log(rect.getArea());

// Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.

const person = {
  name: "Arshan",
  introduce: function () {
    // return `Hello, my name is ${this.name}`;
  },
};

function greet(fn) {
  // console.log(fn());
}
const boundIntroduce = person.introduce.bind(person);

// greet(boundIntroduce);

// Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.

function introduce() {
  // console.log(`Hi, my name is ${this.name}`);
}

const person1 = { name: "Arshan" };
const person2 = { name: "Ash" };

// introduce.call(person1);
// introduce.call(person2);

// Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.

function sum(a, b) {
  // return (a + b) * this.multiplier;
}

const num1 = { multiplier: 2 };
const num2 = { multiplier: 3 };

// console.log(sum.apply(num1, [10, 5]));
// console.log(sum.apply(num2, [10, 5]));

// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second. Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
  // console.log(user);
  // console.log(posts);
}
// fetchAllData();

// Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.

function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolves succesfully");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Error occurred");
    }, 1000);
  });
}

async function handlePromises() {
  try {
    const [success, failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    // console.log(success);
  } catch (error) {
    // console.log(error);
  }
}

// handlePromises();

// Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout exceeded");
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}

const slowPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data Fetched Succesfully");
  }, 3000);
});

fetchWithTimeout(slowPromise, 1000).then((result) => console.log(result));
