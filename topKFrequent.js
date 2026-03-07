// Question: https://leetcode.com/problems/top-k-frequent-elements/description/
var topKFrequent = function(nums, k) {
    var map = new Map();
    for(let i =0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }
        else{
            let count = map.get(nums[i]);
            map.set(nums[i],count + 1);
        }
    }
    let sortedArray = [...map.entries()].sort((a,b) => b[1]-a[1]);
    let result = [];
    for (let i=0;i<k;i++){
       result.push(sortedArray[i][0]);
    }
    return result;

};
