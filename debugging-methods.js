// Error-Based Debugging:

// Fix the issue in the following code where the arrow function fails to access the object’s properties:

// const obj = {
//     value: 42,
//     regular() { return this.value; },
//     arrow: () => this.value,
// };

//corrected code--> sol: switched to regular function 

const obj = {
    name: "JavaScript",
    getName () {return  this.name}
};
console.log(obj.getName()); // Expected Output: "JavaScript"

