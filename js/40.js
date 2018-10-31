var find = function (nums, target, input, results, cache, cache2) {
  
  // found
  if (target === 0) {
    var key = input.sort().join(',')
    var result = input.map(function (elem) {
      return nums[elem];
    }).sort();
    var key2 = result.join(',')
    if (!cache[key] && !cache2[key2]) {
      cache[key] = true;
      cache2[key2] = true;
      results.push(result);
    }
    return;
  }

  // cannot found
  if (target < 0 || target < nums[0]) {
    // console.log('exit 1:', target, nums[0]);
    return;
  }

  for(var i = 0; i < nums.length; i++) {
    if (target >= nums[i] && input.indexOf(i) < 0) {
      find(nums, target - nums[i], input.concat(i), results, cache, cache2);
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(nums, target) {
  nums = nums.sort(function (a, b) {
    return a - b;
  })
  
  var results = [], cache = {}, cache2 = {};
  find(nums, target, [], results, cache, cache2);
  return results;  
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
console.log(combinationSum2([2,5,2,1,2], 5));
console.log(combinationSum2([5,4,5,1,5,3,1,4,5,5,4], 10));
