Array.prototype.customReduce = function(callback,initialValue){
  
    if (typeof callback !== "function") {
      throw new TypeError("callback is not a function");
    }
    const arr = this;
    let startIndex, accValue;
    if(arguments.length > 1){
        startIndex = 0;
        accValue = initialValue;
    }
    else{
        if(arr.length === 0){
              throw new TypeError(
          "Reduce of empty array with no initial value"
        );
        }
        startIndex = 1;
        accValue = arr[0];
    }
    for(let i=startIndex;i<arr.length;i++){
        if(i in arr){
          accValue = callback(accValue,arr[i],i,arr);
        }
    }
    return accValue;
  
  }