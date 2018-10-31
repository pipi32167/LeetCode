
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

var binarySearch = function (t, nums, l, u) {

  if (nums.length === 0) {
    return -1;
  }
  
  if (l == null) {
    l = 0;
    if (nums[l] > t) {
      return -1;
    }
  }
  if (u == null) {
    u = nums.length - 1;
    if (nums[u] < t) {
      return -1;
    }
  }
  if (nums[l] === t) {
    return l;
  }
  if (nums[u] === t) {
    return u;
  }
  var mid = Math.floor((l + u) / 2);
  if (l === mid) {
    return -1;
  }
  if (nums[mid] === t) {
    return mid;
  } else if (nums[mid] > t) {
    return binarySearch(t, nums, l, mid - 1);
  } else if (nums[mid] < t) {
    return binarySearch(t, nums, mid + 1, u);
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  quickSort3(nums, 0, nums.length - 1)
  var result = []
  for (var i = 1; i < nums.length; i++) {
    if (nums[i-1] === nums[i]) {
      result.push(nums[i])
    }
  }
  return result
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1]));
