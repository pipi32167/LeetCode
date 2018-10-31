var add = function (pos1, pos2) {
  var [i1, j1] = pos1
  var [i2, j2] = pos2
  return [i1+i2, j1+j2]
}

var isEdge = function (grid, i, j) {
  if (grid[i][j] === 0) {
    return false
  }
  
  var m = grid.length
  var n = grid[0].length
  var directions = [[0,-1],[-1,0],[0,1],[1,0]]
  for(var k = 0; k < directions.length; k++) {
    var [i2, j2] = add([i,j], directions[k])
    if (i2 >= 0 && i2 < m && j2 >= 0 && j2 < n) {
      if (grid[i2][j2] === 0) {
        return true
      }
    } else {
      return true
    }
  }
  return false
}

var calcPerimeter = function (grid, i, j) {
  
  var m = grid.length
  var n = grid[0].length
  var directions = [[0,-1],[-1,0],[0,1],[1,0]]
  var perimeter = 0
  for(var k = 0; k < directions.length; k++) {
    var [i2, j2] = add([i,j], directions[k])
    if (i2 >= 0 && i2 < m && j2 >= 0 && j2 < n) {
      if (grid[i2][j2] === 0) {
        perimeter++
      }
    } else {
      perimeter++
    }
  }
  return perimeter
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
  var m = grid.length
  if (m === 0) {
    return 0
  }
  var n = grid[0].length
  var perimeter = 0
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if (isEdge(grid, i, j)) {
        // console.log({i, j, perimeter: calcPerimeter(grid, i, j)});
        perimeter += calcPerimeter(grid, i, j)
      }
    }
  }
  return perimeter
};

var grid = [[1]]
console.log(islandPerimeter(grid) === 4);
var grid = [[1,1,1,1]]
console.log(islandPerimeter(grid) === 10);
var grid = [[1],[1],[1],[1]]
console.log(islandPerimeter(grid) === 10);
var grid = [[1,1],[1,1]]
console.log(islandPerimeter(grid) === 8);
var grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
]
console.log(islandPerimeter(grid) === 16);
