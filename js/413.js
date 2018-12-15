const assert = require('assert');

var findEnd = function (A, i) {
  if (i >= A.length - 1) {
    return -1
  }
  const diff = A[i + 1] - A[i]
  for (let j = i + 1; j < A.length; j++) {
    if (A[j] - A[j - 1] !== diff) {
      return j - 1
    }
  }
  return A.length - 1
}

assert.equal(findEnd([1, 2, 3, 4, 5], 0), 4)
assert.equal(findEnd([1, 2, 3, 2, 1], 0), 2)
assert.equal(findEnd([1, 2, 3, 2, 1], 2), 4)

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let count = 0
  let i = 0,
    j
  while (i < A.length - 1) {
    j = findEnd(A, i)
    if (j === -1 || j - i < 2) {
      i++
    } else {
      console.log({ i, j });
      count += (j - i) * (j - i - 1) / 2
      i = j + 1
    }
  }
  return count
};

assert.equal(numberOfArithmeticSlices([1, 2, 3, 4]), 3)
assert.equal(numberOfArithmeticSlices([1, 2, 3, 5]), 1)
