/* Polyfill for Object.create() */

Object.myCreate = function(proto, propertiesObject){
    const result = {};
    Object.setPrototypeOf(result,proto);
    if(propertiesObject){
        Object.defineProperties(result,propertiesObject)
    }
    return result;
}

const person = {
  greet() {
    console.log("Hello");
  }
};

const john = Object.myCreate(person);

john.greet();