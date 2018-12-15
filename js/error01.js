/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

  let dict = {
    R: 0,
    L: 0,
    U: 0,
    D: 0,
  }
  for (let i = 0; i < moves.length; i++) {
    dict[moves[i]]++
  }
  return dict.R === dict.L && dict.U === dict.D
};

var assert = require('assert')
assert.ok(judgeCircle("UD"))
assert.ok(!judgeCircle("LL"))