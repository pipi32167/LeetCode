var isValid = function (grid, i, j) {
  let res = grid[i].slice(j, j+3).reduce((res, elem) => res + elem, 0)
  // console.log('isValid', {i, j, res});
  
  var elems = []
  for(let k = i; k < i + 3; k++) {
    let sum = 0
    for(let l = j; l < j + 3; l++) {
      if (grid[k][l] < 1 || grid[k][l] > 9 || elems.indexOf(grid[k][l]) >= 0) {
        // console.log('isValid failed 0')
        return false
      }
      elems.push(grid[k][l])
      sum += grid[k][l]
    }
    if (sum !== res) {
      // console.log('isValid failed 1')
      return false
    }
  }

  for(let k = j; k < j + 3; k++) {
    let sum = 0
    for(let l = i; l < i + 3; l++) {
      sum += grid[l][k]
    }
    if (sum !== res) {
      // console.log('isValid failed 2')
      return false
    }
  }

  let sum = 0
  let diffs = [[0,0],[1,1],[2,2]]
  for(let k = 0; k < diffs.length; k++) {
    sum += grid[i+diffs[k][0]][j+diffs[k][1]]
  }
  if (sum !== res) {
    // console.log('isValid failed 3')
    return false
  }

  sum = 0
  diffs = [[2,0],[1,1],[0,2]]
  for(let k = 0; k < diffs.length; k++) {
    sum += grid[i+diffs[k][0]][j+diffs[k][1]]
  }
  if (sum !== res) {
    // console.log('isValid failed 4')
    return false
  }

  return true
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  var m = grid.length
  if (m === 0) {
    return 0
  }
  var n = grid[0].length
  var count = 0
  for (let i = 0; i <= m - 3; i++) {
    for (let j = 0; j <= n - 3; j++) { 
      if (isValid(grid, i, j)) {
        count++
      }
    }
  }
  return count
};

var grid =  [
[4,3,8,4],
[9,5,1,9],
[2,7,6,2]]
console.log(numMagicSquaresInside(grid) === 1);
var grid = [
  [10,3,5],
  [1,6,11],
  [7,9,2]
]
console.log(numMagicSquaresInside(grid) === 0);
var grid = [
  [3,2,9,2,7],
  [6,1,8,4,2],
  [7,5,3,2,7],
  [2,9,4,9,6],
  [4,3,8,2,5]
]
console.log(numMagicSquaresInside(grid) === 1);
var grid = [
  [3,10,2,3,4],
  [4,5,6,8,1],
  [8,8,1,6,8],
  [1,3,5,7,1],
  [9,4,9,2,9]
]
console.log(numMagicSquaresInside(grid) === 1);