const {
  ok
} = require("assert");


function doCanReach(arr, start, memo) {
  if (arr[start] === 0) {
    return true
  }

  if (memo[start]) {
    return false
  }

  memo[start] = true

  if (start - arr[start] >= 0 && doCanReach(arr, start - arr[start], memo)) {
    return true
  }

  if (start + arr[start] < arr.length && doCanReach(arr, start + arr[start], memo)) {
    return true
  }

  return false
}

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {

  const memo = new Array(arr.length).fill(false)
  return doCanReach(arr, start, memo)
};

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach1 = function (arr, start) {

  // console.log('canReach', {arr, start});
  do {
    hit = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) continue
      const js = [i - arr[i], i + arr[i]]
      for(let j of js) {
        if (j >= 0 && j < arr.length && arr[j] === 0) {
          arr[i] = 0
          hit = true
        }
      }
    }
    if (arr[start] === 0) return true
    // console.log({hit, arr, dp});
  } while (hit)
  // console.log(arr);
  return arr[start] === 0
};

let arr = [4, 2, 3, 0, 3, 1, 2],
  start = 5
ok(canReach(arr, start))
arr = [4, 2, 3, 0, 3, 1, 2], start = 0
ok(canReach(arr, start))
arr = [3, 0, 2, 1, 2], start = 2
ok(!canReach(arr, start))