console.log("this is devansh kukreja");
console.log("this is devansh kukreja");
console.log("this is devansh kukreja");
process.exitCode = 1;
/*
process.exitCode = 1:

This sets the exit code but doesn't immediately terminate the Node.js process. It allows the program to continue executing until it naturally reaches its end.
This is useful if you want to signal an error condition but still want to let the program finish any asynchronous operations or cleanup tasks before exiting.

*/