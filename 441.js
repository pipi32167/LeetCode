var calc = function (num) {
  return num * (num + 1) / 2
}

var go = function (n, l, u) {
  
  if (l > u) {
    return -1
  }

  var mid = Math.floor((l + u) / 2)
  var midValue = calc(mid)
  // console.log({ mid, midValue });
  
  if (mid === l && l + 1 === u) {
    return mid
  }
  if (midValue === n) {
    return mid
  } else if (midValue > n) {
    return go(n, l, mid)
  } else {
    return go(n, mid, u)
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return go(n, 1, n)
};
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var arrangeCoins = function(n) {
  
//   var sum = 0
//   var i = 0
//   va
//   while(sum <= n) {
//     i++
//     sum += i
//   }
//   return i - 1
// };

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(9));
console.log(arrangeCoins(10));
console.log(arrangeCoins(Math.pow(2, 31)));
