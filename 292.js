/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n, cache = {}) {
  if (n <= 3) {
    return true
  }
  if (cache[n] !== undefined) {
    return cache[n]
  }

  var res = !canWinNim(n-3, cache) || !canWinNim(n-2, cache) || !canWinNim(n-1, cache)
  cache[n] = res
  return res
};
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  
  return n % 4 !== 0
};

for(var i = 1; i <= 20; i++) {
  console.log(i, canWinNim(i));
}
// console.log(canWinNim(43), true);
// console.log(canWinNim(1348820612), true);
