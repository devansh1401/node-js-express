// => Read Evaluate Print Loop
// type "node" in terminal and a Node console will turn up nd u can use it for creaing function, persorm simple calc and many more.
const repl = require("repl");

const local = repl.start("$"); // Now, run "node repl.js" , and console wil start.

local.on('exit', () =>  { // "local" is an event emitter
    console.log("exiting this shit!!"); 
    process.exit(); // to exit the command line 
})
/* "process.exit()" to forcefully terminate a Node.js process is a bit of a blunt approach and should be used with caution. 
    It immediately stops the process, and any asynchronous operations or cleanup tasks may not have a chance to complete. */