/*
Implement a function unflattenObject(obj) that converts a flattened object with dot-separated keys back into a nested object structure.
*/

const unflatten = (obj) => {
    let result = {};
    for(let key in obj){
        let keys = key.split(".");
        let current = result;
        for(let i=0;i<keys.length-1;i++){
            const k = keys[i];
            current[k] ??= {};
            current = current[k];
        }
        current[keys[keys.length-1]] = obj[key];
    }
    return result;
}
const obj = {
  "user.name": "John",
  "user.address.city": "Mumbai"
};
console.log(unflatten(obj))

/* 
Output:
{
  user: {
    name: "John",
    address: {
      city: "Mumbai"
    }
  }
}
*/