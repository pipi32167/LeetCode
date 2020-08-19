const { equal } = require("assert");

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

  let count = 0
  for (let i = 5; i <= n; i += 5) {
    let tmp = i
    while(tmp % 5 === 0) {
      count ++
      tmp = Math.floor(tmp / 5)
    }
  }
  return count
};


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0
  while(n) {
    n = Math.floor(n / 5)
    count += n
  }
  return count
};

equal(trailingZeroes(0), 0)
equal(trailingZeroes(1), 0)
equal(trailingZeroes(2), 0)
equal(trailingZeroes(3), 0)
equal(trailingZeroes(5), 1)
equal(trailingZeroes(100), 24)
equal(trailingZeroes(1000), 249)
