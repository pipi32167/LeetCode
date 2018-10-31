/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // var res = go(n)
  var res = 0
  
  while(n > 0) {
    n = Math.floor(n / 5)
    res += n
  }
  return res
};

console.log(trailingZeroes(3), 0);
console.log(trailingZeroes(5), 1);
console.log(trailingZeroes(10), 2);
console.log(trailingZeroes(30), 7);
console.log(trailingZeroes(50), 12);
console.log(trailingZeroes(200), 49);
console.log(trailingZeroes(1808548329), 49);
