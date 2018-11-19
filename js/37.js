var assert = require('assert');

const NUMS = {}
for (let i = 1; i <= 9; i++) {
  NUMS[i] = true
}

var getRowVals = function (board, i, j) {
  const nums = Object.assign({}, NUMS)
  for (let k = 0; k < 9; k++) {
    if (k !== j && board[i][k] !== '.' && !(board[i][k] instanceof Array)) {
      delete nums[board[i][k]]
    }
  }
  return Object.keys(nums)
}

var getColVals = function (board, i, j) {
  const nums = Object.assign({}, NUMS)
  for (let k = 0; k < 9; k++) {
    if (k !== i && board[k][j] !== '.' && !(board[k][j] instanceof Array)) {
      delete nums[board[k][j]]
    }
  }
  return Object.keys(nums)
}


var getSquareVals = function (board, i, j) {
  const nums = Object.assign({}, NUMS)
  const startI = Math.floor(i / 3) * 3
  const startJ = Math.floor(j / 3) * 3
  // console.log({ startI, startJ });

  for (let k = 0; k < 9; k++) {
    const i2 = startI + Math.floor(k / 3)
    const j2 = startJ + k % 3
    if (!(i === i2 && j === j2) && board[i2][j2] !== '.' && !(board[i2][j2] instanceof Array)) {
      delete nums[board[i2][j2]]
    }
  }
  return Object.keys(nums)
}

var mkIntersecion = function (...valsArray) {
  const map = new Map()
  for (let i = 0; i < valsArray.length; i++) {
    for (let j = 0; j < valsArray[i].length; j++) {
      const e = valsArray[i][j];
      map.set(e, (map.get(e) || 0) + 1)
    }
  }
  const result = []
  for (const entry of map.entries()) {
    if (entry[1] === valsArray.length) {
      result.push(entry[0])
    }
  }
  return result
}

var getVals = function (board, i, j) {

  const vals1 = getRowVals(board, i, j)
  const vals2 = getColVals(board, i, j)
  const vals3 = getSquareVals(board, i, j)
  const vals = mkIntersecion(vals1, vals2, vals3)
  return vals
}

var solveStep1 = function (board) {

  let hit = false
  do {
    hit = false
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {

          var vals = getVals(board, i, j)
          if (vals.length === 0) {
            return false
          }
          // assert.ok(vals.length > 0)
          if (vals.length === 1) {
            // console.log({ i, j, vals1, vals2, vals3, vals, board: JSON.stringify(board), });
            board[i][j] = vals[0]
            hit = true
            // console.log('hit', { i, j, vals });
          }
        }
      }
    }
  } while (hit)
  return true
}

var clone = function (board) {
  return new Array(board.length).fill(0).map((e, idx) => board[idx].slice(0))
}

var override = function (board1, board2) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board1[i][j] = board2[i][j]
    }
  }
}

var solveStep2 = function (board) {

  let minLen = 10,
    min
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        const vals = getVals(board, i, j)
        assert.ok(vals.length > 0)
        if (minLen > vals.length) {
          minLen = vals.length
          min = [i, j, vals]
        }
      }
    }
  }

  if (!min) {
    return true
  }

  const [i, j, vals] = min
  for (let k = 0; k < vals.length; k++) {
    const tmpBoard = clone(board)
    tmpBoard[i][j] = vals[k]
    if (!solveStep1(tmpBoard)) {
      continue
    }
    if (solveStep2(tmpBoard)) {
      override(board, tmpBoard)
      return true
    }
  }
  return false
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

  solveStep1(board)
  
  const res = solveStep2(board)
  // console.log(res, board);
};


assert.deepEqual(getRowVals([
  ["5", "3", ".", ["1", '2'], "7", "4", "6", "8", "9"]
], 0, 2), ['1', '2'])
assert.deepEqual(getColVals([
  ["5"],
  ["3"],
  ["."],
  [
    ["1", '2']
  ],
  ["7"],
  ["4"],
  ["6"],
  ["8"],
  ["9"]
], 2, 0), ['1', '2'])
assert.deepEqual(getSquareVals([
  ["5", "3", "."],
  ["1", "7", "4"],
  ["6", "8", "9"]
], 0, 2), ['2'])
assert.deepEqual(getSquareVals([
  ["5", ["3"], "."],
  ["1", "7", ['4', '2']],
  ["6", "8", "9"]
], 0, 2), ['2', '3', '4'])
assert.deepEqual(getSquareVals([
  ["5", "3", ["1", "2", "4"],
    ["2", "6"], "7", ["2", "4", "6"],
    ["4", "6"],
    ["2", "4"],
    ["2", "4"]
  ],
  ["6", ["2", "4", "7"],
    ["2", "4", "7"], "1", "9", "5", ["3", "4"],
    ["2", "3", "4"],
    ["2", "4"]
  ],
  [
    ["1", "2"], "9", "8", ["2", "5", "7"],
    ["4", "5"],
    ["2", "4", "7"],
    ["3", "4", "5"], "6", ["2", "4"]
  ],
  ["8", ["1", "2", "4", "5", "7"],
    ["1", "2", "4", "5", "7"],
    ["2", "5", "7"], "6", ["2", "4", "7"],
    ["4", "5", "7"],
    ["2", "4", "5"], "3"
  ],
  ["4", ["2", "5", "7"],
    ["2", "5", "7"], "8", "5", "3", ".", ".", "1"
  ],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
], 4, 6), ['2', '4', '5', '7', '8', '9'])

// assert.deepEqual(mkIntersecion(['2', '6', '7', '8'], ['1', '3', '4', '5', '9'], ['1', '2', '3', '4', '7', '9']), ['1'])

var {
  board,
  result
} = require('./37_input').sample1;
solveSudoku(board)
assert.deepEqual(board, result)
var {
  board,
  result
} = require('./37_input').sample2;
solveSudoku(board)
assert.deepEqual(board, result)
var {
  board,
  result
} = require('./37_input').sample3;
solveSudoku(board)
assert.deepEqual(board, result)
// var {
//   board,
//   result
// } = require('./37_input').sample4;
// solveSudoku(board)
// assert.deepEqual(board, result)


for (let i = 0; i < 100; i++) {
  var {
    board,
    result
  } = require('./37_input').sample4;
  board = clone(board)
  solveSudoku(board)
  assert.deepEqual(board, result)
}

