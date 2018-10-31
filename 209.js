/**
 * O(n^2)
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  
  var tmp = new Array(nums.length + 1).fill(0)  
  var sum = 0
  for(var i = 0; i < nums.length; i++) {
    sum += nums[i]
    tmp[i+1] = sum
  }

  var minLen = nums.length
  var hit = false
  for(var i = 1; i < tmp.length; i++) {
    for(var j = 0; j < i; j++) {
      if (tmp[i] - tmp[j] >= s) {
        hit = true
        if (minLen > i - j) {
          minLen = i - j
        }
      }
    }
  }

  return hit ? minLen : 0
};

/**
 * O(n)
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  
  var tmp = new Array(nums.length + 1).fill(0)  
  var sum = 0
  for(var i = 0; i < nums.length; i++) {
    sum += nums[i]
    tmp[i+1] = sum
  }

  return hit ? minLen : 0
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]), 2);
console.log(minSubArrayLen(1, [2,3,1,2,4,3]), 1);
console.log(minSubArrayLen(100, [2,3,1,2,4,3]), 0);
console.log(minSubArrayLen(5, [2,3,1,1,1,1,1]), 2);
console.log(minSubArrayLen(15, [1,2,3,4,5]), 5);
