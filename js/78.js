
var genIdxGroups = function (len, prefix, result) {
  // console.log('genIdxGroups', prefix);
  result.push(prefix)

  var begin
  if (prefix.length === 0) {
    begin = 0
  } else {
    begin = prefix[prefix.length - 1] + 1
  }
  for(var i = begin; i < len; i++) {
    
    genIdxGroups(len, prefix.concat(i), result)
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  
  var result = []
  genIdxGroups(nums.length, [], result)
  return result.map(function (elem) {
    return elem.map(function(idx) {
      return nums[idx]
    })
  })
};

console.log(subsets([1,2,3]));
