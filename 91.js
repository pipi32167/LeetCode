var isValid = function (s, i, j) {
  var part = s.slice(i, j+1)
  // console.log('isValid', part);
  
  if (
    Number(part) <= 0 || 
    Number(part) > 26 || 
    part.length > 1 && (part[0] === '0' || Number(part) === 0) ||
    j >= s.length) {
    return false
  }
  return true
}
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.length === 0) {
    return 0
  }
  if (s[0] === '0') {
    return 0
  }
  var dp = new Array(s.length + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for(var i = 2; i < dp.length; i++) {
    // console.log('isValid', isValid(s, i-2, i-1));
    dp[i] = (isValid(s, i-1, i-1) ? dp[i-1] : 0) + (isValid(s, i-2, i-1) ? dp[i-2] : 0)
  }
  
  return dp[dp.length - 1]
};

console.log(numDecodings('01'), 0);
console.log(numDecodings('0'), 0);
console.log(numDecodings('12'), 2);
console.log(numDecodings('226'), 3);
console.log(numDecodings('10'), 1);
console.log(numDecodings("7541387519572282368613553811323167125532172369624572591562685959575371877973171856836975137559677665"), 1);
