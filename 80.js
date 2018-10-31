/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var pos = 2;
  while(pos < nums.length) {
    if (nums[pos - 1] === nums[pos] && nums[pos - 2] === nums[pos]) {
      nums.splice(pos, 1);
    } else {
      pos ++;
    }
  }

  return nums.length;
  // return nums;
};

console.log(removeDuplicates([]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([1,1,1,2]));
console.log(removeDuplicates([1,2,2,3,3,3]));
console.log(removeDuplicates([1,2,2,3,3,3,4]));

