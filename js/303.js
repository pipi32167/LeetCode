/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    
  var start = Math.max(i, 0), end = Math.min(this.nums.length - 1, j)
  var res = 0
  for(var i = start; i <= end; i++) {
    res += this.nums[i]
  }
  return res
};

var nums = new NumArray([-2, 0, 3, -5, 2, -1])

console.log(nums.sumRange(0, 2),  1)
console.log(nums.sumRange(2, 5), -1)
console.log(nums.sumRange(0, 5), -3)