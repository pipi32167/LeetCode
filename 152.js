
// var doMaxProduct = function (nums, l, u) {
//   if (l > u) {
//     return 0;
//   }

//   if (l === u) {
//     return nums[l];
//   }
//   var product = 1;
//   var m = Math.floor((l + u) / 2);
//   var lmax;
//   for(var i = m; i >= l; i--) {
//     product *= nums[i];
//     if (lmax === undefined) {
//       lmax = nums[i];
//     } else {
//       lmax = Math.max(lmax, product);
//     }
//   }
//   product = 1;
//   var rmax;
//   for(var i = m+1; i <= u; i++) {
//     product *= nums[i];
//     if (rmax === undefined) {
//       rmax = nums[i];
//     } else {
//       rmax = Math.max(rmax, product);
//     }
//     // console.log({ rmax });
//   }
//   // console.log({ l, u, lmax, rmax });
  
//   return Math.max(
//     lmax * rmax,
//     doMaxProduct(nums, l, m),
//     doMaxProduct(nums, m+1, u)
//   )
// }

// /**
//  * O(nlogn)
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function(nums) {
//   return doMaxProduct(nums, 0, nums.length - 1)
// };


/**
 * O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var hit = false;
  var max = 1;
  for(var i = 0; i < nums.length; i++) {
    var product = 1;
    for(var j = i; j < nums.length; j++) {
      product *= nums[j];
      if (max <= product) {
        max = product
        hit = true
      }
    }
  }
  if (!hit) {
    max = Math.max.apply(null, nums)
  }
  return max;
};

console.log(maxProduct([0]));
console.log(maxProduct([-1,-1]));
console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([-4, -3]));
console.log(maxProduct([-2,3,-4]));