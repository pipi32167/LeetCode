
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
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  quickSort3(nums, 0, nums.length - 1)

  var num = 1, i = 0
  while (i < nums.length) {
    
    if (nums[i] === num) {
      num++
    } else if(nums[i] > num) {
      break
    }
    i++
  }
  return num
};

console.log(firstMissingPositive([1,2,0]), 3);
console.log(firstMissingPositive([3,4,-1,1]), 2);
console.log(firstMissingPositive([7,8,9,11,12]), 1);

