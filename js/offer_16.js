const { equal } = require("assert")

function solve (x, n) {
  if (n === 0) return 1
  
  let i = 1, ret = x
  while ((i << 1) < n) {
    ret *= ret
    i <<= 1
  }

  return ret * solve(x, n - i)
}

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

  if (n >= 0) {
    return solve(x, n)
  } else {
    return 1 / solve(x, -n)
  }
};

equal(myPow(2, 10), 1024)
equal(myPow(2, 0), 1)
equal(myPow(2.1, 3), Math.pow(2.1, 3))
equal(myPow(2, -2), 0.25)
equal(myPow(2, 100000), Math.pow(2, 100000))