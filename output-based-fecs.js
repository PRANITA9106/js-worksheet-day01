// Output-Based Question:

// Write a program demonstrating the creation of multiple FECs with a recursive function to calculate factorials.

function fact(n){
    if(n==1){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}
var a=5
console.log(fact(a))
