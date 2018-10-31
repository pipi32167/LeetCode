var go = function (n, k, num, prefix, prefixSum, results) {
  
  if (prefixSum === n && prefix.length === k) {
    results.push(prefix.slice(0))
    return
  }

  if (prefix.length >= k || prefixSum >= n) {
    return
  }

  for(var i = num + 1; i <= 9; i++) {
    prefix.push(i)
    go(n, k, i, prefix, prefixSum + i, results)
    prefix.pop()
  }
}

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var res = 0
  for(var i = 1; i <= 9; i ++) {
    res += i
  }
  if (i < n) {
    return []
  }
  
  var results = []
  go(n, k, 0, [], 0, results)
  return results
};

console.log(combinationSum3(3, 7), [[1,2,4]]);
console.log(combinationSum3(3, 9), [[1,2,6], [1,3,5], [2,3,4]]);
// console.log(combinationSum3(3, 10000).length);
console.log(combinationSum3(2, 18), []);
