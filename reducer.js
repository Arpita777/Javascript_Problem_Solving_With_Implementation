/* 1. map using reduce */
const nums = [2,3,5,7,8];
const arr = nums.map((currentValue,currentIndex,array) => {
    return currentValue * 2
});

const arr2 = nums.reduce((acc,currentValue,currentIndex,array) => {
    acc.push(currentValue * 2);
    return acc;
},[]);

console.log(arr);
console.log(arr2);

/* 2. filter using reduce */
const nums = [2,3,5,7,8];
const arr = nums.filter((currentValue,currentIndex,array) => {
    return currentValue % 2 === 0
});

const arr2 = nums.reduce((acc,currentValue,currentIndex,array) => {
    if(currentValue % 2 === 0){
         acc.push(currentValue);
        
    }
     return acc;
},[]);

console.log(arr);
console.log(arr2);

/* 3. groupBy using reduce */
const items = [
    {name: 'Apple', category: 'fruit'},
    {name: 'Pen', category: 'stationary'},
    {name: 'Rice', category: 'grain'},
    {name: 'Bananna', category: 'fruit'},
    {name: 'Kiwi', category: 'fruit'}
    ];
const arr = Object.groupBy(items, item => item.category);

const arr2 = items.reduce((acc,currentValue,currentIndex,array) => {
   acc[currentValue.category] ??= [];
   acc[currentValue.category].push(currentValue);
   return acc;
},{});

console.log(arr);
console.log(arr2);