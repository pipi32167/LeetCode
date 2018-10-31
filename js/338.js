var doCountBits = function (i) {
  var count = 0  
  while(i > 0) {
    if (i & 1) {
      count++
    }
    i >>= 1
  }
  return count
}

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  
  var result = [0], n = 1
  for(var i = 1; i <= num; i++) {
    if ((n << 1) < i) {
      n <<= 1
    }
    // console.log({ i, n, result, res: result[i % n] });
    result.push(1 + result[i % n])
  }
  return result
};

console.log(countBits(2), [0,1,1]);
console.log(countBits(5), [0,1,1,2,1,2]);
console.log(countBits(16));
countBits(10000000)
