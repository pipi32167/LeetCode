const { deepEqual } = require("assert");


function iterate (matrix, start, isNotEnd, step, ret) {
  // console.log('iterate begin', { matrix, start, step });
  for ( 
    let i = start[0], j = start[1]; 
    isNotEnd(i, j); 
    i += step[0], j += step[1]
  ) {
    // console.log({ i, j });
    ret.push(matrix[i][j])
  }
  // console.log('iterate end', ret);
}

function solve (matrix, i0, j0, i1, j1) {
  // console.log('solve', { i0, j0, i1, j1 });
  
  if (i0 > i1 || j0 > j1) {
    return []
  }
  if (i0 === i1 && j0 === j1) {
    return [matrix[i0][j0]]
  }
  if (i0 === i1 || j0 === j1) {
    const ret = []
    for (let i = i0; i <= i1; i++) 
      for (let j = j0; j <= j1; j++) 
        ret.push(matrix[i][j])
    return ret
  }

  const ret = []
  
  let start, step, isNotEnd
  start = [i0, j0], step = [0, 1], isNotEnd = (i, j) => j < j1
  iterate(matrix, start, isNotEnd, step, ret)
  start = [i0, j1], step = [1, 0], isNotEnd = (i, j) => i < i1
  iterate(matrix, start, isNotEnd, step, ret) 
  start = [i1, j1], step = [0, -1], isNotEnd = (i, j) => j > j0
  iterate(matrix, start, isNotEnd, step, ret)
  start = [i1, j0], step = [-1, 0], isNotEnd = (i, j) => i > i0
  iterate(matrix, start, isNotEnd, step, ret)

  return ret.concat(solve(matrix, i0 + 1, j0 + 1, i1 - 1, j1 - 1))
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const M = matrix.length
  const N = M > 0 ? matrix[0].length : 0
  return solve(matrix, 0, 0, M - 1, N - 1)
};

var matrix = [[1,2,3],[4,5,6],[7,8,9]]
var ret = [1,2,3,6,9,8,7,4,5]
deepEqual(spiralOrder(matrix), ret)
matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
ret = [1,2,3,4,8,12,11,10,9,5,6,7]
deepEqual(spiralOrder(matrix), ret)
matrix = [[1,2],[3,4]]
ret = [1,2,4,3]
deepEqual(spiralOrder(matrix), ret)
matrix = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
ret = [1,2,3,6,9,12,11,10,7,4,5,8]
deepEqual(spiralOrder(matrix), ret)
matrix = []
ret = []
deepEqual(spiralOrder(matrix), ret)
matrix = [[6,9,7]]
ret = [6,9,7]
deepEqual(spiralOrder(matrix), ret)
matrix = [[6],[9],[7]]
ret = [6,9,7]
deepEqual(spiralOrder(matrix), ret)
matrix = [[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]
ret = [2,3,4,7,10,13,16,15,14,11,8,5,6,9,12]
deepEqual(spiralOrder(matrix), ret)