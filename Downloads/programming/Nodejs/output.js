// // Printing a formatted string using placeholders
// // %s: String, %d: Decimal, %i: Integer, %o: Object
// console.log("My name is %s and my age is %d", "Devansh", 18);

// // Clearing the console
// console.clear();

// // Using console.count to count occurrences of a label
// console.count("hiee");  // Output: hiee: 1
// console.count("hiee");  // Output: hiee: 2

// console.count("yooo");  // Output: yooo: 1

// // Resetting the count for a label using console.countReset
// console.countReset();

// // Now, if we use the same label again, the count starts from 1
// console.count("hiee");  // Output: hiee: 1

// // ------------------------------------------------------------------------------------

// // Define a function func1 that logs a stack trace
// const func1 = () => {
//     // Log a stack trace to the console
//     console.trace();
//   };
  
//   // Define a function func2 that calls func1
//   const func2 = () => {
//     // Call func1
//     func1();
//   };
  
//   // Call func2 to trigger the stack trace
//   func2();
//   // console.trace() is a tool for developers to gain insights into the function call hierarchy and diagnose issues in their code. 
//   // It's particularly useful when trying to understand the context of a function call and how it fits into the overall program execution.

// // ------------------------------------------------------------------------------------

//  // Define a function named sum that logs the sum of 2 and 4 to the console
// const sum = () => {
//     // Log the sum of 2 and 4 to the console using a template literal
//     console.log(`The sum is ${2 + 4}`);
//   };
//  const multip = () => console.log(`the multiplication is ${2*4}`);

// // Define a function named measuretime that measures the execution time of sum and multip functions
// const measuretime = () => {
//     // Start measuring the execution time for the sum function
//     console.time("sum()");
//     // Call the sum function
//     sum();
//     // Stop measuring the execution time for the sum function
//     console.timeEnd("sum()");

//     console.time("multip()");
//     multip();
//     console.timeEnd("multip()");
//  };
//  measuretime();
// // adding execution time 

//  // ------------------------------------------------------------------------------------
// Require the "progress" module to use its ProgressBar feature
const ProgressBar = require("progress");

// Create a new ProgressBar instance with a specific format and total
const bar = new ProgressBar("Downloading [:bar] :rate/bps :percent :etas", {
  total: 20, // Set the total number of ticks (progress steps)
});

// Set up an interval timer to update the progress bar
const timer = setInterval(() => {
  // Increment the progress bar by one tick
  bar.tick();

  // Check if the progress bar is complete
  if (bar.complete) {
    // If complete, clear the interval timer
    clearInterval(timer);
  }
}, 100); // Set the interval time in milliseconds (100ms in this case)


// checkout 'chalk' to colour the output 