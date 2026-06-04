/*Implement a function customAssign that behaves like Object.assign() */

function customAssign(target, ...sources) {
    // Your implementation
    if(target == null){
        throw new TypeError("Invalid target");
    }
    for(let item of sources){
        if(item == null){
            continue;
        }
        for(let [key,value] of Object.entries(item)){
           target[key] = value;
        }
    }
    return target;
}

const result = customAssign({a:'1'},{a:'2',b:'3'},{c:'5'});
console.log(result);