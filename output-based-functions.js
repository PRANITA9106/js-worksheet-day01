// Create a higher-order function that takes a callback (anonymous or arrow function) and applies it to double each value in an array.

// Input: [1, 2, 3]

// Expected Output: [2, 4, 6]
const double=(arr)=>{
    for(let i=0;i<arr.length;i++){
        arr[i]*=2
    }
    console.log(arr)
}
let arr=[1, 2, 3]
double(arr)
