var foreach = function (board, x, y, fn) {
  const m = board.length
  const n = board[0].length
  const poses = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]
  for (let i = 0; i < poses.length; i++) {
    const pos = poses[i];
    const x2 = x + pos[0]
    const y2 = y + pos[1]
    if (x2 < 0 || x2 >= m || y2 < 0 || y2 >= n) {
      continue
    }
    fn(x2, y2)
  }
}

var getAroundMCount = function (board, x, y) {

  let count = 0
  foreach(board, x, y, (x2, y2) => {
    if (board[x2][y2] === 'M') {
      count++
    }
  })
  return count
}


var open = function (board, x, y) {
  const m = board.length
  const n = board[0].length
  if (x < 0 || x >= m || y < 0 || y >= n) {
    return
  }
  if (board[x][y] === 'E') {
    const count = getAroundMCount(board, x, y)
    if (count > 0) {
      board[x][y] = count.toString()
    } else {
      board[x][y] = 'B'
      foreach(board, x, y, (x2, y2) => open(board, x2, y2))
    }
  }
}

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {

  const [x, y] = click
  if (board[x][y] === 'M') {
    board[x][y] = 'X'
    return board
  }
  open(board, x, y)
  // console.log(board);
  return board
};

var assert = require('assert');

var board = [
  ["E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "M"],
  ["E", "E", "M", "E", "E", "E", "E", "E"],
  ["M", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "M", "M", "E", "E", "E", "E"]
]
var click = [0, 0]
var result = [
  ["B", "B", "B", "B", "B", "B", "1", "E"],
  ["B", "1", "1", "1", "B", "B", "1", "M"],
  ["1", "2", "M", "1", "B", "B", "1", "1"],
  ["M", "2", "1", "1", "B", "B", "B", "B"],
  ["1", "1", "B", "B", "B", "B", "B", "B"],
  ["B", "B", "B", "B", "B", "B", "B", "B"],
  ["B", "1", "2", "2", "1", "B", "B", "B"],
  ["B", "1", "M", "M", "1", "B", "B", "B"]
]
assert.deepEqual(updateBoard(board, click), result)

var board = [
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E']
]
var click = [3, 0]
var result = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'M', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B']
]
assert.deepEqual(updateBoard(board, click), result)
var board = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'M', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B']
]
var click = [1, 2]
var result = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'X', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B']
]
assert.deepEqual(updateBoard(board, click), result)