
var binarySearch = function (item, arr, begin, end) {

  if (arr.length === 0) {
    return -1;
  }
  
  if (begin == null) {
    begin = 0;
    if (arr[begin] > item) {
      return -1;
    }
  }
  if (end == null) {
    end = arr.length - 1;
    if (arr[end] < item) {
      return -1;
    }
  }
  if (arr[begin] === item) {
    return begin;
  }
  if (arr[end] === item) {
    return end;
  }
  var mid = Math.floor((begin + end) / 2);
  if (begin === mid) {
    return -1;
  }
  if (arr[mid] === item) {
    return mid;
  } else if (arr[mid] > item) {
    return binarySearch(item, arr, begin, mid - 1);
  } else if (arr[mid] < item) {
    return binarySearch(item, arr, mid + 1, end);
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
  var pos = binarySearch(target, nums);
  
  if (pos === -1) {
    return [-1, -1];
  }

  var begin = pos;
  while (nums[begin] === target) {
    begin--;
  }

  var end = pos;
  while (nums[end] === target) {
    end++;
  }
  return [begin + 1, end - 1];
};



console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([], 8));
console.log(searchRange([8], 8));
