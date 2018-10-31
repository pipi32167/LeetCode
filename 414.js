

/**
 * @param {number[]} nums
 * @param {number} min
 * @return {number}
 */
var max = function(nums, u) {
  var res = -Math.pow(2, 32)
  for(var i = 0; i < nums.length; i++) {
    if (nums[i] < u && res < nums[i]) {
      res = nums[i]
    }
  }
  return res
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  
  var MAX = Math.pow(2, 32)
  var MIN = -MAX
  var res = MAX
  var count = 3
  for(var i = 0; i < count; i++) {
    res = max(nums, res)
    if (res === MIN) {
      break
    }
  }
  if (res === MIN) {
    res = max(nums, MAX)
  }
  return res
};

console.log(thirdMax([1,2,3]) === 1);
console.log(thirdMax([1,2]) === 2);
console.log(thirdMax([2, 2, 3, 1]) === 1);
console.log(thirdMax([1,2,-2147483648]) === -2147483648);
