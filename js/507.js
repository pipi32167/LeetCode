/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  var maxFactor = Math.floor(Math.sqrt(num))

  var result = [1]
  for(var i = 2; i <= maxFactor; i++) {
    if (result.indexOf(i) >= 0) {
      break
    }
    if ((num % i) === 0) {
      result.push(i, num / i)
    }
  }
  if (result.indexOf(num) >= 0) {
    return false
  }

  var res = result.reduce((memo, elem) => memo + elem, 0)
  return res === num
};

console.log(checkPerfectNumber(1), false);
console.log(checkPerfectNumber(6), true);
console.log(checkPerfectNumber(27), false);
console.log(checkPerfectNumber(28), true);
console.log(checkPerfectNumber(2*3*4*5*6*7*8), false);