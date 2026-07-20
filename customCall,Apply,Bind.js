Function.prototype.customCall = function(obj,...args){
   obj = obj == null ? globalThis : Object(obj);
   const uniqueKey = Symbol();
   obj[uniqueKey] = this;
   const result = obj[uniqueKey](...args);
   delete obj[uniqueKey];
   return result;
}

Function.prototype.customApply = function(obj,args=[]){
    obj = obj == null ? globalThis : Object(obj);
    const uniqueKey = Symbol();
    obj[uniqueKey] = this;
    const result = obj[uniqueKey](...args);
    delete obj[uniqueKey];
    return result;
}

Function.prototype.customBind = function(obj,...bindArgs){
    const originalFunc = this;
    return function(...callArgs){
        return originalFunc.customCall(obj,...bindArgs,...callArgs);
    }
}


