/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
  let ret = 0
  for (let i = 0; i < 32; i++) {
    if ((A & 1) !== (B & 1)) {
      ret++
    }
    A >>= 1
    B >>= 1
  }
  return ret
};

let A = 29,
  B = 15
console.log(convertInteger(A, B));
A = 1, B = 2
console.log(convertInteger(A, B));