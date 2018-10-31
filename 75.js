var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var i = 0, j = nums.length - 1, k;
  
  while(i < j) {
    if (nums[i] === 0) {
      i++;
      continue;
    }
    if (nums[j] === 2) {
      j--;
      continue;
    }
    if (nums[i] < nums[j]) {
      swap(nums, i, j);
      continue;
    }
    

    if (nums[i] === 0 && nums[j] === 1) {
      k = j - 1;
  }
};
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function(nums) {
//   var count = [0, 0, 0];
//   for(var i = 0; i < nums.length; i++) {
//     count[nums[i]] ++;
//   }

//   for(var i = 0; i < nums.length; i++) {
//     if (i < count[0]) {
//       nums[i] = 0;
//     } else if (i < count[0] + count[1]) {
//       nums[i] = 1;
//     } else {
//       nums[i] = 2
//     }
//   }
// };

sortColors([2,0,2,1,1,0])
