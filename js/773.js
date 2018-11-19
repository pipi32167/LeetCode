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
var isEnd = function (board) {

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== END[i][j]) {
        return false;
      }
    }
  }
  return true;
};

var swap = function (board, x, y, x2, y2) {
  // console.log({ board, x, y, x2, y2 });

  const tmp = board[x][y];
  board[x][y] = board[x2][y2];
  board[x2][y2] = tmp;
};

var doSolve = function (board, memo, result) {
  if (isEnd(board)) {
    // console.log(memo);
    return 0
  }
  const [x, y] = findZero(board);
  const key = board.join() + ',' + [x, y].join();
  if (memo[key]) {
    return memo[key];
  }
  const m = 2,
    n = 3;
  const poses = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const MIN = Math.pow(2, 31);
  let min = MIN;
  memo[key] = -1; //占位
  for (let i = 0; i < poses.length; i++) {
    const pos = poses[i];
    const x2 = x + pos[0],
      y2 = y + pos[1];
    if (x2 < 0 || x2 >= m || y2 < 0 || y2 >= n) {
      continue;
    }
    swap(board, x, y, x2, y2);
    let res = doSolve(board, memo, result);
    if (res !== -1 && min > 1 + res) {
      min = 1 + res
      result.hit = true;
    }
    swap(board, x, y, x2, y2);
  }
  min = min === MIN ? -1 : min;
  memo[key] = min;
  return min;
}

/**
 * @param {number[][]} board
 * @return {number}
 */
var solve = function (board, memo) {

  let min, result;

  do {
    result = {
      hit: false
    };
    min = doSolve(board, memo, result);
    if (min === -1) {
      break
    }
    for (const key in memo) {
      if (memo[key] === -1) {
        memo[key] = null
      }
    }
  } while (result.hit)
  // console.log(key, memo);
  return min;
};


/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  // const m = 2,
  //   n = 3;
  // const [x, y] = findZero(board);
  // const poses = [
  //   [0, 1],
  //   [0, -1],
  //   [-1, 0],
  //   [1, 0],
  // ];
  // const MIN = Math.pow(2, 31);
  // let min = MIN;
  // for (let i = 0; i < poses.length; i++) {
  //   const pos = poses[i];
  //   const x2 = x + pos[0],
  //     y2 = y + pos[1];
  //   if (x2 < 0 || x2 >= m || y2 < 0 || y2 >= n) {
  //     continue;
  //   }
  //   swap(board, x, y, x2, y2);
  //   let res = solve(board, {});
  //   if (res !== -1 && min > 1 + res) {
  //     min = 1 + res
  //   }
  //   swap(board, x, y, x2, y2);
  // }
  // min = min === MIN ? -1 : min;
  // return min;
  const memo = {}
  const res = solve(board, memo);
  console.log(Object.keys(memo).length);
  return res;
}

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