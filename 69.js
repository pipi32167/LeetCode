/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  
  var begin = 0, end = x
  
  while(begin < end) {
    if (begin + 1 === end) {
      if (end * end <= x) {
        return end
      } else {
        return begin
      }
    }
    var m = Math.floor((begin + end) / 2)
    var result = m * m
    if (result === x) {
      return m
    } else if (result > x) {
      end = m
    } else if (result < x) {
      begin = m
    }
  }

  return 0
};

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(5));
console.log(mySqrt(8));
console.log(mySqrt(9));
