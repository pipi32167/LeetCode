/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray0 = function (nums) {

  let res = 0
  const nums2 = [0]
  for (let i = 0; i < nums.length; i++) {
    res += nums[i]
    nums2.push(res)
  }

  let max = -2147483647
  // let maxRes = []
  for (let i = 0; i < nums2.length; i++) {
    for (let j = nums2.length - 1; j > i; j--) {
      const ret = nums2[j] - nums2[i]
      if (max < ret) {
        max = ret
        // maxRes = nums.slice(i, j)
      }
    }
  }
  // console.log(maxRes);

  return max
};

function doMaxSubArray(nums, i, j, nums2, cache) {

  if (i >= j - 1) {
    return nums[i]
  }

  if (cache[i][j] != null) {
    return cache[i][j]
  }
  let ret
  if (nums[i] < 0) {
    ret = doMaxSubArray(nums, i + 1, j, nums2, cache)
  } else if (nums[j - 1] < 0) {
    ret = doMaxSubArray(nums, i, j - 1, nums2, cache)
  } else {
    ret = Math.max(
      nums2[j] - nums2[i],
      doMaxSubArray(nums, i + 1, j, nums2, cache),
      doMaxSubArray(nums, i, j - 1, nums2, cache),
    )
  }
  cache[i][j] = ret
  return ret
}

function doMaxSubArray1(nums, i, j, nums2, cache) {

  const stack = []
  if (i === j - 1) {
    return cache[i][j]
  }
  while (true) {

    // console.log({ i, j, stack });
    if (i >= j) {
      cache[i][j] = -2147483647;
      [i, j] = stack.pop()
      // console.log('pop1', [i, j]);
      continue
    }
    if (cache[i][j] != null) {
      [i, j] = stack.pop()
      // console.log('pop2', [i, j]);
      continue
    }

    if (cache[i + 1][j] == null) {
      stack.push([i, j])
      // console.log('push1', [i, j]);
      i = i + 1
      continue
    }
    if (cache[i][j - 1] == null) {
      stack.push([i, j])
      // console.log('push2', [i, j]);
      j = j - 1
      continue
    }

    cache[i][j] = Math.max(
      nums2[j] - nums[i],
      cache[i][j - 1],
      cache[i + 1][j],
    )
    if (stack.length === 0) {
      break
    }
    [i, j] = stack.pop()
    // console.log('pop3', [i, j]);
  }

  return cache[i][j]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  console.time('t')
  let res = 0
  const nums2 = [0]
  // const cache = new Array(nums.length)
  // for (let i = 0; i < nums.length; i++) {
  //   res += nums[i]
  //   nums2.push(res)
  //   cache[i] = new Array(nums.length + 1)
  //   cache[i][i + 1] = nums[i]
  // }
  const cache = {}
  for (let i = 0; i < nums.length; i++) {
    res += nums[i]
    nums2.push(res)
    cache[i] = {
      [i + 1]: nums[i]
    }
  }
  console.timeEnd('t')
  console.time('t2')
  const max = doMaxSubArray(nums, 0, nums.length, nums2, cache)
  // console.log(cache);
  console.timeEnd('t2')

  return max
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function (nums) {

  let max = -2147483647
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] < nums[i]) {
      sum = 0
    }
    sum += nums[i]
    if (max < sum) {
      max = sum
    }
  }

  return max
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]
  const dp = new Array(len).fill(-2147483647)
  let max = nums[0]
  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    max = Math.max(max, dp[i])
  }
  return max
};

let nums = [-2, 1, -3]
console.log(maxSubArray(nums));
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));
nums = [-2147483647]
console.log(maxSubArray(nums));
nums = [-2, -1]
console.log(maxSubArray(nums));
nums = require("./16.17_input.json")
console.log(nums.length);

console.log(maxSubArray(nums), 11081);