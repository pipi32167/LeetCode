var includes = function (items, item) {
  for(var i = 0; i < items.length; i++) {
    var elem = items[i]
    if (elem.length !== item.length) {
      continue
    }
    for(var j = 0; j < item.length; j++) {
      if (elem[j] !== item[j]) {
        break
      }
    }

    if (j === item.length) {
      return true
    }
  }
  return false
}

// console.log(includes([[1,2]], [1,2]));
// console.log(includes([[1,2]], [2,2]));
// console.log(includes([[]], []));
// console.log(includes([[]], [1]));
// console.log(includes([[1]], []));

var genGroups = function (nums, prefix, result) {
  // console.log('genGroups', prefix);
  var group = prefix.map(function (elem) {
    return nums[elem]
  }).sort(function (a, b) {
    return a - b
  })
  // console.log({ result, group });
  
  if (!includes(result, group)) {
    result.push(group)
  }

  var begin
  if (prefix.length === 0) {
    begin = 0
  } else {
    begin = prefix[prefix.length - 1] + 1
  }
  for(var i = begin; i < nums.length; i++) {
    
    genGroups(nums, prefix.concat(i), result)
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  
  var result = []
  genGroups(nums, [], result)
  return result
};

console.log(subsetsWithDup([1,2,2]));
console.log(subsetsWithDup([2,2,1,2]));
