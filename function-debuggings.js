//Error-Based Debugging:

// Fix the issue with the following arrow function:

// const multiply = (a, b) => { a * b };
// console.log(multiply(2, 3)); // Expected Output: 6

//corrected code -->sol: return keyword missing

const multiply = (a, b) => { return a * b };
console.log(multiply(2, 3)); 

