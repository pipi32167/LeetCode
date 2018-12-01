
var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var quickSort3 = function (nums, l, u, cmpFn = (a, b) => a - b) {
  if (l >= u) {
    return nums
  }

  var t = nums[l],
    i = l,
    j = u + 1
  while (true) {
    do {
      i++
    } while (i <= u && cmpFn(nums[i], t) < 0)
    do {
      j--
    } while (cmpFn(nums[j], t) > 0)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1, cmpFn)
  quickSort3(nums, j + 1, u, cmpFn)
  return nums
}

var binarySearch = function (t, nums, l, u) {
  // console.log('binarySearch', l, u);
  if (l > u) {
    return -1
  }

  if (nums.length === 0) {
    return -1;
  }
  
  if (l == null) {
    l = 0;
    if (nums[l] > t) {
      return -1;
    }
  }
  if (u == null) {
    u = nums.length - 1;
    if (nums[u] < t) {
      return -1;
    }
  }
  if (nums[l] === t) {
    return l;
  }
  if (nums[u] === t) {
    return u;
  }
  var mid = Math.floor((l + u) / 2);
  if (l === mid) {
    return -1;
  }
  if (nums[mid] === t) {
    return mid;
  } else if (nums[mid] > t) {
    return binarySearch(t, nums, l, mid - 1);
  } else if (nums[mid] < t) {
    return binarySearch(t, nums, mid + 1, u);
  }
}

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// var numFactoredBinaryTrees = function (A) {
//   const MOD = 1000000007
//   // A.sort((a, b) => a - b)
//   quickSort3(A, 0, A.length-1)
//   // console.log(A);
//   let dp = new Array(A.length).fill(0)
//   let count = 0
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < i; j++) {
//       for (let k = j; k < i; k++) {
//         let res = A[j] * A[k]
//         if (res > A[i]) {
//           break
//         } else if (res === A[i]) {
//           let dpRes = dp[j] * dp[k]
//           if (A[j] !== A[k]) {
//             dp[i] += 2 * dpRes
//           } else {
//             dp[i] += dpRes
//           }
//         }
//         // console.log({ i, j, k, dp: dp[i] });
//       }
//     }
//     dp[i]++
//     count += dp[i]
//   }
//   // console.log('%j', A);
//   // console.log('%j', dp);
//   return count %= MOD
// };


/**
 * @param {number[]} A
 * @return {number}
 */
var numFactoredBinaryTrees = function (A) {
  const MOD = 1000000007
  // A.sort((a, b) => a - b)
  quickSort3(A, 0, A.length-1)
  // console.log(A);
  let dp = new Array(A.length).fill(0)
  let count = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      const kv = A[i] / A[j]
      if (kv !== Math.floor(kv)) {
        continue
      }
      const k = binarySearch(kv, A, j, i-1)
      if (k < 0) {
        continue
      }
      let dpRes = dp[j] * dp[k]
      if (A[j] !== A[k]) {
        dpRes *= 2
      } 
      dp[i] += dpRes
      // console.log({ i, j, k, dpRes });
    }
    dp[i]++
    count += dp[i]
  }
  // console.log('%j', A);
  // console.log('%j', dp);
  return count %= MOD
};
var assert = require('assert');
assert.equal(numFactoredBinaryTrees([2, 4]), 3)
assert.equal(numFactoredBinaryTrees([2, 4, 5, 10, 20]), 18)
assert.equal(numFactoredBinaryTrees([45, 42, 2, 18, 23, 1170, 12, 41, 40, 9, 47, 24, 33, 28, 10, 32, 29, 17, 46, 11, 759, 37, 6, 26, 21, 49, 31, 14, 19, 8, 13, 7, 27, 22, 3, 36, 34, 38, 39, 30, 43, 15, 4, 16, 35, 25, 20, 44, 5, 48]), 777)
assert.equal(numFactoredBinaryTrees([2, 4, 5, 10]), 7)