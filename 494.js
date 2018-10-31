var go = function (nums, S, i, prefixSum, result) {

  if (i >= nums.length) {

    if (prefixSum === S) {
      result.count++
    }
    return
  }
  
  var num = nums[i]
  go(nums, S, i+1, prefixSum+num, result)
  go(nums, S, i+1, prefixSum-num, result)
}

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  
  var result = { count: 0 }
  go(nums, S, 0, 0, result)
  return result.count
};

var nums = [1, 1, 1, 1, 1], S = 3
console.log(findTargetSumWays(nums, S), 5);
var nums = [25,33,27,23,46,16,10,27,33,2,12,2,29,44,49,40,32,46,7,50], S = 4
console.log(findTargetSumWays(nums, S), 5);