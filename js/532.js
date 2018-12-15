/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) {
    return 0
  }
  if (k === 0) {
    const m = new Map
    const s = new Set
    for (const n of nums) {
      const c = (m.get(n) || 0) + 1
      m.set(n, c)
      if (c > 1) {
        s.add(n)
      }
    }
    return s.size
  }

  const s = new Set(nums)
  let count = 0
  for (const i of s) {
    if (s.has(i + k)) {
      count++
    }
  }
  return count
};

var assert = require('assert');
assert.equal(findPairs([1, 3, 1, 5, 4], -1), 0)
assert.equal(findPairs([1, 3, 1, 5, 4], 0), 1)
assert.equal(findPairs([1, 3, 1, 5, 4], 1), 2)
assert.equal(findPairs([1, 3, 1, 5, 4], 2), 2)
assert.equal(findPairs([1, 1, 1, 1, 1], 0), 1)