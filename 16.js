

var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var bubbleSort = function (arr, cmpFn) {
  cmpFn = cmpFn || function (a, b) {
    return a > b;
  }
  
  var end = arr.length;
  while (end > 1) {
    var isSwap = false;
    for(var i = 1; i < end; i++) {
      if (cmpFn(arr[i-1], arr[i])) {
        isSwap = true;
        swap(arr, i-1, i);
      }
    } 
    if (!isSwap) {
      break;
    }
    end --;
  }
  return arr;
}

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
    return binarySearch(item, arr, begin, mid);
  } else if (arr[mid] < item) {
    return binarySearch(item, arr, mid, end);
  }
}

var findClosest = function (item, nums, begin, end) {
  if (begin == null) {
    begin = 0;
  }
  if (end == null) {
    end = nums.length - 1;
  }

  if (begin === end) {
    return nums[begin];
  }

  if (item <= nums[begin]) {
    return nums[begin];
  }

  if (item >= nums[end]) {
    return nums[end];
  }
  
  for(var i = begin + 1; i <= end; i++) {
    if (nums[i] === item) {
      return nums[i];
    } else if (nums[i] > item) {
      if (Math.abs(item - nums[i]) < Math.abs(item - nums[i-1])) {
        return nums[i];
      } else {
        return nums[i-1];
      }
    }
  }
}

// console.log(findClosest(0, [1]));
// console.log(findClosest(1, [1]));
// console.log(findClosest(2, [1]));
// console.log('//////');
// console.log(findClosest(0, [1,2]));
// console.log(findClosest(1, [1,2]));
// console.log(findClosest(1.5, [1,2]));
// console.log(findClosest(2, [1,2]));
// console.log(findClosest(3, [1,2]));
// console.log('//////');
// console.log(findClosest(0, [1,2,3,4]));
// console.log(findClosest(1, [1,2,3,4]));
// console.log(findClosest(2, [1,2,3,4]));
// console.log(findClosest(2.5, [1,2,3,4]));
// console.log(findClosest(5, [1,2,3,4]));


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = bubbleSort(nums);
  console.log(nums);
  
  var min = nums[0], max = nums[nums.length - 1];
  
  var result;
  for (var i = 0; i < nums.length - 2; i++) {
    var num1 = nums[i];
    for (var j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      var num2 = nums[j];
      var num3 = target - num1 - num2;
      // console.log(num3, nums, j + 1, nums.length - 1);
      var num3Closest = findClosest(num3, nums, j + 1, nums.length - 1);
      // console.log('num3Closest', num1, num2, num3Closest);
      
      var result2 = num1 + num2 + num3Closest
      if (result == null || Math.abs(target - result) > Math.abs(target - result2)) {
        result = result2;
      }
    }
  }
  return result;
}

console.log(threeSumClosest([-1,2,1,-4], 1));
