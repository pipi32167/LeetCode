
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
  dp[1] = s[0] === '*' ? 9 : 1
  for(var i = 2; i < dp.length; i++) {
    // console.log('isValid', isValid(s, i-2, i-1));
    dp[i] = 0
    if (s[i-1] !== '0') {
      dp[i] += s[i-1] === '*' ? 9 * dp[i-1] : dp[i-1]
    }
    if ('*12'.indexOf(s[i-2]) >= 0) {
      var part = s.slice(i-2, i)
      if (part[0] === '*' && part[1] === '*') {
        dp[i] += 15 * dp[i-2]
      } else if (part[0] === '*' && part[1] !== '*') {
        var num = Number(part[1])
        if (num > 6) {
          dp[i] += dp[i-2]
        } else {
          dp[i] += 2 * dp[i-2]
        }
      } else if (part[0] !== '*' && part[1] === '*') {
        if (part[0] === '1') {
          dp[i] += 9 * dp[i-2]
        } else if (part[0] === '2') {
          dp[i] += 6 * dp[i-2]
        }
      } else if(Number(part) <= 26) {
        dp[i] += dp[i-2]
      }
    }
    dp[i] %= (Math.pow(10, 9) + 7)
  }
  // console.log(dp);
  return dp[dp.length - 1]
};

console.log(numDecodings('01'), 0);
console.log(numDecodings('0'), 0);
console.log(numDecodings('1'), 1)
console.log(numDecodings('27'), 1);
console.log(numDecodings('12'), 2);
console.log(numDecodings('226'), 3);
console.log(numDecodings('10'), 1);
console.log(numDecodings('2261'), 3);
console.log(numDecodings("7541387519572282368613553811323167125532172369624572591562685959575371877973171856836975137559677665"), 1769472);
console.log(numDecodings('*'), 9);
console.log(numDecodings('1*'), 18);
console.log(numDecodings('3*'), 9);
console.log(numDecodings('*1'), 11);
console.log(numDecodings('*7'), 10);
console.log(numDecodings('**'), 96);
console.log(numDecodings('1*7'), 19);
console.log(numDecodings('*17'), 20);
console.log(numDecodings('*27'), 11);
console.log(numDecodings('11*'), 27);
console.log(numDecodings('12*'), 24);
console.log(numDecodings('10*'), 9);
console.log(numDecodings('13*'), 18);
console.log(numDecodings('***'), 999);
console.log(numDecodings('****'), 10431);
console.log(numDecodings('*****'), 108864);
console.log(numDecodings('******'), 1136241);
console.log(numDecodings('*******'), 11859129);
console.log(numDecodings('********'), 123775776);
console.log(numDecodings("*********"), 291868912);
console.log(numDecodings("********************"), 104671669);