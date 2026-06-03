const makeCounter = (initialVal = 0) => {
    const counter = {};
    counter.val = initialVal;
    counter.increment = () => {
        counter.val++;
        return counter.val;
    }
    counter.decrement = () => {
        counter.val--;
        return counter.val;
    }
    counter.reset = () => {
        counter.val = initialVal;
        return counter.val;
    }
    return counter;
}

const counter = makeCounter(5);
console.log(counter.increment()); //6
console.log(counter.increment()); //7
console.log(counter.reset()); //5
console.log(counter.decrement()); //4