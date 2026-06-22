Array.prototype.customMap = function(callback){
    if (typeof callback !== "function") {
        throw new TypeError(
          callback + " is not a function"
        );
    }
    const arr = this;
    const result = new Array(arr.length);
    for(let i=0;i<arr.length;i++){
       if(i in arr)
        result[i] = callback(arr[i],i,arr);
    }
    return result;
  }
  
  const ans = arr.customMap((item) => item*3);
  console.log(ans);