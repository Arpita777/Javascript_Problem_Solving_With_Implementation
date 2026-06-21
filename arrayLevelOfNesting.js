/*
Given an array. Find the level of nesting
*/
const arr = [1,[2,[3,[4]]]];

const findLevelOfNesting = (arr) => {
  let level = 0;
 
  for(let item of arr){
    if(Array.isArray(item)){
          level = Math.max(
                  level,
                  1 + findLevelOfNesting(item)
                )
    }
  }
  return level;
}
const level = findLevelOfNesting(arr);
console.log(level);
const result = arr.flat(level);
console.log(result)