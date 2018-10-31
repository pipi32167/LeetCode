/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // var res = go(n)
  var res = 0
  
  while(n > 0) {
    n = Math.floor(n / 5)
    res += n
  }
  return res
};

var search = function (t, l, u) {
  
  if (l > u) {
    return -1
  }
  
  var m = Math.floor((l + u) / 2)
  var mV = trailingZeroes(m)
  // console.log('search', { t, m, mV, l, u });
  if (mV === t) {
    return m
  } else if (mV > t) {
    return search(t, l, m-1)
  } else {
    return search(t, m+1, u)
  }
}

/**
 * @param {number} K
 * @return {number}
 */
var preimageSizeFZF = function(K) {
  
  var MAX = Math.pow(10, 20)
  var count = 0
  var n = search(K, 0, MAX)
  // console.log('search', n);
  
  if (n === -1) {
    return 0
  }
  for(var i = n; i >= 0; i--) {
    var res = trailingZeroes(i)
    if (res === K) {
      // console.log(i);
      count++
    }
    if (res < K && i % 5 !== 0) {
      break
    }
  }
  for(var i = n + 1; i <= MAX; i++) {
    var res = trailingZeroes(i)
    if (res === K) {
      // console.log(i);
      count++
    }
    if (res > K && i % 5 !== 0) {
      break
    }
  }
  return count
};

// console.log(trailingZeroes(1000000000));
console.log(preimageSizeFZF(0), 5);
console.log(preimageSizeFZF(5), 0);
console.log(preimageSizeFZF(1000000), 5);
console.log(preimageSizeFZF(80502705), 0);
console.log(preimageSizeFZF(38995104), 5);
console.log(preimageSizeFZF(1000000000), 5);

