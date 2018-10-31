
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

var insertionSort = function (nums) {
  
  for(var i = 1; i < nums.length; i++) {
    var num = nums[i]
    for(var j = i - 1; j >= 0; j--) {
      if (num >= nums[j]) {
        break
      }
      nums[j + 1] = nums[j]
    }
    nums[j + 1] = num
  }
  
  return nums
}

function random (l, u) {

  if (arguments.length === 0) {
    return Math.random();
  } else if (arguments.length === 1) {
    return Math.floor(Math.random() * l)
  } else {
    return Math.floor(Math.random() * (u - l)) + l
  }
}

/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
  // console.log({ N, blacklist });
  
  this.N = N
  this.blacklist = insertionSort(blacklist)
  this.useExcludeAlgo = this.blacklist.length > (this.N * 0.9)
  if (this.useExcludeAlgo) {
    this.notInBlacklistNums = []
    for(var i = 0; i < this.N; i++) {
      if (binarySearch(i, this.blacklist) < 0) {
        this.notInBlacklistNums.push(i)
      }
    }
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  if (this.useExcludeAlgo) {
    return this.excludePick()
  } else {
    return this.normalPick()
  }
};

Solution.prototype.normalPick = function () {
  
  var result, isInBlackList = false
  do {
    result = random(this.N)
    isInBlackList = binarySearch(result, this.blacklist) >= 0
  } while(isInBlackList)
  return result
}

Solution.prototype.excludePick = function () {
  return this.notInBlacklistNums[random(this.notInBlacklistNums.length)]
}


var verify = function (N, blacklist, pickCount) {
 
  var obj = new Solution(N, blacklist)
  for(var i = 0; i < pickCount; i++) {
    obj.pick();
    // console.log(obj.pick());
  }
}

verify(1, [], 3)
verify(2, [], 3)
verify(3, [1], 3)
verify(4, [2], 3)

var _  = require('./util.underscore')

var genRandomNums = function (count, max) {
  return _.range(0, count).map(function () {
    return _.random(0, max)
  })
}
verify(1000000000, genRandomNums(20000, 1000000000), 20000)
verify(20000, _.range(1, 19995), 20000)