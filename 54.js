var getCircle = function (matrix, result) {

  var m = matrix.length;
  if (m === 0) {
    return result; 
  }
  var n = matrix[0].length;
  if (n === 1) {
    for(var i = 0; i < m; i++) {
      result.push(matrix[i][0]);
    }
    return result;
  }
  if (m === 1) {
    for(var i = 0; i < n; i++) {
      result.push(matrix[0][i]);
    }
    return result;
  }
  for(var i = 0; i < n - 1; i ++) {
    result.push(matrix[0][i]);
  }
  for(var i = 0; i < m - 1; i ++) {
    result.push(matrix[i][n-1]);
  }
  for(var i = n - 1; i > 0; i --) {
    result.push(matrix[m-1][i]);
  }
  for(var i = m - 1; i > 0; i --) {
    result.push(matrix[i][0]);
  }

  var newMatrix = [];
  for(var i = 1; i < m - 1; i++) {
    for(var j = 1; j < n - 1; j++) {
      newMatrix[i - 1] = newMatrix[i - 1] || [];
      newMatrix[i - 1][j - 1] = matrix[i][j];
    }
  }

  // console.log(newMatrix);

  return getCircle(newMatrix, result);
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
  var result = [];
  getCircle(matrix, result);
  return result;
};

console.log(spiralOrder([]));
console.log(spiralOrder([[1,2]]));
console.log(spiralOrder([
  [0, 1],
  [3, 2],
]));
console.log(spiralOrder([
  [0, 1, 2],
  [7, 8, 3],
  [6, 5, 4],
]));

console.log(spiralOrder([
  [0, 1, 2, 3],
  [9, 10,11,4],
  [8, 7, 6, 5],
]));

console.log(spiralOrder([
  [0, 1, 2, 3],
  [11, 12,13,4],
  [10, 15, 14, 5],
  [9, 8, 7, 6],
]));

console.log(spiralOrder([[7],[9],[6]]));
console.log(spiralOrder([[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20]]));
