
var selectMin = function (num, idxGroup) {

  var ranges = [-1].concat(idxGroup).concat([num.length])
  for(var i = ranges.length - 1; i > 0; i--) {
    var begin = ranges[i-1] + 1, end = ranges[i] - 1
    var min = begin
    // console.log({ ranges, begin, end });
    for(var j = begin; j <= end; j++) {
      // console.log({begin, end, min, 'num[min]': num[min], j, 'num[j]': num[j]});
      if (num[min] > num[j]) {
        min = j
      }
    }
    if (end >= begin && min >= 0 && min < num.length) {
      idxGroup = idxGroup.slice(0)
      idxGroup.splice(i-1, 0, min)
      return idxGroup
    }
  }
  console.log('error!!!')
}

// console.log(selectMin('0123456', []), [0]);
// console.log(selectMin('0123456', [0]), [0,1]);
// console.log(selectMin('1432219', []), [0]);
// console.log(selectMin('1432219', [0]), [0, 5]);
// console.log(selectMin('1432219', [0, 5]), [0, 5, 6]);
// console.log(selectMin('1432219', [0, 5, 6]), [0, 3, 5, 6]);
// console.log(selectMin('1432219', [0, 3, 5, 6]), [0, 3, 4, 5, 6]);
// console.log(selectMin('1432219', [0, 3, 4, 5, 6]), [0, 2, 3, 4, 5, 6]);

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length <= k) {
    return '0'
  }
  
  var len = num.length - k
  var dp = new Array(len+1).fill(0).map(() => []) 
  for(var i = 1; i < len+1; i++) {
    // console.log({ num, idxgroup: dp[i-1] });
    dp[i] = selectMin(num, dp[i-1])
    dp[i-1] = []
  }
  // console.log({dp});
  var res = dp[len].map(function (idx) {
    return num[idx]
  })
  // console.log({ res });
  
  while (res[0] === '0' && res.length > 1) {
    res.shift()
  }
  return res.join('')
};

console.log(removeKdigits('1432219', 1), '132219');
console.log(removeKdigits('1432219', 2), '12219');
console.log(removeKdigits('1432219', 3), '1219');
console.log(removeKdigits('1432219', 4), '119');
console.log(removeKdigits('1432219', 5), '11');
num = "10200", k = 1
console.log(removeKdigits(num, k), '200');
num = "10", k = 2
console.log(removeKdigits(num, k), '0');
num = "10", k = 1
console.log(removeKdigits(num, k), '0');
var { num, k, result } = require('./402_input')
console.log(removeKdigits(num, k) === result);
// var { num, k, result } = require('./402_input2')
// console.log(num.length);
// console.log(removeKdigits(num, k) === result);