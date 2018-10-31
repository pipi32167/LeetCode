var isValid = function (matrix, i, j, k, l) {
  
  for(var i2 = i; i2 <= k; i2++) {
    for(var j2 = j; j2 <= l; j2++) { 
      if (matrix[i2][j2] !== '1') {
        return false
      }
    }
  }
  return true
}
var calcMaxArea = function (matrix, i, j) {
  var m = matrix.length
  var n = matrix[0].length
  if(matrix[i][j] === '0') {
    return 0
  }

  var iend = i
  for(var k = i; k < m; k++) {
    if (matrix[k][j] !== '1') {
      break
    } 
    iend = k
  }

  var jend = j
  for(var k = j; k < n; k++) {
    if (matrix[i][k] !== '1') {
      break
    } 
    jend = k
  }

  var maxArea = 0 
  for(var k = i; k <= iend; k++) {
    for(var l = j; l <= jend; l++) {
      if (isValid(matrix, i, j, k, l)) {
        var area = (k - i + 1) * (l - j + 1)
        if (maxArea < area) {
          // console.log({ i, j, k, l, area, iend, jend });
          maxArea = area
        }
      }
    }
  }
  return maxArea
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    
  var m = matrix.length
  if (m === 0) {
    return 0
  }
  var n = matrix[0].length
  var dp = new Array(m).fill(() => new Array(n).fill(0))
  var max = 0
  for(var i = 0; i < m; i ++) {
    for(var j = 0; j < n; j++) {
      dp[i][j] = calcMaxArea(matrix, i, j)
      if (max < dp[i][j]) {
        max = dp[i][j]
      }
    }
  }
  return max
};

var matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
console.log(maximalRectangle(matrix), 6);
var matrix = [
  ["1","1","1","1","1"],
  ["1","1","1","1","1"],
  ["1","1","1","1","1"],
  ["1","1","1","1","1"]
]
console.log(maximalRectangle(matrix), 20);
var matrix = [
  ["1","1","1","0","1"],
  ["1","1","1","1","1"],
  ["1","1","1","1","1"],
  ["1","1","1","1","1"]
]
console.log(maximalRectangle(matrix), 15);
var matrix = [
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"]
]
console.log(maximalRectangle(matrix), 0);
var matrix = [
  []
]
console.log(maximalRectangle(matrix), 0);