/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    
  this.nums[i] = val
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

var nums = new NumArray([1, 3, 5])
console.log(nums.sumRange(0, 2),  9)
nums.update(1,2)
console.log(nums.sumRange(0, 2),  8)