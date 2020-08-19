function flip(num, i) {

  const bit = 1 << i
  if ((num & bit) === bit) {
    num -= bit
  } else {
    num |= bit
  }
  return num
}

function toBinary(num) {
  const nums = []
  while (num > 0) {
    nums.unshift(num & 1)
    num >>= 1
  }
  while (nums.length < 32) {
    nums.unshift(0)
  }
  return nums.join('')
}

/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  // console.log({N: toBinary(N), M: toBinary(M)});
  let mask = 0x7FFFFFFF
  for (let k = i; k <= j; k++) {
    mask = flip(mask, k)
  }
  const ret = (N & mask) | (M << i)
  // console.log(toBinary(ret));
  return ret
};

let N, M, i, j
N = 1024, M = 19, i = 2, j = 6
console.log(insertBits(N, M, i, j), 1100);
N = 1143207437, M = 1017033, i = 11, j = 31
console.log(insertBits(N, M, i, j), 2082885133);
N = 2032243561, M = 10, i = 24, j = 29
console.log(insertBits(N, M, i, j), 1243714409);
// console.log(toBinary(1243714409));

01111001001000011001001101101001
00000000000000000000000000001010
01101010001000011001001101101001
01001010001000011001001101101001