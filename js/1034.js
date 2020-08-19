const { deepEqual } = require("assert")

function doColorBorder(grid, r, c, oldColor, newColor) {

  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) {
    return
  }
  if (grid[r][c] !== oldColor) {
    return
  }

  grid[r][c] = newColor

  doColorBorder(grid, r - 1, c, oldColor, newColor)
  doColorBorder(grid, r + 1, c, oldColor, newColor)
  doColorBorder(grid, r, c - 1, oldColor, newColor)
  doColorBorder(grid, r, c + 1, oldColor, newColor)
}

/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, r0, c0, color) {

  doColorBorder(grid, r0, c0, grid[r0][c0], color)
  return grid
};

let grid = [[1,1],[1,2]], r0 = 0, c0 = 0, color = 3, ret = [[3, 3], [3, 2]]
deepEqual(colorBorder(grid, r0, c0, color), ret)
grid = [[1,2,2],[2,3,2]], r0 = 0, c0 = 1, color = 3, ret =[[1, 3, 3], [2, 3, 3]]
deepEqual(colorBorder(grid, r0, c0, color), ret)
grid = [[1,1,1],[1,1,1],[1,1,1]], r0 = 1, c0 = 1, color = 2, ret = [[2, 2, 2], [2, 1, 2], [2, 2, 2]]
deepEqual(colorBorder(grid, r0, c0, color), ret)