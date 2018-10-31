var isValid = function (s) {
  var deleted = false  
  var i = 0, j = s.length - 1
  
  while(i < j) {
    if (s[i] !== s[j]) {
      // console.log({ i, j, si:s[i], sj:s[j] });
      if (deleted) {
        return false
      }
      if (s[i+1] === s[j]) {
        // console.log('i++');
        i++
      } else if (s[i] === s[j-1]) {
        // console.log('j--');
        j--
      } else {
        return false
      }
      deleted = true
    }
    i++, j--
  }
  return true
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  // console.log(s);
  // console.log();
  s = s.split('')
  return isValid(s) || isValid(s.reverse())
};

console.log(validPalindrome('aba'), true);
console.log(validPalindrome('abca'), true);
console.log(validPalindrome('abcca'), true);
console.log(validPalindrome('abbca'), true);
console.log(validPalindrome('abdca'), false);
console.log(validPalindrome('aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga'), true);
