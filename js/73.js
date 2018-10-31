/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  
  var m = matrix.length;
  var n = matrix[0].length;
  var setRows = [], setCols = [];
  for(var i = 0; i < m; i ++) {
    for(var j = 0; j < n; j ++) {
      if (matrix[i][j] === 0) {
        if (setRows.indexOf(i) < 0) {
          setRows.push(i)
        }
        if (setCols.indexOf(j) < 0) {
          setCols.push(j)
        }
      }
    }
  }

  for(var i = 0; i < setRows.length; i ++) {
    for(var j = 0; j < n; j++) {
      matrix[setRows[i]][j] = 0;
    }
  }

  for(var i = 0; i < m; i ++) {
    for(var j = 0; j < setCols.length; j++) {
      matrix[i][setCols[j]] = 0;
    }
  }
  return matrix;
};

console.log(setZeroes([
  [1,1,1],
  [1,0,1],
  [1,1,1]
]));

console.log(setZeroes([
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]));
