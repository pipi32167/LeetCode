var check = function  (s, sub) {
  
  for(var begin = 0, end = sub.length; end <= s.length; begin += sub.length, end += sub.length) {
    // console.log(s.slice(begin, end), sub);
    
    if (s.slice(begin, end) !== sub) {
      return false;
    }
  }
  return true;
}

// console.log(check('aaa', 'a'));
// console.log(check('aaa', 'b'));
// console.log(check('abc', 'abc'));
// console.log(check('abc', 'aba'));


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  
  var len = 1;
  var maxLen = Math.floor(s.length / 2)
  while (len <= maxLen) {
    
    if (s.length % len === 0) {
      
      if (check(s, s.slice(0, len))) {
        return true;
      }
    }
    len ++;
  }

  return false;
};

console.log(repeatedSubstringPattern('a'));
console.log(repeatedSubstringPattern('aa'));
console.log(repeatedSubstringPattern('aaa'));
console.log(repeatedSubstringPattern('abc'));
console.log(repeatedSubstringPattern('abcabc'));
console.log(repeatedSubstringPattern('ababab'));
