/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  // console.log({ m, n });
  var result = m
  var mask = 1
  for(var i = m+1; i <= n; i += mask) {
    result &= i
    // console.log({ i, mask, res: i & mask });
    if ((i & mask) === 0) {
      mask = mask << 1
      // console.log({ mask });
    }
  }
  return result
};

console.log(rangeBitwiseAnd(5,7),4);
console.log(rangeBitwiseAnd(0,1),0);
console.log(rangeBitwiseAnd(1, 2147483647),0);
console.log(rangeBitwiseAnd(1, 2), 0);
console.log(rangeBitwiseAnd(2, 3), 2);
console.log(rangeBitwiseAnd(2, 4), 0);
