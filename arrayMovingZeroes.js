const arr = [0,0,1,3,12];

function moveZeros(arr){
let j = 0;
for(let i=0;i<arr.length;i++){
  if(arr[i] !=0){
    [arr[i],arr[j]] = [arr[j],arr[i]];
    j++;
  }
 
}
 return arr;
}
const res = moveZeros(arr);
console.log(res);