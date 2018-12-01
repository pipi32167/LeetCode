/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  const m = matrix.length
  if (m === 0) {
    return []
  }
  const n = matrix[0].length

  let results = []
  let reverse = false
  for (let i = 0; i < m; i++) {

    let x = i,
      y = 0
    let result = []
    while (x >= 0 && x < m && y >= 0 && y < n) {
      result.push(matrix[x][y])
      x -= 1
      y += 1
    }

    if (reverse) {
      result.reverse()
    }
    // console.log(result);
    
    results = results.concat(result)
    reverse = !reverse
  }

  for (let i = 1; i < n; i++) {

    let x = m-1,
      y = i
    let result = []
    while (x >= 0 && x < m && y >= 0 && y < n) {
      result.push(matrix[x][y])
      x -= 1
      y += 1
    }

    if (reverse) {
      result.reverse()
    }
    // console.log(result);
    results = results.concat(result)
    reverse = !reverse
  }
  return results
};

var assert = require('assert');
var matrix = []
var result = []
assert.deepEqual(findDiagonalOrder(matrix), result)
var matrix = [[1]]
var result = [1]
assert.deepEqual(findDiagonalOrder(matrix), result)
var matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]
var result = [1,2,4,7,5,3,6,8,9]
assert.deepEqual(findDiagonalOrder(matrix), result)