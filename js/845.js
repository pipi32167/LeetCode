/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {

  let climbing, beforeClimbing
  let len, max = 0
  const setLen = (nowLen) => {
    len = nowLen
    if (max < len && beforeClimbing && !climbing) {
      max = len
    }
  }
  const setClimbing = (flag) => {
    beforeClimbing = climbing
    climbing = flag
  }
  // const output = () => console.log({climbing, len, max})
  for (let i = 1; i < A.length; i++) {
    // console.log(A[i - 1], A[i]);
    if (climbing === undefined) {
      if (A[i - 1] !== A[i]) {
        setClimbing(A[i - 1] < A[i])
        setLen(1)
      }
      continue
    }

    if (A[i - 1] === A[i]) {
      setClimbing(undefined)
      setLen(0)
      continue
    }

    if (climbing) {
      if (A[i - 1] < A[i]) {
        setLen(len + 1)
      } else {
        setClimbing(false)
        setLen(len + 1)
      }
    } else {
      if (A[i - 1] > A[i]) {
        setLen(len + 1)
      } else {
        setClimbing(true)
        setLen(1)
      }
    }
  }
  return max > 0 ? max + 1 : 0
};

var assert = require('assert');
assert.equal(longestMountain([2, 1, 4, 7, 3, 2, 5]), 5)
assert.equal(longestMountain([2, 2, 2]), 0)
assert.equal(longestMountain([2, 3]), 0)
assert.equal(longestMountain([2, 1]), 0)