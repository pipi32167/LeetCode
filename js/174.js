
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  var m = dungeon.length, n = dungeon[0].length
  var dp = new Array(m+1).fill(0)
  var max = Math.pow(2,31)
  for(var i = 0; i < m; i++) {
    dp[i] = dungeon[i].slice(0).concat([max])
  }
  dp[i] = new Array(n+1).fill(max)

  dp[m][n-1] = 1
  dp[m-1][n] = 1
  for(var i = m-1; i >= 0; i--) {
    for(var j = n-1; j >= 0; j--) {
      var need = Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j]
      dp[i][j] = need <= 0 ? 1 : need
    }
  }
  // console.log({ dp });
  var minHp = dp[0][0]
  return minHp
};

console.log(calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
]), 7);

console.log(calculateMinimumHP([
  [-3,5]
]), 4);

console.log(calculateMinimumHP([
  [-2],
  [-5],
  [10],
]), 8);

console.log(calculateMinimumHP([
  [1,-3,3],
  [0,-2,0],
  [-3,-3,-3],
]), 3);

// console.log(calculateMinimumHP(require('./174_input')));
// console.log(calculateMinimumHP(require('./174_input2')));
// console.log('len', arr.length, arr[0].length);
// console.log({ count1, count2, percent: count2/count1 });

