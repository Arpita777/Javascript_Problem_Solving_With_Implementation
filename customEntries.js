/*Implement a function customEntries that behaves like Object.entries() */

function customEntries(obj){
    const result = [];
    for(let key in obj){
        if(Object.hasOwn(obj,key)){
            const temp = [key,obj[key]];
            result.push(temp);
        }
    }
    return result;
}
const res = customEntries({
  a: 1,
  b: 2
});
console.log(res);