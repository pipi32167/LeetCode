var go = function (nums) {
  var i = 1, flag = null
  while(i < nums.length) {
    var res = nums[i] - nums[i-1]
    // console.log(nums[i], nums[i-1], res);
    if (res === 0) {
      // console.log('remove 1:', nums[i]);
      nums.splice(i, 1)
      continue
    }

    if (flag === null) {
      flag = res 
      i++
      continue
    }
    
    if (res > 0 && flag > 0 || res < 0 && flag < 0) {
      // console.log('remove 2:', nums[i]);
      nums.splice(i-1, 1)
      continue
    } 
    
    flag = res
    i++
  }
  return nums
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {

  var nums1 = go(nums.slice(0))
  
  var nums2 = go(nums.slice(0).reverse())

  return Math.max(nums1.length, nums2.length)
};

console.log(wiggleMaxLength([1,7,4,9,2,5]), 6);
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]), 7);
console.log(wiggleMaxLength([1,2,3,4,5,6,7,8,9]), 2);
var arr = [33,53,12,64,50,41,45,21,97,35,47,92,39,0,93,55,40,46,69,42,6,95,51,68,72,9,32,84,34,64,6,2,26,98,3,43,30,60,3,68,82,9,97,19,27,98,99,4,30,96,37,9,78,43,64,4,65,30,84,90,87,64,18,50,60,1,40,32,48,50,76,100,57,29,63,53,46,57,93,98,42,80,82,9,41,55,69,84,82,79,30,79,18,97,67,23,52,38,74,15]
console.log(wiggleMaxLength(arr), 67);
