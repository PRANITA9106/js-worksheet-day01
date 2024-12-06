
//Write a program that accepts inputs of various types (e.g., number, string) and converts them into numbers before calculating their sum.
function sum(arr){
   let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=+arr[i]
    }
    console.log(sum)
}
arr=["10", 20, "30"]
sum(arr)
