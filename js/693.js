/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  
  var bits = []
  while(n > 0) {
    bits.push(n & 1)
    n = n >> 1
  }

  for(var i = 0; i < bits.length - 1; i ++) {
    if (bits[i] === bits[i+1]) {
      return false
    }
  }
  return true
};

console.log(hasAlternatingBits(5), true);
console.log(hasAlternatingBits(7), false);
console.log(hasAlternatingBits(11), false);
console.log(hasAlternatingBits(10), true);
