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

console.log(limitedGreet("Arshan"));
console.log(limitedGreet("Arshan"));

setTimeout(() => {
  console.log(limitedGreet("Arshan"));
}, 3100);
