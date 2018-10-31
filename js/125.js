
var validChars = '0123456789abcdefghijklmnopqrstuvwxyz'

var isValid = function (char) {
  
  return validChars.indexOf(char) >= 0
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  s = s.toLowerCase()
  
  var i = 0, j = s.length - 1
  while(i < j) {
    // console.log({i, j});
    
    if (!isValid(s[i])) {
      i++
      continue
    }
    if (!isValid(s[j])) {
      j--
      continue
    }
    if (s[i] !== s[j]) {
      // console.log({ i, j, si: s[i], sj: s[j] });
      return false
    }
    i++,j--
  }

  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"), true);
console.log(isPalindrome("race a car"), false);
