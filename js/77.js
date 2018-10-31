
var range = function (begin, end) {
  var result = []
  for(var i = begin; i <= end; i++) {
    result.push(i)
  }
  return result;
}

var go = function (nums, prefix, start, k, result) {
  
  if (prefix.length === k) {
    result.push(prefix);
    return;
  }

  for(var i = start; i < nums.length; i++) {
    var newPrefix = prefix.concat(nums[i])
    // console.log({ newPrefix });
    go(nums, newPrefix, i+1, k, result); 
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var nums = range(1, n);
  var result = [];
  go(nums, [], 0, k, result);
  return result;
};

console.log(combine(4, 2));
