const { equal } = require("assert")

// function calcMax (nums, dp, tmp) {
  
//   let max = 0, sum
//   tmp = tmp.concat([nums.length])
//   for (let i = 0; i < tmp.length - 1; i++) {
//     const [j, k] = [tmp[i], tmp[i+1] - 1]
//     sum = dp[k] - dp[j] + nums[j]
//     max = Math.max(max, sum)
//   }
//   return max
// }

// // let count = 0
// function doSplitArray (nums, m, i, dp, tmp, result, memo) {
//   // count++
//   // const k = i * m + (m - tmp.length)
//   const k = i + ':' + (m - tmp.length)

//   if (memo.has(k)) {
//     return
//   }

//   tmp.push(i)
//   console.log({ i, tmp, m });
  
//   if (tmp.length >= m) {
//     memo.set(k, true)
//     const max = calcMax(nums, dp, tmp)
//     if (result.min > max) {
//       result.min = max
//       result.minRes = tmp.map((e, i) => {
//         if (i < tmp.length - 1) {
//           return nums.slice(e, tmp[i+1])
//         } 
//         return nums.slice(e)
//       })
//     }
//     // console.log({max, tmp, result, memo});
//     tmp.pop()
//     return
//   }
  
//   for (let j = i + 1; j < nums.length; j++) {
//     const sum = dp[j - 1] - dp[i] + nums[i]
//     // console.log({ sum });
//     if (sum > result.min) 
//       break

//     doSplitArray(nums, m, j, dp, tmp, result, memo)
//   }
//   tmp.pop()
// }

// /**
//  * @param {number[]} nums
//  * @param {number} m
//  * @return {number}
//  */
// var splitArray = function(nums, m) {
//   // console.log({nums, m});
//   if (nums.length === m) {
//     return Math.max.apply(null, nums)
//   }
//   const dp = new Array(m.length).fill(0)
//   let sum = 0
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//     dp[i] = sum
//   }
//   const memo = new Map()
  
//   const result = {
//     min: (2 ** 31) - 1,
//     minRes: null
//   }
//   doSplitArray(nums, m, 0, dp, [], result, memo)
//   console.log(result, memo);
//   return result.min
// };

let count = 0
function doSplitArray (nums, M, m, i, dp, memo) {
  // console.log({ m, i });
  count++
  const k = i * M + m
  if (memo.has(k)) {
    return memo.get(k)
  }
  if (m === 1) {
    const min = dp[dp.length - 1] - dp[i] + nums[i]
    memo.set(k, min)
    // console.log({m, i, min, nums: nums.slice(i)});
    return min
  }

  let min = 2 ** 31 - 1
  for (let j = i+1; j <= nums.length - m + 1; j++) {
    let max = dp[j - 1] - dp[i] + nums[i]
    if (max >= min) 
      break
    // console.log('split', { i, head: nums.slice(i, j), tail: nums.slice(j) });
    const ret = doSplitArray(nums, M, m - 1, j, dp, memo)
    max = Math.max(max, ret)
    min = Math.min(min, max)
  }
  // console.log({m, i, min, nums: nums.slice(i)});
  memo.set(k, min)
  return min
}

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  // console.log('###################################');
  // console.log('splitArray', {nums, m});
  if (nums.length === m) {
    return Math.max.apply(null, nums)
  }
  const dp = new Array(m.length).fill(0)
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    dp[i] = sum
  }
  const memo = new Map()
  const ret = doSplitArray(nums, m, m, 0, dp, memo)
  return ret
};

let nums = [7,2,5,10,8], m = 2, ret = 18
equal(splitArray(nums, m), ret)
nums = [1,4,4], m = 3, ret = 4
equal(splitArray(nums, m), ret)
nums = [2,3,1,2,4,3], m = 5, ret = 4
equal(splitArray(nums, m), ret)
nums = new Array(10).fill(0).map((e, i) => i+1), m = 5, ret = 15
equal(splitArray(nums, m), ret)
nums = new Array(40).fill(0).map((e, i) => i+1), m = 10, ret = 98
equal(splitArray(nums, m), ret)
nums = new Array(100).fill(0).map((e, i) => i+1), m = 10, ret = 540
equal(splitArray(nums, m), ret)
nums = new Array(1000).fill(0).map((e, i) => i+1), m = 50, ret = 10361
equal(splitArray(nums, m), ret)

console.log(count);