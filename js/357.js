/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) {
    // console.log({n, res: 1});
    return 1
  }

  if (n === 1) {
    // console.log({n, res: 10});
    return 10
  }
  
  n = Math.min(n, 10)
  var res = 1
  for(var i = 0; i < n; i++) {
    var count = i === 0 ? 9 : 10-i
    res *= count
    // console.log({ res, i, count });
  }
  // console.log({n, res});
  
  return res + countNumbersWithUniqueDigits(n - 1)
};

console.log(countNumbersWithUniqueDigits(0));
console.log(countNumbersWithUniqueDigits(1));
console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(3));
