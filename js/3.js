
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    // return s;
    return s.length;
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
    var char = s[result.end];
    var subStr = s.slice(result.begin, result.end);
    // console.log(result, maxResult);
    if (subStr.indexOf(char) < 0) {
      result.end ++;
      if (maxResult.end - maxResult.begin < result.end - result.begin) {
        // console.log('replace maxResult', result);
        maxResult = result
      }
    } else {
      result = {
        begin: result.begin + 1,
        end: result.begin + 2,
      }
    }
  } while(result.end < s.length);

  // return s.slice(maxResult.begin, maxResult.end);
  return maxResult.end - maxResult.begin;
};

console.log(lengthOfLongestSubstring('') === 0);
console.log(lengthOfLongestSubstring('a') === 1);
console.log(lengthOfLongestSubstring('aaaa') === 1);
console.log(lengthOfLongestSubstring('abca') === 3);
console.log(lengthOfLongestSubstring('abcabcbb') === 3);
console.log(lengthOfLongestSubstring('bbbbb') === 1);
console.log(lengthOfLongestSubstring('pwwkew') === 3);
console.log(lengthOfLongestSubstring('au') === 2);
console.log(lengthOfLongestSubstring('dvdf') === 3);

