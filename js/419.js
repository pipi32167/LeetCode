var detect = function (board, i, j, id) {

  const M = board.length
  if (M === 0) {
    return 0
  }
  const N = board[0].length

  const poses = [
    [0, 1],
    [1, 0],
  ]
  for (let k = 0; k < poses.length; k++) {
    const pos = poses[k]
    const i2 = i + pos[0]
    const j2 = j + pos[1]
    if (i2 < 0 || i2 >= M || j2 < 0 || j2 >= N) {
      continue
    }
    if (board[i2][j2] === 'X') {
      board[i2][j2] = id
      detect(board, i2, j2, id)
    }
  }
}

/**
 * @param {string[][]} board
 * @return {number}
 */
var countBattleships = function (board) {

  const M = board.length
  if (M === 0) {
    return 0
  }
  const N = board[0].length

  let count = 0
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 'X') {
        board[i][j] = count
        detect(board, i, j, count)
        count++
      }
    }
  }
  return count
};

const assert = require('assert');
assert.equal(countBattleships([
  'X..X'.split(''),
  '...X'.split(''),
  '...X'.split(''),
]), 2)