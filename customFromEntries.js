/*Implement a function customFromEntries that behaves like Object.fromEntries() */

function customFromEntries(entries){
    const result = {};
    for(let [key,val] of entries){
        result[key] = val;
    }
    return result;
}
const result = customFromEntries([
  ["a", 1],
  ["b", 2]
]);
console.log(result);