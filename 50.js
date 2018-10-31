function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (x === 1) {
    return 1;
  }

  if (x === -1) {
    return n % 2 === 0 ? 1 : -1;
  }
  var flag = Math.abs(n) / n;
  n = Math.abs(n);
  var result = 1;
  for(var i = 0; i < n; i ++) {
    result *= x;
  }
  if (flag < 0) {
    result = 1/result;
  }
  return strip(result);
};

console.log(myPow(2, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2, -2));
console.log(myPow(1, 2147483647));
console.log(myPow(-1, 2147483647));
