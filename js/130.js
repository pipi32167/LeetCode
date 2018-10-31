
var doSolve = function (board) {
  var m = board.length
  var n = board[0].length

  //init
  for(var i = 0; i < n; i++) {
    if (board[0][i] === 'O') {
      board[0][i] = '-'
    }
    if (board[m-1][i] === 'O') {
      board[m-1][i] = '-'
    }
  }
  for(var i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      board[i][0] = '-'
    }
    if (board[i][n-1] === 'O') {
      board[i][n-1] = '-'
    }
  }

  var hit 
  do {
    hit = false
    //up to down
    for(var i = 1; i < m-1; i++) {
      for(var j = 1; j < n-1; j++) {
        if (board[i][j] === 'O' && board[i-1][j] === '-') {
          board[i][j] = '-'
          hit = true
        }
      }
    }
    //down to up
    for(var i = m-2; i >= 1; i--) {
      for(var j = 1; j < n-1; j++) {
        if (board[i][j] === 'O' && board[i+1][j] === '-') {
          board[i][j] = '-'
          hit = true
        }
      }
    }
    //left to right
    for(var i = 1; i < n-1; i++) {
      for(var j = 1; j < m-1; j++) {
        if (board[j][i] === 'O' && board[j][i-1] === '-') {
          board[j][i] = '-'
          hit = true
        }
      }
    }
    //right to left
    for(var i = n-2; i >= 1; i--) {
      for(var j = 1; j < m-1; j++) {
        if (board[j][i] === 'O' && board[j][i+1] === '-') {
          board[j][i] = '-'
          hit = true
        }
      }
    }
    // console.log(board);
  } while(hit)

  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '-') {
        board[i][j] = 'O'
      }
    }
  }
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0) {
    return
  }
  doSolve(board)
};

// var board = [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'X'],
// ]
// solve(board);console.log(board);
// solve([])
// var board = [
//   ["O","O","O"],
//   ["O","O","O"],
//   ["O","O","O"],
// ]
// console.log(isAlive(board, [], [1,1]));
// solve(board);console.log(board);
// var board = [
//   ["O","X","X","O","X"],
//   ["X","O","O","X","O"],
//   ["X","O","X","O","X"],
//   ["O","X","O","O","O"],
//   ["X","X","O","X","O"]
// ]
// solve(board);console.log(board);
var board = [
  ["O","X","O","O","X","X"],
  ["O","X","X","X","O","X"],
  ["X","O","O","X","O","O"],
  ["X","O","X","X","X","X"],
  ["O","O","X","O","X","X"],
  ["X","X","O","O","O","O"]
]
solve(board);console.log(board);
var board = require('./130_input')
// solve(board);//console.log(board);