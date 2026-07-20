function myInstanceOf(obj, Constructor) {
    if (obj == null) {
        return false;
    }

    let proto = Object.getPrototypeOf(obj);

    while (proto !== null) {
        if (proto === Constructor.prototype) {
            return true;
        }

        proto = Object.getPrototypeOf(proto);
    }

    return false;
}

/**
 * function Person(){}

   const p = new Person();
   myInstanceOf(p, Person);
 */