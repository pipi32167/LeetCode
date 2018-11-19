var calcGray = function (M, i, j) {

  const m = M.length
  const n = M[0].length

  let result = 0,
    count = 0
  const poses = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]
  for (let k = 0; k < poses.length; k++) {
    const pos = poses[k];
    const i2 = i + pos[0],
      j2 = j + pos[1]
    if (i2 < 0 || i2 >= m || j2 < 0 || j2 >= n) {
      continue
    }
    result += M[i2][j2]
    count++
  }
  // console.log({ i,j,result,count,res: Math.floor(result / count) });
  return Math.floor(result / count)
}

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {

  const m = M.length
  const n = M[0].length

  let result = new Array(m).fill(0).map(e => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = calcGray(M, i, j)
    }
  }
  return result
};

var assert = require('assert');
assert.deepEqual(imageSmoother([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]), [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
])