/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
  
  var dp = new Array(N + 1).fill(0)
  var res = 0
  for(var i = 1; i <= N; i++) {
    res += i
    dp[i] = res
  }
  var count = 0
  for(var i = 0; i <= N; i++) {
    for(var j = i+1; j <= N; j++) {
      var sub = dp[j] - dp[i]
      if (sub === N) {
        count++
      } else if (sub > N) {
        break
      }
    }
  }
  return count
};

/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
  
  var count = 0
  for(var i = 1; i <= N; i++) {
    var t = i * (i + 1) / 2
    if (N < t) {
      break
    }
    if((N - t) % i === 0) {
      count++
    }
  }
  return count
};

console.log(consecutiveNumbersSum(5) === 2);
console.log(consecutiveNumbersSum(9) === 3);
console.log(consecutiveNumbersSum(15) === 4);
console.log(consecutiveNumbersSum(256) === 1);
console.log(consecutiveNumbersSum(1000000000) , 4);