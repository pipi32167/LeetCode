/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let cnt = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        cnt++
      }
    }
  }
  return cnt
};

let nums = [1,2,3,1,1,3]
console.log(numIdenticalPairs(nums));
nums = [1,1,1,1]
console.log(numIdenticalPairs(nums));
nums = [1,2,3]
console.log(numIdenticalPairs(nums));