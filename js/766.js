var go = function (matrix, m, n, pos, val) {
  // console.log({ m, n, pos, val });
  do {
    if (val !== matrix[pos[0]][pos[1]]) {
      return false
    }
    pos[0]++, pos[1]++
  } while (pos[0] < m && pos[1] < n)
  return true
}

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {

  const m = matrix.length
  const n = matrix[0].length
  for (let i = 0; i < n; i++) {
    const val = matrix[0][i]
    let pos = [0, i]
    if (!go(matrix, m, n, pos, val)) {
      return false
    }
  }
  for (let i = 0; i < m; i++) {
    const val = matrix[i][0]
    let pos = [i, 0]
    if (!go(matrix, m, n, pos, val)) {
      return false
    }
  }
  return true
};

var assert = require('assert');
assert.ok(isToeplitzMatrix([
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
]))
assert.ok(!isToeplitzMatrix([
  [1, 2],
  [2, 2]
]))