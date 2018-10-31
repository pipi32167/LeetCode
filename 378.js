
var unique = function (nums) {

  var numsCount = {}
  var result = []
  for(var i = 0; i < nums.length; i++) {
    if (numsCount[nums[i]] === undefined) {
      numsCount[nums[i]] = 1
      result.push(nums[i])
    } else {
      numsCount[nums[i]] ++
    }
  }
  
  return result
}


var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return nums
  }

  var t = nums[l], i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && nums[i] < t)
    do { j-- } while(nums[j] > t)
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

var sort = function (nums) {
  return quickSort3(nums, 0, nums.length - 1)
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  var nums = []
  for(var i = 0; i < matrix.length; i ++) {
    for(var j = 0; j < matrix[i].length; j ++) {
      nums.push(matrix[i][j])
    }
  }
  nums = sort(nums)
  return nums[k - 1]
};

var matrix = [
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
], k = 8
console.log(kthSmallest(matrix, k), 13);
var matrix = [[-5]], k = 1
console.log(kthSmallest(matrix, k), -5);
