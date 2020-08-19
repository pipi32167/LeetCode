/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const M = grid.length
  const N = grid[0].length
  let count = 0
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] < 0) {
        count++
      }
    }
  }
  return count
};


let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives(grid));
grid = [[3,2],[1,0]]
console.log(countNegatives(grid));
grid = [[1,-1],[-1,-1]]
console.log(countNegatives(grid));
grid = [[-1]]
console.log(countNegatives(grid));