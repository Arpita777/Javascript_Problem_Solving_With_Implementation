
const flatten = (arr) => {
    let result = [];
    const flattenArray = (arr, result) => {
      for (let item of arr){
         if(Array.isArray(item)){
            flattenArray(item,result);
         }
         else{
            result.push(item);
         }
      }
   }
   flattenArray(arr,result)
   return result;
}


const res = flatten([1,[2,[3,4],5,[]],6]);
console.log(res);