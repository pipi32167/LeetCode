/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  
  if (s.length > t.length) {
    return false
  }
  var j = 0
  for(var i = 0; i < s.length; i++) {
    var hit = false
    while(j < t.length) {
      if (s[i] === t[j++]) {
        hit = true
        break
      }
    }
    if (!hit) {
      return false
    }
  }
  return true
};

console.log(isSubsequence('abc', 'ahbgdc'), true);
console.log(isSubsequence('axc', 'ahbgdc'), false);
