// Error Object
const error = new Error("This is a standard error object");

// Log the message and stack trace of the standard error object
console.log("Standard Error Message:", error.message);
console.log("Standard Error Stack:", error.stack);

// Uncomment the following line to throw a standard error object
// throw new Error("I'm a standard error object!!");

// Importing CustomError from the CustomError.js file
const { CustomError } = require("./CustomError");

// Using try-catch to handle errors
try {
    // Uncomment the following line to throw a new instance of CustomError
    // throw new CustomError("This is a new custom error");

    // Code inside this block will be executed if no error is thrown
    console.log("This code will not be executed if an error is thrown.");
} catch (customError) {
    // Catching and handling the CustomError
    console.error("Caught CustomError:", customError.message);
    console.error("CustomError Stack Trace:", customError.stack);
} finally {
    // This block will be executed regardless of whether an error occurred or not
    console.log("Finally block: This code always executes.");
}

// Set up a global uncaught exception handler
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error.message);
    console.error('Stack Trace:', error.stack);
    // You might perform additional cleanup or logging here
    process.exit(1); // Exit the process with a non-zero status code
});