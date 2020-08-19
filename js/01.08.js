const { deepEqual } = require("assert");

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const M = matrix.length
  const N = M && matrix[0].length
  const zeroPos = []
  for (let i = 0; i < M; i++) 
    for (let j = 0; j < N; j++) 
      if(matrix[i][j] === 0) zeroPos.push([i, j])
  
  while (zeroPos.length) {
    const [row, col] = zeroPos.pop()
    for (let i = 0; i < M; i++) 
      matrix[i][col] = 0
    for (let i = 0; i < N; i++) 
      matrix[row][i] = 0
  }
  return matrix
};

var matrix = 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
var result = 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
deepEqual(setZeroes(matrix), result)
var matrix = 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
var result = 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
deepEqual(setZeroes(matrix), result)