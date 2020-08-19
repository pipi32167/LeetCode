/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {

  let i = 0, j = nums.length - 1
  while (i < j) {
    if(nums[i] % 2 !== 0) {
      i++ 
      continue
    }
    if(nums[j] % 2 === 0) {
      j--
      continue
    }
    [nums[j], nums[i]] = [nums[i], nums[j]]
    i++, j--
  }
  return nums
};

console.log(exchange([1,2,3,4]));