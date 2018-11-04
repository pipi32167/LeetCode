/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  if (nums.length === 1) {
    return nums[0].toString()
  } else if (nums.length === 2) {
    return nums[0] + '/' + nums[1]
  }
  return nums[0] + '/(' + nums.slice(1).join('/') + ')'
};


// console.log(optimalDivision([1000, 10, 2]) === 200);
// console.log(optimalDivision([1000, 2, 10]) === 5000);
// console.log(optimalDivision([1000, 100]) === 10);
// console.log(optimalDivision([1000, 100, 100]) === 1000);
console.log(optimalDivision([1000, 100, 10, 2]) === '1000/(100/10/2)');
// console.log(optimalDivision([1000, 100, 2, 10]) === 200);
// console.log(optimalDivision([1000, 100, 2, 10, 1]) === 200);
// console.log(optimalDivision([1000, 100, 2, 1, 10]) === 200);
// console.log(optimalDivision([1000, 100, 1, 2, 10]) === 200);
// console.log(optimalDivision([1000, 100, 2, 10, 1, 1]) === 200);