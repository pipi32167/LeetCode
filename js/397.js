var go = function (n) {
  if (n === 1) {
    return 0
  }
  
  var res
  if(n % 2 === 0) {
    res = 1 + go(n / 2)
  } else {
    res = 1 + Math.min(go(n+1), go(n-1))
  }

  // console.log({n, res});
  return res
}

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    
  return go(n)
};

console.log(integerReplacement(8), 3);
console.log(integerReplacement(7), 4);
