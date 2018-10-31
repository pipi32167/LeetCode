var findMatchGroup = function (nums, len) {
  
  for(var i = 0; i < nums.length; i++) {
    if (nums[i] <= len) {
      
    }
  }
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
  
  var sum = nums.reduce(function (memo, elem) {
    return memo + elem
  }, 0)
  var sideLen = sum / 4
  if (sideLen !== Math.floor(sideLen)) {
    return false
  }

  var matchCount = 0
  while(matchCount < 4) {

    var idxes = findMatchGroup(nums, sideLen)
    if (!idxes) {
      return false
    }

    nums = nums.filter(function (elem, idx) {
      return idxes.indexOf(idx) >= 0
    })
    matchCount++
  }

  return true
};