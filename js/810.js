/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function(nums) {

  // console.log({nums});
  var res = nums.reduce(function (res, elem) {
    return res ^ elem
  }, 0)
  
  var i = 0 //偶数时为小红
  while(true) {

    if (res === 0) {
      break
    }

    var hit = false
    for(var j = 0; j < nums.length; j++) {
      var num = nums[j]
      // console.log({ res, num: nums[j], newRes: res ^ nums[j] });
      if ((res ^ nums[j]) !== 0) {
        // console.log('before', { i, num, res, nums });
        res ^= num
        nums.splice(j, 1)
        // console.log('after ', { i, num, res, nums });
        hit = true
        break
      }
    }

    if (!hit) {
      // console.log('before', { i, num, res, nums });
      var num = nums.shift()
      res ^= num
      // console.log('after ', { i, num, res, nums });
    }
    
    i++
  }

  return i % 2 === 0
};


console.log(xorGame([1, 1, 2]), false);
console.log(xorGame([1,2,3]), true);
console.log(xorGame([1,0,0,1,1,1,1,1,1,0]), true);
