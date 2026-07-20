function once(fn){
    if(typeof(fn) !== 'function'){
        throw new Error('fn is not a function')
    }
    let called = false;
    let result;
    return function(...args){
        if(!called){
            result = fn.apply(this,args);
            called = true;
            
        }
        return result;
    }
}

function memoize(fn){
    if(typeof(fn) !== "function"){
        throw new Error('fn not a function');
    }
    const map = new Map();
    return function(...args){
        let key = JSON.stringify(args)
        if(!map.has(key)){
            let result = fn.apply(this,args);
            map.set(key,result);
        }
        return map.get(key);
    }
}

function debounce(fn,delay){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(()=> {
            fn.apply(this,args)
        },delay)
    }
}

/* leading edge throttling */
function throttle(fn, delay) {
    let isThrottled = false;

    return function (...args) {

        if (isThrottled) {
            return;
        }

        fn.apply(this,args)

        isThrottled = true;

        setTimeout(()=>{
            isThrottled = false;
        },delay)

    };
}

/* trailing edge throttling */
function throttle(fn, delay) {
    let timer = null;
    let lastArgs;
    let lastThis;

    return function (...args) {
        lastArgs = args;
        lastThis = this;

        if (timer) return;

        timer = setTimeout(() => {
            fn.apply(lastThis,lastArgs);
            lastArgs = null;
            lastThis = null;
            timer = null;
        }, delay);
    };

}

/*
So, case 1 (without lastArgs) 
every call creates a new EC. timer callback closes over EC1 args
when further call happens its not updated. even though variable name is same 

case2 (with lastArgs) 
here lastArgs is created in outer scope. i.e outside the returned function. 
its a shared variable for all ECs. 
new timer is not created for further calls, but the lastArgs gets updated (because its shared, unlike args) 
when final timer callbacks executes. it reads the latest value of lastArgs (as it is shared for all calls)
*/

/* both leading and trailing edge throttling */


function compose(...fns){
    return function(...args){
        return fns.reduceRight((acc,fn,index) => {
            if(index === fns.length-1){
                return fn(...acc)
            }
            return fn(acc)
        },args)
    }
}

function pipe(...fns){
    return function(...args){
        return fns.reduce((acc,fn,index) => {
            if(index === 0){
                return fn(...acc)
            }
            return fn(acc)
        },args)
    }
}

//No. of arguments is fixed
function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this,args);
        }
        return function(...nextArgs){
            return curried.apply(this,[...args,...nextArgs]);
        }
    }
}

/*
function add(a, b, c) {
    return a + b + c;
}

const curried = curry(add);

curried(1)(2)(3);      // 6
curried(1,2)(3);       // 6
curried(1)(2,3);       // 6
curried(1,2,3);        // 6

Every recursive call creates a new execution context with its own args variable.
By writing [...args, ...nextArgs], I'm creating a new array and passing it into that 
new execution context. 
As a result, the returned function closes over a new args variable 
that is independent of the previous one.

If I mutate the existing array using push(),
then all closures continue to reference the same array object. 
That means earlier partially applied functions no longer preserve their original state, 
because the shared array keeps changing.
*/

//Infinite arguments
//sum(1,2)(3)(4,5)();sum(1)(2)(3)(4)()
function curry2(fn){
    return function curried(...args){
        return function(...nextArgs){
            if(nextArgs.length == 0){
                return fn.apply(this,args);
            }
          return curried.apply(this,[...args,...nextArgs]);
            
        }
    }
}

function helper(...args){
    return args.reduce((acc,val) => acc + val,0);
}
const sum = curry2(helper);
console.log(sum(1,2)(3)(4,5)())


//add(1)(2)(3) + 5
function add(...args){
    let total = args.reduce((acc,value) => acc+value,0);
    
    function inner(...nextArgs){
        total = total + nextArgs.reduce((acc,value) => acc+value,0);
        return inner;
    }
    inner.valueOf = function(){
        return total
    }
    return inner;
}