function deepFreeze(obj){
    if(obj === null || typeof obj !== "object"){
        return obj;
    }
    Object.freeze(obj);
    for(let key in Object.keys(obj)){
        deepFreeze(obj[key]);
    }
    return obj;
}