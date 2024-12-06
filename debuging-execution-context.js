// Error-Based Debugging:

// Identify why the following function outputs undefined and fix it:

console.log(name);
var name = "JavaScript";

//corrected code -->sol: global scope variables when accessed before initialisation hold undefined value


var name = "JavaScript";
console.log(name);
