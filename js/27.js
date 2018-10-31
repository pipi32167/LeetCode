/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var pos = 0;
  while(pos < nums.length) {
  
    if (nums[pos] === val) {
      nums.splice(pos, 1);
    } else {
      pos ++;
    }
  }

  return nums.length;  
  // return nums;
};

console.log(removeElement([], 1));
console.log(removeElement([1], 1));
console.log(removeElement([1,1,1], 1));
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));

