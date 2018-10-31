var go = function (num, result, l, u) {
  
  if(l > u) {
    return -1
  }
  
  var m = Math.floor((l + u) / 2)
  if (m === num) {
    return m
  }
  
  result.push(m)

  if (m > num) {
    return go(num, result, l, m - 1)
  } else {
    return go(num, result, m + 1, u)
  }
}


/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {

  var maxMoney = 0
  for(var i = 1; i <= n; i++) {
    var result = []
    go(i, result, 1, n)
    var money = result.reduce(function (memo, elem) {
      return memo + elem
    }, 0)
    console.log({ i, money, result });
    maxMoney = Math.max(maxMoney, money)
  }
  return maxMoney
};

// console.log(getMoneyAmount(1));
// console.log(getMoneyAmount(2));
console.log(getMoneyAmount(4));
// console.log(getMoneyAmount(10));
