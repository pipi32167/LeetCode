
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
  var tmp = new Array(nums.length + 1).fill(false)
  for(var i = 0; i < nums.length; i++) {
    tmp[nums[i]] = true
  }
  for(var i = 0; i < tmp.length; i++) {
    if (!tmp[i]) {
      return i
    }
  }
  
};

console.log(missingNumber([3,0,1]), 2);
console.log(missingNumber([9,6,4,2,3,5,7,0,1]), 8);
