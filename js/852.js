
var go = function (nums, l, u) {
  if (l > u) {
    return -1
  }
  var m = Math.floor((l + u)/2)
  if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
    return m
  } else if (nums[m - 1] < nums[m] && nums[m] < nums[m + 1]) {
    return go(nums, m + 1, u)
  } else {
    return go(nums, l, m - 1)
  }
}

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  if (A.length < 3) {
    return -1
  }
  return go(A, 0, A.length - 1)
};


// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// var peakIndexInMountainArray = function(A) {
//   if (A.length < 3) {
//     return -1
//   }
//   for(var i = 1; i < A.length - 1; i++) {
//     if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
//       return i
//     }
//   }
//   return -1
// };

console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,1,0]));

var _ = require('./util.underscore')
var nums = _.range(0, 5000).concat(_.range(0, 5000).reverse())
console.log(peakIndexInMountainArray(nums));
var nums = _.range(0, 5000).concat(_.range(0, 4999).reverse())
console.log(peakIndexInMountainArray(nums));