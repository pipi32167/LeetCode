function isOk(machines, avg) {

  for (let i = 0; i < machines.length; i++) {
    if (avg !== machines[i]) {
      return false
    }
  }
  return true
}

var assert = require('assert')
assert.ok(isOk([2, 2, 2], 2))
assert.ok(!isOk([3, 1, 2], 2))

function adjust(machines, avg) {
  const len = machines.length
  let move = new Array(len).fill(0)
  let hit = false
  let minDiff = 10000000
  for (let i = 0; i < len - 1; i++) {
    if (machines[i] < avg && machines[i + 1] > avg) {
      move[i]++
      move[i + 1]--
      minDiff = Math.min(minDiff, avg - machines[i], machines[i + 1] - avg)
      hit = true
      // console.log('hit1', i);
    } else if (move[i] >= 0 && machines[i] > avg && machines[i + 1] < avg) {
      move[i]--
      move[i + 1]++
      minDiff = Math.min(minDiff, machines[i] - avg, avg - machines[i + 1])
      hit = true
      // console.log('hit2', i);
    }
  }
  if (!hit) {
    if (machines[0] < avg && machines[1] >= avg) {
      move[0]++
      move[1]--
      minDiff = Math.min(minDiff, avg - machines[0], machines[1] - avg)
      hit = true
    }
    if (move[len - 2] >= 0 && machines[len - 1] < avg && machines[len - 2] >= avg) {
      move[len - 1]++
      move[len - 2]--
      minDiff = Math.min(minDiff, machines[len - 2] - avg, avg - machines[len - 1])
    }
  }
  minDiff = Math.max(1, minDiff)
  move = move.map(e => e * minDiff)
  for (let i = 0; i < move.length; i++) {
    machines[i] += move[i]
  }
  return move
}

var assert = require('assert')
assert.deepEqual(adjust([1, 2, 3], 2), [1, -1, 0]);
assert.deepEqual(adjust([2, 0, 4], 2), [0, 2, -2]);
assert.deepEqual(adjust([200, 0, 400], 200), [0, 200, -200]);
assert.deepEqual(adjust([2, 1, 3], 2), [0, 1, -1]);
assert.deepEqual(adjust([4, 0, 2], 2), [-2, 2, 0]);
assert.deepEqual(adjust([3, 1, 2], 2), [-1, 1, 0]);
assert.deepEqual(adjust([2, 1, 3], 2), [0, 1, -1]);
assert.deepEqual(adjust([0, 3, 0], 1), [1, -1, 0]);

function merge(moves, move) {

  const lastMove = moves[moves.length - 1]
  const newMove = []
  let canMerge = true
  if (!lastMove) {
    canMerge = false
  } else {
    for (let i = 0; i < move.length; i++) {
      const res = lastMove[i] + move[i]
      if (Math.abs(res) > 1) {
        canMerge = false
        break
      }
      newMove.push(res)
    }
  }

  if (canMerge) {
    moves[moves.length - 1] = newMove
  } else {
    moves.push(move)
  }
  // console.log(moves);
  return moves
}
var assert = require('assert')
assert.deepEqual(merge([
  [1, -1, 0]
], [0, -1, 1]), [
  [1, -1, 0],
  [0, -1, 1]
]);

/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {

  const sum = machines.reduce((r, e) => r + e, 0)
  if (sum % machines.length !== 0) {
    return -1
  }

  const avg = sum / machines.length
  let moves = []
  while (!isOk(machines, avg)) {
    // console.log(machines, moves);
    const move = adjust(machines, avg)
    merge(moves, move)
  }
  let count = 0
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves[i].length; j++) {
      if (moves[i][j] !== 0) {
        count += Math.abs(moves[i][j])
        break
      };
    }
  }
  // console.log(moves);
  return count
};


var assert = require('assert')
var _ = require('lodash')
assert.equal(findMinMoves([1, 0, 5]), 3)
assert.equal(findMinMoves([100000, 0, 500000]), 300000)
assert.equal(findMinMoves([0, 3, 0]), 2)
assert.equal(findMinMoves([0, 2, 0]), -1)
// var m = _.chain(0).range(10).map(e => e * 10).value()
// console.log(m);
// assert.equal(findMinMoves(m), -1)