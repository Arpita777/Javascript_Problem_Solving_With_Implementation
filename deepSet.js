function deepSet(obj,path,val){
    let keys = path.split(".");
    let current = obj;
    for(let i = 0; i<keys.length-1; i++){
        let key = keys[i];
        current[key] ??= {}
        current = current[key];
    }
    key = keys[keys.length-1];
    current[key] = val;
    return obj;
  }
  const obj = {};
  
  const res = deepSet(
    obj,
    "address.city",
    "Mumbai"
  );
  console.log(res);