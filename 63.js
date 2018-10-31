var tmp = {}
var canGo = function (i, j, obstacleGrid) {
  // console.log('canGo', i, j, obstacleGrid, obstacleGrid[i][j] === 0);
  return obstacleGrid[i][j] === 0;
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(i, j, obstacleGrid) {
  if (tmp[i] && tmp[i][j] !== undefined) {
    return tmp[i][j]
  }
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;
  
  if (!canGo(i, j, obstacleGrid)) {
    return 0
  }
  var res = 0
  if (i === m - 1 && j === n - 1) {
    if (canGo(i, j, obstacleGrid)) {
      res = 1
    }
  } else if (i < m - 1 && j === n - 1) {
    if (canGo(i + 1, j, obstacleGrid)) {
      res = uniquePaths(i + 1, j, obstacleGrid)
    } 
  } else if (i === m - 1 && j < n - 1) {
    if (canGo(i, j + 1, obstacleGrid)) {
      res = uniquePaths(i, j + 1, obstacleGrid)
    } 
  } else {
    if (canGo(i + 1, j, obstacleGrid)) {
      res += uniquePaths(i + 1, j, obstacleGrid)
    }
    if (canGo(i, j + 1, obstacleGrid)) {
      res += uniquePaths(i, j + 1, obstacleGrid)
    }
  }
  tmp[i] = tmp[i] || {}
  tmp[i][j] = res
  return res
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  tmp = {};
  return uniquePaths(0, 0, obstacleGrid);
};

console.log(uniquePathsWithObstacles([[1]]));
console.log(uniquePathsWithObstacles([[0, 1]]));
console.log(uniquePathsWithObstacles([[1, 0]]));
console.log(uniquePathsWithObstacles([[0], [1]]));
console.log(uniquePathsWithObstacles([[1], [0]]));
console.log(uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]));
