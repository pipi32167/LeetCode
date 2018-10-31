/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  var i = 0
  var min = 0
  var max
  while(n > 0) {

    max = min + 9 * Math.pow(10, i) * (i+1)
    if (n <= max) {
      break
    } 
    min = max
    i++
  }

  n % max 

  console.log({ min, max, i });
};

console.log(findNthDigit(9));


