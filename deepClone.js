function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if(Object.hasOwn(obj,key)){
            clone[key] = deepClone(obj[key])
        }
    }
    return clone;
}
/* For Circular reference */
function deepClone(obj, map = new WeakMap()){
    if(obj === null || typeof obj === 'object'){
        return obj;
    }
    
    if(map.has(obj)){
        return map.get(obj);
    }
    
    const clone = Array.isArray(obj) ? [] : {};
    map.set(obj,clone);
    for(let key in obj){
        if(Object.hasOwn(obj,key)){
            clone[key] = deepClone(obj[key],map)
        }
    }
    return clone;
    
}

/* 
- To support more built-in types go for structuredClone() 
- We are using weak map because it does not prevent garbage collection of objects used as keys
- hence avoiding potential memory leaks

*/