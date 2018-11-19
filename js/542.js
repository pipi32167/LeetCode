var isNext0 = function (matrix, i, j) {
  const m = matrix.length
  const n = matrix[0].length
  const poses = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  for (let k = 0; k < poses.length; k++) {
    const pos = poses[k]
    const x = i + pos[0]
    const y = j + pos[1]
    if (x < 0 || x >= m || y < 0 || y >= n) {
      continue
    }
    if (matrix[x][y] === 0) {
      return true
    }
  }
  return false
}

const MIN = Math.pow(2, 31)
var getNextMin = function (matrix, i, j) {
  const m = matrix.length
  const n = matrix[0].length
  const poses = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  let min = MIN
  for (let k = 0; k < poses.length; k++) {
    const pos = poses[k]
    const x = i + pos[0]
    const y = j + pos[1]
    if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] === -1) {
      continue
    }
    min = Math.min(min, matrix[x][y])
  }
  return min === MIN ? -1 : min
}

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const m = matrix.length
  if (m === 0) {
    return [
      []
    ]
  }
  const n = matrix[0].length
  let result = new Array(m).fill(0).map(() => new Array(n).fill(-1))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        result[i][j] = 0
      } else if (isNext0(matrix, i, j)) {
        result[i][j] = 1
      }
    }
  }

  let hit
  do {
    hit = false
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (result[i][j] === -1 || result[i][j] > 1) {
          const res = getNextMin(result, i, j)
          if (res !== -1 && result[i][j] !== res + 1) {
            result[i][j] = res + 1
            hit = true
          }
        }
      }
    }
  } while (hit)

  return result
};


var assert = require('assert');
var matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
var expect = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
assert.deepEqual(updateMatrix(matrix), expect)
var matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
]
var expect = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 2, 1]
]
assert.deepEqual(updateMatrix(matrix), expect)
var matrix = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
]
var expect = [
  [2, 1, 0, 1, 2, 2, 2, 3, 3, 2],
  [2, 1, 0, 1, 1, 1, 1, 2, 2, 1],
  [3, 2, 1, 1, 0, 0, 0, 1, 1, 0],
  [2, 1, 1, 2, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 2, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 1, 0, 1, 0, 1, 2]
]
var actual = [
  [2, 1, 0, 1, 2, 2, 2, 3, 4, 2],
  [2, 1, 0, 1, 1, 1, 1, 2, 2, 1],
  [3, 2, 1, 1, 0, 0, 0, 1, 1, 0],
  [2, 1, 1, 2, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 2, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 1, 0, 1, 0, 1, 2]
]
assert.deepEqual(updateMatrix(matrix), expect)