var swap = function (matrix, pos1, pos2) {
  var tmp = matrix[pos1.x][pos1.y];
  matrix[pos1.x][pos1.y] = matrix[pos2.x][pos2.y];
  matrix[pos2.x][pos2.y] = tmp;
}


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var n = matrix.length;
  var mid = Math.ceil(n / 2);
  // var tmp;
  
  for(var i = 0; i < n; i ++) {
    for(var j = 0; j < n; j ++) {
      // tmp = matrix[n - 1 - j][n - 1 - i];
      // matrix[n - 1 - j][n - 1 - i] = matrix[i][j];
      // matrix[i][j] = tmp;
      if (j >= n - 1 - i) {
        break;
      }
      swap(matrix, { x: n-1-j, y: n-1-i }, { x: i, y: j })
    }
  }

  // console.log(matrix);

  for(var i = 0; i < mid; i ++) {
    for(var j = 0; j < n; j ++) {
      // tmp = matrix[n - 1 - i][j];
      // matrix[n - 1 - i][j] = matrix[i][j];
      // matrix[i][j] = tmp;
      swap(matrix, { x: n-1-i, y: j }, { x: i, y: j })
    }
  }
  // console.log(matrix);
  // return matrix;
};

console.log(rotate([[1, 2], [4, 3]]));
console.log(rotate([
  [1, 2, 3], 
  [4, 5, 6],
  [7, 8, 9],
]));
console.log(rotate([
  [1, 2, 3, 4], 
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]));
console.log(rotate([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]))