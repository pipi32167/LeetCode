var tmp = {}
var canGo = function (i, j, grid) {
  // console.log('canGo', i, j, grid, grid[i][j] === 0);
  return grid[i][j] === 0;
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var calcMinPathSum = function(i, j, grid) {
  if (tmp[i] && tmp[i][j] !== undefined) {
    return tmp[i][j]
  }
  var m = grid.length;
  var n = grid[0].length;
  
  var res = 0, value = grid[i][j];
  if (i === m - 1 && j === n - 1) {
    res = value
  } else if (i < m - 1 && j === n - 1) {
    res = value + calcMinPathSum(i + 1, j, grid)
  } else if (i === m - 1 && j < n - 1) {
    res = value + calcMinPathSum(i, j + 1, grid)
  } else {
    var sum1 = calcMinPathSum(i + 1, j, grid)
    var sum2 = calcMinPathSum(i, j + 1, grid)
    res = value + (sum1 < sum2 ? sum1 : sum2);
  }
  tmp[i] = tmp[i] || {}
  tmp[i][j] = res
  return res
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  tmp = {};
  return calcMinPathSum(0, 0, grid);
};

console.log(minPathSum([
  [1],
]));

console.log(minPathSum([
  [1,3,1],
]));

console.log(minPathSum([
  [1],
  [1],
  [4]
]));

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]));
