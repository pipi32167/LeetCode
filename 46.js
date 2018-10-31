
var permuteUtil = function (pre, nums, results) {
  if (nums.length === 0) {
    results.push(pre);
    return
  }
  
  for(var i = 0; i < nums.length; i++) {
    var num = nums[i];
    var tmp = nums.slice(0);
    tmp.splice(i, 1);
    permuteUtil(pre.concat(num), tmp, results);
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var results = [];
  permuteUtil([], nums, results);
  return results;
};

console.log(permute([1,2,3]));
console.log(permute([1,2,3,4]));
