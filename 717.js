/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    
  var res = false
  for(var i = 0; i < bits.length; ) {
    if (bits[i] === 0) {
      i++
      res = true
    } else if (bits[i] === 1) {
      i+=2
      res = false
    }
  }
  return res
};

console.log(isOneBitCharacter([1, 0, 0]) === true);
console.log(isOneBitCharacter([1, 1, 1, 0]) === false);
