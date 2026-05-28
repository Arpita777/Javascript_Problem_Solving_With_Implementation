/* Implement a function once, that takes
a func (fn) as param and returns a new function .
The new function allows fn to be executable only once
no matter how many times its called

Your implementation should handle, sync, async, retry on failure
*/

function once(fn){
    let called = false;
    let result;
    return function(...args){
        if(called){
            return result;
        }
        called = true;
        try{
          result = fn.apply(this,args);
          if(result instanceof Promise){
            result = result.catch((err)=> {
                called = false;
                throw err;
            })
          }
          return result;
        }
        catch(err){
            called = false;
            throw err;
        }
    }
}

function add(a, b) {
    console.log("called");
    return a + b;
}
const onceAdd = once(add);
console.log(onceAdd(2,3));
console.log(onceAdd(10,3));