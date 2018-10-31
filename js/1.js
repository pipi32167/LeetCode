/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      var elem1 = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        var elem2 = nums[j];
        if (target === elem1 + elem2) {
          return [i, j]
        }
      }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
