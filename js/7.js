var MAX = Math.pow(2, 31);
var MIN = Math.pow(-2, 31);

// console.log(MAX, MIN);

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) {
    return x;
  }
    
  var absX = Math.abs(x);
  var flag = x / absX;
  var result = 0;
  while(absX) {
    var num = absX % 10;
    result = result * 10 + num; 
    if (result > MAX || result < MIN) {
      return 0;
    }
    absX = Math.floor(absX / 10);
  }
  return flag * result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(MAX + 1));
console.log(reverse(MIN - 1));
