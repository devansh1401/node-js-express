// Require the "readline" module
const readline = require("readline");

// Create an interface for reading from the standard input and writing to the standard output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Ask the user a question and wait for their response
rl.question(`What is your name? `, (name) => {
    // Log a message using the provided input
    console.log(`Hi ${name}`);

    // Close the readline interface to end the program
    rl.close();
});

// checkout "prompt-sync" to get rid of this name line and to make is shorter