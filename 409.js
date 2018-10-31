/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
  var chars = {}
  for(var i = 0; i < s.length; i++) {
    var c = s[i]
    chars[c] = chars[c] || 0
    chars[c]++
  }

  var len = 0
  for(var c in chars) {
    if (chars[c] % 2 === 0) {
      len += chars[c]
    } else {
      len += chars[c] - 1
    }
  }
  if (len < s.length) {
    len ++
  }
  return len
};

var s = 'aaabccccdd'
console.log(longestPalindrome(s), 9);
