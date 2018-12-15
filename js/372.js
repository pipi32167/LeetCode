const MOD = 1337

var pow = function (a, b) {
  let res = 1
  for (let i = 0; i < b; i++) {
    res = res * a % MOD
  }
  return res
}
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  // console.log('superPow', a, b);
  a = a % MOD
  let r = pow(a, b.shift())
  while (b.length > 0) {
    r = pow(r, 10) 
    r = r * pow(a, b.shift()) % MOD
  }
  return r
};

// /**
//  * @param {number} a
//  * @param {number[]} b
//  * @return {number}
//  */
// var superPow = function (a, b) {

//   b = Number(b.join(''))
//   let res = 1
//   for (let i = 0; i < b; i++) {
//     res = (res * a) % MOD
//   }
//   return res
// };

const assert = require('assert');
assert.equal(superPow(2, [0]), 1);
assert.equal(superPow(2, [3]), 8);
assert.equal(superPow(2, [1, 0]), 1024);
assert.equal(superPow(2, [1, 0, 0]), 1178);
assert.equal(superPow(2, [1, 1, 1]), 596);
assert.equal(superPow(3, [3, 0]), 260);
assert.equal(superPow(3, [4, 0]), 1306);
assert.equal(superPow(1338, [1, 0]), 1);
assert.equal(superPow(2147483647, [2, 0, 0]), 1198);