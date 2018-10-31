

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function(x) {
  x = x.toString();
  var result = '';
  for(var i = x.length - 1; i >= 0; i--) {
    result += x[i];
  }
  return x === result;
};


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

