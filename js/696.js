/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {

  let dp0 = new Array(s.length + 1).fill(0)
  let dp1 = new Array(s.length + 1).fill(0)
  let sum0 = 0,
    sum1 = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '0') {
      sum0++
    } else {
      sum1++
    }
    dp0[i + 1] = sum0
    dp1[i + 1] = sum1
  }

  let count = 0
  for (let i = 0; i < dp0.length; i++) {
    for (let j = i + 2; j < dp0.length; j += 2) {

      let m = (j - i) / 2
      if (dp0[i + m] - dp0[i] !== m && dp0[i + m] - dp0[i] !== 0) {
        break
      }
      if (dp0[j] - dp0[i] === dp1[j] - dp1[i]) {
        // console.log(s.slice(i, j));
        count++
      }
    }
  }

  return count
};

let assert = require('assert')
assert.deepEqual(countBinarySubstrings("00110011"), 6)
assert.deepEqual(countBinarySubstrings("10101"), 4)
assert.deepEqual(countBinarySubstrings(require('./696_input').sample1), 33352)