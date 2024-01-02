 // Define a function named sum that logs the sum of 2 and 4 to the console
const sum = () => {
    // Log the sum of 2 and 4 to the console using a template literal
    console.log(`The sum is ${2 + 4}`);
  };
 const multip = () => console.log(`the multiplication is ${2*4}`);

// Define a function named measuretime that measures the execution time of sum and multip functions
const measuretime = () => {
    // Start measuring the execution time for the sum function
    console.time("sum()");
    // Call the sum function
    sum();
    // Stop measuring the execution time for the sum function
    console.timeEnd("sum()");

    console.time("multip()");
    multip();
    console.timeEnd("multip()");
 };
 measuretime();
// adding execution time 

 // 