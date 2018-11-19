var calcLength = function (pos1, pos2) {
  return Math.abs(pos2[0] - pos1[0]) + Math.abs(pos2[1] - pos1[1]) - 1
}

var dyeing = function (A, i, j, color) {
  A[i][j] = color
  const m = A.length
  const n = A[0].length
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
    if (A[x][y] === 1) {
      dyeing(A, x, y, color)
    }
  }
}

var findIslands = function (A) {

  let pos
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1) {
        pos = [i, j]
        break
      }
    }
    if (pos) {
      break
    }
  }

  dyeing(A, pos[0], pos[1], 2)

  let island1 = [],
    island2 = []
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1) {
        island1.push([i, j])
      } else if (A[i][j] === 2) {
        island2.push([i, j])
      }
    }
  }
  return [island1, island2]
}

/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function (A) {
  const [island1, island2] = findIslands(A)
  let minLen = Math.pow(2, 31)
  for (let i = 0; i < island1.length; i++) {
    for (let j = 0; j < island2.length; j++) {
      const len = calcLength(island1[i], island2[j])
      if (minLen > len) {
        minLen = len
      }
    }
  }
  return minLen
};

var assert = require('assert');
var A = [
  [0, 1],
  [1, 0]
]
assert.deepEqual(shortestBridge(A), 1)
var A = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 1]
]
assert.deepEqual(shortestBridge(A), 2)
var A = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]
assert.deepEqual(shortestBridge(A), 1)