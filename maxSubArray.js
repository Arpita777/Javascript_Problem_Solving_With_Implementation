/* Given array of nums, return contigious subarray that has the largestsum. return the sum value */

function maxSubArray(nums) {
    if (nums.length === 0) {
      return -Infinity;
    }
  
    let currentSum = nums[0];
    let maxSum = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(
        nums[i],
        currentSum + nums[i]
      );
  
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }