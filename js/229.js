/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  var tmp = {}  
  for(var i = 0; i < nums.length; i++) {
    tmp[nums[i]] = tmp[nums[i]] || 0
    tmp[nums[i]] ++
  }

  var majorityCond = Math.floor(nums.length / 3)
  var result = []
  for(var k in tmp) {
    if (tmp[k] > majorityCond) {
      result.push(Number(k)) 
    }
  }
  return result
};

console.log(majorityElement([3,2,3]), [3]);
console.log(majorityElement([1,1,1,3,3,2,2,2]), [1,2]);
