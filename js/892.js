var calcArea = function (grid, i, j) {
  const count = grid[i][j]
  if (count === 0) {
    return 0
  }
  const m = grid.length
  const n = grid[0].length
  let res = 0
  if (count === 1) {
    res = 6
  } else {
    res = 6 + (count - 1) * 4
  }
  const poses = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  for (let k = 0; k < poses.length; k++) {
    const pos = poses[k]
    const i2 = i + pos[0],
      j2 = j + pos[1]
    if (i2 < 0 || i2 >= m || j2 < 0 || j2 >= n) {
      continue
    }
    res -= Math.min(count, grid[i2][j2])
  }
  return res
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      result += calcArea(grid, i, j)
    }
  }
  return result
};

var assert = require('assert');
assert.equal(surfaceArea([
  [2]
]), 10)
assert.equal(surfaceArea([
  [1, 2],
  [3, 4]
]), 34)
assert.equal(surfaceArea([
  [1, 0],
  [0, 2]
]), 16)