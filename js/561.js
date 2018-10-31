/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort(function(a, b) {
      return a - b;
    });

    var result = 0;
    for(var i = 0; i < nums.length; i += 2) {
      result += nums[i];
    }

    return result;
};

console.log(arrayPairSum([1,4,3,2]));
console.log(arrayPairSum([6214, -2290, 2833, -7908]));
