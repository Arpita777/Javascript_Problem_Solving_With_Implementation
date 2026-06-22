Array.prototype.customFilter = function(callback){
    if (typeof callback !== "function") {
      throw new TypeError(
      callback + " is not a function"
      );
    }
  const arr = this;
  const result = [];
  for(let i=0;i<arr.length;i++){
      if(i in arr){
          if(callback(arr[i],i,arr)){
              result.push(arr[i]);
          }
      }
  }
  return result;
}

const ans = arr.customFilter((item) => item%3 == 0);
console.log(ans);