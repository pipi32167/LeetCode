var find = function (nums, target, input, results, cache) {
  
  // found
  if (target === 0) {
    
    var key = input.sort().join(',')
    if (!cache[key]) {
      cache[key] = true;
      results.push(input);
    }
    return;
  }

  // cannot found
  if (target < 0 || target < nums[0]) {
    // console.log('exit 1:', target, nums[0]);
    return;
  }

  for(var i = 0; i < nums.length; i++) {
    if (target >= nums[i]) {
      find(nums, target - nums[i], input.concat(nums[i]), results, cache);
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
  nums = nums.sort(function (a, b) {
    return a - b;
  })
  
  var results = [], cache = {};
  find(nums, target, [], results, cache);
  return results;  
};

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));
console.log(combinationSum([9], 8));
console.log(combinationSum([], 8));

