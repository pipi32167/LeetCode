
var go = function (nums, pos, cache) {

  if (cache[pos] !== undefined) {
    return cache[pos]
  }

  // console.log('go', pos);
  if (pos >= nums.length - 1) {
    cache[pos] = true
    return true
  }
  
  for(var i = nums[pos]; i >= 1; i--) {
    if(go(nums, pos + i, cache)) {
      return true
    }
  }
  cache[pos] = false
  return false
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 0) {
    return true
  }

  if (nums.length > 1) {
    var hit = false
    for(var i = 0; i < nums.length - 1; i++) {
      if (i + nums[i] >= nums.length - 1) {
        // console.log('hit', i, nums[i], i+nums[i], nums.length - 1);
        hit = true
      }
    }
    if (!hit) {
      return false
    }
  }

  return go(nums, 0, [])
};

console.log(canJump([3,0,0,0]), true)
console.log(canJump([2,3,1,1,4]), true);
console.log(canJump([3,2,1,0,4]), false);
console.log(canJump([]), true);
console.log(canJump([0]), true);
console.log(canJump([1]), true);
var { nums } = require('./55_input')
console.log(canJump(nums), false);