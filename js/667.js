var assert = require('assert');
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {

  const set = new Set(Array(n - 1).fill(0).map((_, idx) => idx + 2))
  let result = [1],
    prev = 1
  for (let i = k; i >= 1; i--) {
    const num1 = prev - i
    if (set.has(num1)) {
      result.push(num1)
      set.delete(num1)
      prev = num1
      continue
    }
    const num2 = Math.abs(prev + i)
    assert.ok(set.has(num2))
    result.push(num2)
    set.delete(num2)
    prev = num2
  }

  while (set.size > 0) {

    let hit = false
    for (let i = 1; i <= k; i++) {
      const num1 = prev - i
      const num2 = prev + i
      if (set.has(num1)) {
        result.push(num1)
        set.delete(num1)
        prev = num1
        hit = true
        break
      }
      if (set.has(num2)) {
        assert.ok(set.has(num2))
        result.push(num2)
        set.delete(num2)
        prev = num2
        hit = true
        break
      }
    }

    assert.ok(hit)
  }
  // console.log(result);
  return result
};

assert.deepEqual(constructArray(3, 2), [1, 3, 2])
assert.deepEqual(constructArray(3, 1), [1, 2, 3])
assert.deepEqual(constructArray(4, 3), [1, 4, 2, 3])
assert.deepEqual(constructArray(4, 2), [1, 3, 2, 4])
assert.deepEqual(constructArray(4, 1), [1, 2, 3, 4])
assert.deepEqual(constructArray(5, 4), [1, 5, 2, 4, 3])
assert.deepEqual(constructArray(5, 3), [1, 4, 2, 3, 5])
assert.deepEqual(constructArray(5, 2), [1, 3, 2, 4, 5])
assert.deepEqual(constructArray(5, 1), [1, 2, 3, 4, 5])
assert.deepEqual(constructArray(10000, 50))

// [1,2,3,4]
// n = 4, k = 3
// 1,4,2,3
// n = 4, k = 2
// 1,3,2,4
// n = 4, k = 1
// 1,2,3,4
// [1,2,3,4,5]
// n = 5, k = 4
// 1,5,2,4,3
// n = 5, k = 3
// 1,4,2,3,5
// n = 5, k = 2
// 1,3,5,4,2