/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    
  var result = 1
  // a = a % 1337
  for(var i = 0; i < b.length - 1; i++) {
    result = (result * Math.pow(a, b[i] * 10)) % 1337
    console.log(result);
  }
  result = (result * Math.pow(a, b[i])) % 1337
  return result
};

// console.log(superPow(2, [2, 0]), 368);
// console.log(superPow(2, [3, 0]), 1135);
// console.log(superPow(3, [1, 0]), 221);
console.log(superPow(12345, [9, 0]), 71);
console.log(superPow(2147483647, [2,0,0]), 1198);