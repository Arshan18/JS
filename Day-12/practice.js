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

simulateMultipleTasks();
