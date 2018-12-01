var assert = require('assert');

let count = 0
/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  const dp = Array(A.length).fill(0)
  const set = new Set()
  let maxElem = -Math.pow(2, 31)
  for (let i = 0, sum = 0; i < A.length; i++) {
    sum += A[i];
    dp[i] = sum
    set.add(A[i])
    if (maxElem < A[i]) {
      maxElem = A[i]
    }
  }
  if (set.size === 1) {
    return A[0] >= 0 ? A.length * A[0] : A[0]
  }
  const dpStart = dp[0],
    dpEnd = dp[dp.length - 1]
  let max = -Math.pow(2, 31)
  for (let i = 0; i < dp.length; i++) {
    if (A[i] <= 0) {
      continue
    }
    for (let j = dp.length + i - 1; j >= i; j--) {
      // if (A[j] <= 0) {
      //   continue
      // }
      count++
      let res
      if (j >= dp.length) {
        res = dpEnd - dp[i] + A[i] + dp[j % dp.length] - dpStart + A[0]
      } else {
        res = dp[j] - dp[i] + A[i]
      }
      if (max < res) {
        // console.log('hit', { i, j });
        max = res
      }
    }
  }
  return max === -Math.pow(2, 31) ? maxElem : max
};

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// var maxSubarraySumCircular = function (A) {
//   const dp = Array(A.length).fill(0)
//   const set = new Set()
//   let sum = 0
//   let maxElem = -Math.pow(2, 31)
//   for (let i = 0; i < A.length; i++) {
//     sum += A[i];
//     dp[i] = sum
//     set.add(A[i])
//     if (maxElem < A[i]) {
//       maxElem = A[i]
//     }
//   }
//   if (set.size === 1) {
//     return A[0] >= 0 ? A.length * A[0] : A[0]
//   }
//   let max = -Math.pow(2, 31), maxLen
//   let min = Math.pow(2, 31), minLen

//   for (let i = 0; i < dp.length; i++) {
//     for (let j = i; j < dp.length; j++) {
//       const res = dp[j] - dp[i] + A[i]
//       if (max < res) {
//         max = res
//         maxLen = j - i + 1
//       }
//       if (min > res) {
//         min = res
//         minLen = j - i + 1
//       }
//     }
//   }
//   // console.log({ max, min, sum });
//   if (minLen === A.length) {
//     return Math.max(max, maxElem)
//   }

//   return Math.max(max, sum - min)
// };

var getSum = function (A, dp, start, end) {
  let res
  if (start < A.length && end >= A.length) {
    res = dp[A.length - 1] - dp[start] + A[start] + dp[end % A.length] - dp[0] + A[0]
    // console.log('hit1');
  } else if (start < A.length && end < A.length) {
    res = dp[end] - dp[start] + A[start]
    // console.log('hit2');
  } else {
    end %= A.length
    start %= A.length
    res = dp[end] - dp[start] + A[start]
    // console.log('hit3');
  }
  return res
}
assert.equal(getSum([5,-3,5], [5,2,7], 2, 2), 5)
assert.equal(getSum([5,-3,5], [5,2,7], 2, 3), 10)
assert.equal(getSum([5,-3,5], [5,2,7], 3, 3), 5)

/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  const dp = Array(A.length).fill(0)
  const set = new Set()
  let sum = 0
  let maxElem = -Math.pow(2, 31)
  for (let i = 0; i < A.length; i++) {
    sum += A[i]
    dp[i] = sum
    set.add(A[i])
    if (maxElem < A[i]) {
      maxElem = A[i]
    }
  }
  if (set.size === 1) {
    return A[0] >= 0 ? A.length * A[0] : A[0]
  }

  let max = -Math.pow(2, 31)
  for (let i = 0; i < dp.length; i++) {
    if (A[i] <= 0) {
      continue
    }
    for (let j = i; j < dp.length + i; j++) {
      
      let res = getSum(A, dp, i, j)
      if (res <= 0) {
        break
      }
      // console.log({ i, j, res });
      if (max < res) {
        max = res
        // console.log('hit', { i, j, max });
      }
    }
  }

  // console.log(dp);
  return max === -Math.pow(2, 31) ? maxElem : max
};


assert.equal(maxSubarraySumCircular(require('./918_input').sample1), 3516893)
assert.equal(maxSubarraySumCircular(Array(15000).fill(1).concat([-1]).concat(Array(15000).fill(1))), 30000)
assert.equal(maxSubarraySumCircular(Array(30000).fill(1)), 30000)
assert.equal(maxSubarraySumCircular(Array(30000).fill(-1)), -1)
assert.equal(maxSubarraySumCircular(Array(30000).fill(0)), 0)
assert.equal(maxSubarraySumCircular([-1, 1, 2, 3, -1]), 6)
assert.equal(maxSubarraySumCircular([1, -2, 3, -2]), 3)
assert.equal(maxSubarraySumCircular([5, -3, 5]), 10)
assert.equal(maxSubarraySumCircular([3, -1, 2, -1]), 4)
assert.equal(maxSubarraySumCircular([3, -2, 2, -3]), 3)
assert.equal(maxSubarraySumCircular([-2, -3, -1]), -1)

console.log(count);