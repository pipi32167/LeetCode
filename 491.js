
var flatten = function (arr) {
  var results = [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      results = results.concat(arr[i])
    } else {
      results.push(arr[i])
    }
  }
  return results;
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  
  if (nums.length <= 1) {
    return []
  }

  var result = [nums.map(function (elem, idx) {
      return {
        nums: [elem],
        lastIdx: idx,
      }
  })]

  // console.log('%j', result);

  var cache = {}
  for(var i = 0; i < nums.length; i++) {
    var arr = result[i]
    result[i + 1] = []
    for(var j = 0; j < arr.length; j++) {
      var elem = arr[j].nums
      var arrLastIdx = arr[j].lastIdx
      var last = elem[elem.length - 1]
      // console.log({elem, last});
      for(var k = arrLastIdx + 1; k < nums.length; k++) {
        if (nums[k] >= last) {
          var newArr = elem.concat(nums[k])
          var key = newArr.join(',')
          if (cache[key]) {
            continue
          }
          cache[key] = true
          result[i + 1].push({
            nums: newArr,
            lastIdx: k,
          })
        }
      }
    } 

    // console.log(result[i+1]);
  }

  result = flatten(result.slice(1)).map(function (elem) {
    return elem.nums
  })

  return result
};

console.log(findSubsequences([]));
console.log(findSubsequences([4]));
console.log(findSubsequences([4, 6]));
console.log(findSubsequences([4, 6, 7, 7]));
console.log(findSubsequences([4,3,2,1]));
console.log(findSubsequences([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1]));
console.log(findSubsequences([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]));

