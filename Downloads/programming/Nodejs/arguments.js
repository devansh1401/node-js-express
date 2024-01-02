// // Print the first command-line argument (excluding Node.js and script paths)
// console.log(process.argv.slice(2)[0]);

// // Iterate over all command-line arguments and print each with its index
// process.argv.forEach((val, index) => { // process.argv.forEach() It prints each argument along with its index in the array.
//     console.log(`${index} : ${val}`);
// });

// Require the minimist library to parse command-line arguments
const minimist = require("minimist");

// Get the command-line arguments starting from index 2 (excluding Node.js and script paths)
const commandLineArguments = process.argv.slice(2);

// Use minimist to parse the command-line arguments into an object
// For example, if the command is "node script.js --name=John", args will be { name: 'John' }
const args = minimist(commandLineArguments);

// Access the "name" property from the parsed arguments
// Note: In the command-line, you would provide the name like "--name=John"
console.log("Name:", args.name);
