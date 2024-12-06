// Output-Based Question:

// Write a function that performs strict string concatenation without unintended coercion.

// Input: ["Hello", 42, true]

// Expected Output: "Hello42true"

arr=["Hello", 42, true]

function strconcat(arr){
    s=''
    for(let i=0;i<arr.length;i++){
        s+=arr[i]
    }
    console.log(s)
}
strconcat(arr)
