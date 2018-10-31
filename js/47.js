var permuteUtil = function (pre, nums, results) {
  if (nums.length === 0) {
    var res = pre.join(',');
    if (results.indexOf(res) < 0) {
      results.push(res);
    }
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
var permuteUnique = function(nums) {
  var results = [];
  permuteUtil([], nums, results);
  return results.map(function (elem) {
    return elem.split(',').map(Number)
  });
};


console.log(permuteUnique([1,1,2]));
console.log(permuteUnique([-1,2,-1,2,1,-1,2,1]));
