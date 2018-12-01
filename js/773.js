var findZero = function (board) {

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
};

const END = [
  [1, 2, 3],
  [4, 5, 0],
];

var swap = function (board, x, y, x2, y2) {
  // console.log({ board, x, y, x2, y2 });
  const tmp = board[x][y];
  board[x][y] = board[x2][y2];
  board[x2][y2] = tmp;
};

var doGenAllPoss = function (board, memo, step) {

  const key = board.join()
  if (memo.has(key) && memo.get(key) <= step) {
    return
  }

  memo.set(key, step)

  const [x, y] = findZero(board);

  const m = 2,
    n = 3;
  const poses = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < poses.length; i++) {
    const pos = poses[i];
    const x2 = x + pos[0],
      y2 = y + pos[1];
    if (x2 < 0 || x2 >= m || y2 < 0 || y2 >= n) {
      continue
    }
    swap(board, x, y, x2, y2);
    doGenAllPoss(board, memo, step + 1);
    swap(board, x, y, x2, y2);
  }
}

var genAllPoss = function () {
  const board = END
  const memo = new Map
  doGenAllPoss(board, memo, 0)
  return memo
}

const allPoss = genAllPoss()

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {

  // console.log(allPoss.size);
  const key = board.join()
  return allPoss.has(key) ? allPoss.get(key) : -1
};

var assert = require('assert');
assert.equal(slidingPuzzle([
  [1, 2, 3],
  [4, 0, 5]
]), 1);
assert.equal(slidingPuzzle([
  [1, 2, 3],
  [5, 4, 0]
]), -1)
assert.equal(slidingPuzzle([
  [4, 1, 2],
  [5, 0, 3]
]), 5)
assert.equal(slidingPuzzle([
  [3, 2, 4],
  [1, 5, 0]
]), 14)