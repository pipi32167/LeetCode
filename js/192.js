/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var count = 0  
  while(n > 0) {
    if (n & 1) {
      count++
    }
    n = Math.floor(n / 2)
  }
  return count
};

console.log(hammingWeight(11), 3);
console.log(hammingWeight(128), 1);
console.log(hammingWeight(2147483648), 1);
