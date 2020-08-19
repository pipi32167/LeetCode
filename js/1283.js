const _ = require("lodash")

function doSmallestDivisor0(nums, threshold, min, max) {
  // console.log({ min, max });
  let res;
  for (let i = min; i <= max; i++) {
    const sum = nums.reduce((r, e) => Math.ceil(e / i) + r, 0)
    // console.log({i, sum});
    if (sum <= threshold) {
      res = i
      // console.log({sum, res});
      break
    }
    // res = i
  }
  return res
}

function calcSum (nums, mid) {
  let r = 0;
  for(let i = 0; i < nums.length; i++) {
    r += Math.ceil(nums[i] / mid)
  }
  return r
  // return nums.reduce((r, e) => Math.ceil(e / mid) + r, 0)
}

function doSmallestDivisor(nums, threshold, min, max) {
  // console.log({ min, max });
  if (min === max) {
    return min
  }
  if (min + 1 === max) {
    const sum1 = nums.reduce((r, e) => Math.ceil(e / min) + r, 0)
    if (sum1 <= threshold) {
      return min
    } else {
      return max
    }
  }
  const mid = Math.floor((min + max)/2)
  // const sum = nums.reduce((r, e) => Math.ceil(e / mid) + r, 0)
  const sum = calcSum(nums, mid)
  if(sum > threshold) {
    return doSmallestDivisor(nums, threshold, mid, max)
  } else {
    return doSmallestDivisor(nums, threshold, min, mid)
  }
}

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {

  const max = nums.reduce((r, e) => e + r, 0);
  return doSmallestDivisor(nums, threshold, 1, Math.ceil(max / threshold * 2))
  // return doSmallestDivisor(nums, threshold, 1, max)
};

let nums = [1,2,5,9], threshold = 6
console.log(smallestDivisor(nums, threshold));
nums = [2,3,5,7,11], threshold = 11
console.log(smallestDivisor(nums, threshold));
nums = [19], threshold = 5
console.log(smallestDivisor(nums, threshold));
nums = _.range(100), threshold = 100
console.log(smallestDivisor(nums, threshold));
nums = _.range(10000), threshold = 10000
console.log(smallestDivisor(nums, threshold));

for(let i = 0; i < 200; i++) smallestDivisor(nums, threshold)