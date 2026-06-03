/* Write a function that splits an array into chunks (subarrays) of a given size n. If the array cannot be split evenly, the final chunk should contain the remaining elements.*/

function chunkArray(arr, n) {
    if(n >= arr.length){
        return arr;
    }
    let result = [];
    let chunckArr = [];
    for(let i=0;i<arr.length;i++){
        chunckArr.push(arr[i]);
        if(chunckArr.length === n){
            result.push(chunckArr);
            chunckArr = [];
        }
    }
    if(chunckArr.length){
        result.push(chunckArr);
    }
    return result;
}

const ans = chunkArray([1, 2, 3,4,5,6,7,8], 2);
console.log(ans);