/* Implement a function groupBy() that groups
 an array of objects based on a specified property.
 The returned obj , where keys are unique value of specified property.
 and value is array of those objects that contain that key.
 */

const users = [
    {name:'Alice',age: 25},
    {name:'Bob',age: 32},
    {name:'Julie',age: 12},
    {name:'mm',age: 25}
    ];

    /*
    Output:
    {
  '12': [ { name: 'Julie', age: 12 } ],
  '25': [ { name: 'Alice', age: 25 }, { name: 'mm', age: 25 } ],
  '32': [ { name: 'Bob', age: 32 } ]
}
    * */
    
    const getValue = (obj,path) => {
        return path.split(".").reduce((acc,key) => acc?.[key],obj);
    }
    
    const groupBy = (items,prop) => {
        const map = {};
        for(let item of items){
            const key = typeof prop === 'function' ? prop(item) : getValue(item,prop);
           
            map[key] ??= [];
            map[key].push(item);
        }
        return map;
    }
    
    const result = groupBy(users,'age');
    console.log(result)