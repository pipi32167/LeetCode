/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let dp1 = new Array(nums.length).fill(0)
  let dp2 = new Array(nums.length).fill(0)
  let prod = 1
  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i]
    dp1[i] = prod
  }
  prod = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    prod *= nums[i]
    dp2[i] = prod
  }

  let result = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      result[i] *= dp1[i - 1]
    }
    if (i < nums.length - 1) {
      result[i] *= dp2[i + 1]
    }
  }

  // console.log(result);
  return result
};

console.log(productExceptSelf([1,2,3,4]).join() === [24,12,8,6].join());
