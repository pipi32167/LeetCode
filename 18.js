
var deepEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

var diff = function (arr1, arr2) {
  var results = [];
  for(var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      results.push(arr1[i])
    }
  }
  return results;
}

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

var fourSum = function (nums, target) {
  nums = bubbleSort(nums);
  // console.log(nums);
  var min = nums[0], max = nums[nums.length - 1];
  var tmp = {};
  
  var results = [];
  for (var i = 0; i < nums.length - 3; i++) {
    var num1 = nums[i];
    for (var j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      var num2 = nums[j];
      for(var k = j + 1; k < nums.length - 1; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }
        var num3 = nums[k];
        var num4 = target - num1 - num2 - num3;
        if (num4 > max || num4 < num3) {
          continue;
        }
        // console.log(num4, nums, j + 1, nums.length - 1);
        var num4Idx = binarySearch(num4, nums, k + 1, nums.length - 1);
        if (num4Idx < 0) {
          continue;
        }
        
        var result = [num1, num2, num3, num4];
        var key = result.join(',');
        var found = tmp[key];
        if (!found) {
          results.push(result);
          tmp[key] = true;
        }
      }
    }
  }
  return results;
  // return results.length;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
