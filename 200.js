var add = function (a, b) {
  return [a[0] + b[0], a[1] + b[1]]
}

var markIsland = function (grid, i, j, count) {
  
  var m = grid.length
  var n = grid[0].length
  grid[i][j] = count

  var poses = [[i, j]]
  while (poses.length > 0) {
    var pos = poses.shift()
    var nexts = [[0,1],[1,0],[0,-1],[-1,0]]
    for(var k = 0; k < nexts.length; k++) {
      var next = add(pos, nexts[k])
      // console.log({ next });
      if (
        next[0] >= 0 && next[0] < m && 
        next[1] >= 0 && next[1] < n &&
        grid[next[0]][next[1]] === '1'
      ) {
        grid[next[0]][next[1]] = count
        poses.push(next)
      }
    }
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) {
    return 0
  }
  
  var m = grid.length
  var n = grid[0].length
  var count = 0
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        markIsland(grid, i, j, count)
        count++
      }
    }
  }
  return count
};

var grid = [
["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]]
console.log(numIslands(grid), 1);
var grid = [
['1','1','0','0','0'],
['1','1','0','0','0'],
['0','0','1','0','0'],
['0','0','0','1','1'],
]
console.log(numIslands(grid), 3);
var grid = require('./200_input')
console.log(numIslands(grid), 1);