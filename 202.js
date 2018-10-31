/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, preN = []) {

  var nums = n.toString().split('').map(Number)
  var sum = nums.reduce((memo, elem) => memo + elem * elem, 0)
  if (sum === 1) {
    return true
  }
  if (preN.indexOf(sum) >= 0) {
    return false
  }
  return isHappy(sum, preN.concat(n))
};

console.log(isHappy(19), true);
console.log(isHappy(20), false);
