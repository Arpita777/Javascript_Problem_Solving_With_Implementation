function myNew(Constructor, ...args) {
    if (typeof Constructor !== "function") {
        throw new TypeError("Constructor must be a function");
    }

    const obj = Object.create(Constructor.prototype);

    const result = Constructor.apply(obj, args);

    return (result !== null &&
            (typeof result === "object" || typeof result === "function"))
        ? result
        : obj;
}

/*
function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log(this.name);
};

const p = myNew(Person, "John");
*/