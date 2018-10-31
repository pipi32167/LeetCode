var isValid = function (num) {
  
  num = num.toString().split('').map(Number)
  for(var i = 1; i < num.length; i++) {
    if (num[i-1] > num[i]) {
      return false
    }
  }
  return true
}

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  var i = 0, sub = 0
  while(!isValid(N - sub) && N - sub >= 0) {
    sub = N % Math.pow(10, i+1) + 1
    i++
  }

  return N - sub
};

console.log(monotoneIncreasingDigits(10), 9);
console.log(monotoneIncreasingDigits(1234), 1234);
console.log(monotoneIncreasingDigits(332), 299);
console.log(monotoneIncreasingDigits(987654321), 899999999);
