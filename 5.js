var isPalindrome = function (s) {

  // console.log('isPalindrome', s);
  var begin = 0;
  var end = s.length - 1;
  while(begin < end) {
    if (s[begin] !== s[end]) {
      return false;
    }
    begin ++;
    end --;
  }

  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  if (s.length <= 1) {
    return s;
  }
  
  var result = {
    begin: 0, 
    end: 1,
  }
  var maxResult = {
    begin: 0, 
    end: 1,
  }

  do {

    result.end ++;
    if (result.end <= s.length) { 
      var subStr = s.slice(result.begin, result.end);
      if (isPalindrome(subStr)) {
        if (maxResult.end - maxResult.begin < result.end - result.begin) {
          // console.log(result, maxResult);
          maxResult = {
            begin: result.begin,
            end: result.end,
          };
        }
      }
    } else {
    
      result = {
        begin: result.begin + 1,
        end: result.begin + 2,
      } 
    }

  } while (result.begin < s.length && (maxResult.end - maxResult.begin < s.length - result.begin));

  return s.slice(maxResult.begin, maxResult.end);
};

console.log(longestPalindrome(''));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('aba'));
console.log(longestPalindrome('abcba'));
console.log(longestPalindrome('abc'));
console.log(longestPalindrome("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"));
