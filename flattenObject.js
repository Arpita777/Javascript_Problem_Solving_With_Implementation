/*
Implement a function flattenObject(obj) that converts a deeply nested object into a single-level object.

Nested keys should be represented using dot notation.
*/

const flattenObj = (obj) => {
    const result = {};
    const helper = (obj, res) => {
        for(let key in obj){
            if(obj[key] !== null && typeof obj[key] === 'object'){
                helper(obj[key],res+key+".");
            }
            else{
                result[res+key] = obj[key];
            }
            
        }
    }
    helper(obj,"");
    return result;
}
const obj = {
  user: {
    name: "John",
    address: {
      city: "Mumbai"
    }
  }
};
const obj2 = {
  users: [
    {
      name: "John"
    }
  ]
}
console.log(flattenObj(obj2))

/*
Output for obj1:
{
  "user.name": "John",
  "user.address.city": "Mumbai"
}

Output for obj2:
{ 'users.0.name': 'John' }
*/