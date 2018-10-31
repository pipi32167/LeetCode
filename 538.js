

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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  quickSort3(nums, 0, nums.length - 1)
  var result = []
  for(var i = 1; i < nums[0]; i++) {
    // console.log('add 1', i);
    result.push(i)
  }
  for(var i = 1; i < nums.length; i++) {

    var j = 1
    while (nums[i-1] + j < nums[i]) {
      // console.log('add 2', nums[i-1] + j);
      result.push(nums[i-1] + j)
      j++
    }
  }
  for(var i = nums[nums.length - 1] + 1; i <= nums.length; i++) {
    // console.log('add 3', i);
    result.push(i)
  }
  
  return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]), [5,6]);
console.log(findDisappearedNumbers([1,1]), [2]);
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]), [5,6]);
