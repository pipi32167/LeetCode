var getWinCount = function (board, c) {

  let winCount = 0
  for (let i = 0; i < 3; i++) {
    let count1 = 0,
      count2 = 0
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === c) {
        count1++
      }
      if (board[j][i] === c) {
        count2++
      }
    }
    if (count1 === 3) {
      winCount++
    }
    if (count2 === 3) {
      winCount++
    }
  }
  let count1 = 0,
    count2 = 0
  for (let i = 0; i < 3; i++) {
    if (board[i][i] === c) {
      count1++
    }
    if (board[i][2 - i] === c) {
      count2++
    }
  }
  if (count1 === 3) {
    winCount++
  }
  if (count2 === 3) {
    winCount++
  }

  return winCount
}

/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {

  let xcount = 0,
    ocount = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'X') {
        xcount++
      } else if (board[i][j] === 'O') {
        ocount++
      }
    }
  }
  if (xcount < ocount || xcount > ocount + 1) {
    return false
  }

  const xWinCount = getWinCount(board, 'X')
  const oWinCount = getWinCount(board, 'O')
  // console.log({ xWinCount, oWinCount });

  if (xWinCount > 0 && oWinCount > 0) {
    return false
  }

  if (xWinCount > 0 && xcount !== ocount + 1) {
    return false
  }
  if (oWinCount > 0 && xcount !== ocount) {
    return false
  }
  return true
};

var assert = require('assert');
var board = ["O  ", "   ", "   "]
assert.ok(!validTicTacToe(board))
var board = ["XOX", " X ", "   "]
assert.ok(!validTicTacToe(board))
var board = ["XXX", "   ", "OOO"]
assert.ok(!validTicTacToe(board))
var board = ["XOX", "O O", "XOX"]
assert.ok(validTicTacToe(board))
var board = ["XOX", "X O", "XOX"]
assert.ok(!validTicTacToe(board))
var board = [
  "XXX",
  "OOX",
  "OOX"
]
assert.ok(validTicTacToe(board))
var board = [
  "XXX",
  "XOO",
  "OO "
]
assert.ok(!validTicTacToe(board))
var board = [
  "XXO",
  "XOX",
  "OO "
]
assert.ok(validTicTacToe(board))
var board = [
  "XXO",
  "XOX",
  "OOO"
]
assert.ok(!validTicTacToe(board))