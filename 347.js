
var swap = function (nums, i, j) {
  var tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return nums
  }

  var t = nums[l].count, i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && nums[i].count < t)
    do { j-- } while(nums[j].count > t)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1)
  quickSort3(nums, j + 1, u)
  return nums
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

  var result = {}

  for(var i = 0; i < nums.length; i++) {
    var num = nums[i]
    result[num] = result[num] || { val: num, count: 0 }
    result[num].count++
  }

  result = Object.keys(result).map(function (elem) {
    return result[elem]
  })

  quickSort3(result, 0, result.length - 1)

  return result.reverse().slice(0, k).map(function (elem) {
    return elem.val
  })
};

nums = [1,1,1,2,2,3], k = 2
console.log(topKFrequent(nums, k), [1,2]);
nums = [1], k = 1
console.log(topKFrequent(nums, k), [1]);
nums = [3,0,1,0], k = 1
console.log(topKFrequent(nums, k), [0]);
nums = [4,1,-1,2,-1,2,3], k = 2
console.log(topKFrequent(nums, k), [-1,2]);