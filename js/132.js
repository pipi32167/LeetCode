var isMatch = function (s, i, j, cache) {
  while(i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++,j--
  }
  return true
}

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {

  var len = s.length
  var isPalindrome = new Array(len).fill(0).map(() => new Array(len).fill(false))
  for (var i = 0; i < len; i++) {
    var elem = isPalindrome[i]
    for(var j = i; j < len; j++) {
      isPalindrome[i][j] = isMatch(s, i, j)
    }
  }

  var dp = new Array(len).fill(0).map(() => new Array(len).fill(s.length))

  var step = 0
  while(step < len) {
    for (var i = 0; i < len-step; i++) {
      var j = i+step
      if (isPalindrome[i][j]) {
        dp[i][j] = 0
      } else {
        for(var k = 0; k < step; k++) {
          dp[i][j] = Math.min(dp[i][j], dp[i][i+k] + dp[i+k+1][j] + 1)
        }
      }
      // console.log({ i, j, dp: dp[i][j] });
    }
    step ++
  }
  // console.log(dp);
  return dp[0][len-1]
};

console.log(minCut('aab'), 1);
console.log(minCut('aaba'), 1);
console.log(minCut('aabaa'), 0);
console.log(minCut('aabaaba'), 1);
console.log(minCut('aabaabacdefg'), 6);
var s = 'ffmmo'
console.log(minCut(s), 2);
// console.log(minCut2(s), 2);
var s = "apjesgpsxoeiokmqmfgvjslcjukbqxpsobyhjpbgdfruqdkeiszrlmtwgfxyfostpqczidfljwfbbrflkgdvtytbgqalguewnhvvmcgxboycffopmtmhtfizxkmeftcucxpobxmelmjtuzigsxnncxpaibgpuijwhankxbplpyejxmrrjgeoevqozwdtgospohznkoyzocjlracchjqnggbfeebmuvbicbvmpuleywrpzwsihivnrwtxcukwplgtobhgxukwrdlszfaiqxwjvrgxnsveedxseeyeykarqnjrtlaliyudpacctzizcftjlunlgnfwcqqxcqikocqffsjyurzwysfjmswvhbrmshjuzsgpwyubtfbnwajuvrfhlccvfwhxfqthkcwhatktymgxostjlztwdxritygbrbibdgkezvzajizxasjnrcjwzdfvdnwwqeyumkamhzoqhnqjfzwzbixclcxqrtniznemxeahfozp"
console.log(minCut(s), 452);
var s = "adabdcaebdcebdcacaaaadbbcadabcbeabaadcbcaaddebdbddcbdacdbbaedbdaaecabdceddccbdeeddccdaabbabbdedaaabcdadbdabeacbeadbaddcbaacdbabcccbaceedbcccedbeecbccaecadccbdbdccbcbaacccbddcccbaedbacdbcaccdcaadcbaebebcceabbdcdeaabdbabadeaaaaedbdbcebcbddebccacacddebecabccbbdcbecbaeedcdacdcbdbebbacddddaabaedabbaaabaddcdaadcccdeebcabacdadbaacdccbeceddeebbbdbaaaaabaeecccaebdeabddacbedededebdebabdbcbdcbadbeeceecdcdbbdcbdbeeebcdcabdeeacabdeaedebbcaacdadaecbccbededceceabdcabdeabbcdecdedadcaebaababeedcaacdbdacbccdbcece"
console.log(minCut(s), 273);