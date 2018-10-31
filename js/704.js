
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
 * @return {number}
 */
var search = function(nums, target) {
  
  return binarySearch(target, nums, 0, nums.length - 1)
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
