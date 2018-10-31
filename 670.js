

var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  var nums = num.toString().split('').map(Number)
  
  for(var i = 0; i < nums.length; i++) {
    var max = nums[i], maxIdx = -1
    for(var j = nums.length - 1; j > i; j--) {
      if (max < nums[j]) {
        max = nums[j]
        maxIdx = j
      }
    }
    if (maxIdx !== -1) {
      swap(nums, i, maxIdx)
      break
    }
  }
  return Number(nums.join(''))
};

console.log(maximumSwap(2736), 7236);
console.log(maximumSwap(9973), 9973);
console.log(maximumSwap(21), 21);
console.log(maximumSwap(1993), 9913);
