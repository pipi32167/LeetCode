/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
    
  var numCounts = new Array(10).fill(0), nums = []
  while(N > 0) {
    var num = N % 10
    nums.push(num)
    numCounts[num]++
    N = Math.floor(N / 10)
  }

  var max = Number(new Array(nums.length).fill(9).join(''))
  var min = Number(new Array(nums.length - 1).fill(9).join('')) + 1
  // console.log(max, min);

  var num = 1
  while(num <= max) {
    // console.log({num, min, max});
    
    if (num >= min && num <= max) {
      var numCounts2 = new Array(10).fill(0)
      var res = num
      while(res > 0) {
        numCounts2[res % 10]++
        res = Math.floor(res / 10)
      }
      // console.log({N, min, max, res, numCounts, numCounts2});
      for(var i = 0; i <= 9; i++) {
        if (numCounts[i] !== numCounts2[i]) {
          break
        }
      }
      if (i === 10) {
        return true
      }
    }
    num *= 2
  }

  return false
};

console.log(reorderedPowerOf2(1), true);
console.log(reorderedPowerOf2(10), false);
console.log(reorderedPowerOf2(697), false);
console.log(reorderedPowerOf2(6970), false);
console.log(reorderedPowerOf2(46), true);
console.log(reorderedPowerOf2(64), true);
console.log(reorderedPowerOf2(265), true);
console.log(reorderedPowerOf2(263), false);
console.log(reorderedPowerOf2(1234567890), false);
