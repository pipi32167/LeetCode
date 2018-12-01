var assert = require('assert')

var _  = require('./util.underscore')

var genRandomNums = function (count) {
  return _.range(0, count).map(function () {
    return _.random(0, 10000)
  })
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

// console.log(bubbleSort([]));
// console.log(bubbleSort([2,1]));
// console.log(bubbleSort([5,4,3,2,1]));
// console.log(bubbleSort([1,2,3,4,5]));
// console.log(bubbleSort([1,2,3,5,4]));
// bubbleSort(_.range(1, 250000).reverse())

var doQuickSort = function (nums, l, u) {
  if (l >= u) {
    return;
  }

  // console.log('doQuickSort', nums, l, u);
  var m = l;
  for(var i = l + 1; i <= u; i++) {
    if (nums[i] < nums[l]) {
      ++m;
      if (m !== i) {
        // console.log('swap1 before', nums);
        swap(nums, m, i)
        // console.log('swap1 after ', nums, m, i);
      }
    }
  }
  if (l !== m) {
    // console.log('swap2 before', nums);
    swap(nums, l, m);
    // console.log('swap2 after ', nums, l, m); 
  }
  
  doQuickSort(nums, l, m-1)
  doQuickSort(nums, m+1, u)
}

var quickSort = function (nums) {
  
  doQuickSort(nums, 0, nums.length - 1);
  return nums;
}

// console.log(quickSort([5,4,3,2,1]));
// console.log(quickSort([1,2,3,4,5]));
// console.log(quickSort([5,3,1,2,4]));
// console.log(quickSort([4,5,2,1,3]));
// quickSort(_.range(1, 20000))

var quickSort3 = function (nums, l, u, cmpFn = (a, b) => a - b) {
  if (l >= u) {
    return nums
  }

  var t = nums[l], i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && cmpFn(nums[i], t) < 0)
    do { j-- } while(cmpFn(nums[j], t) > 0)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1, cmpFn)
  quickSort3(nums, j + 1, u, cmpFn)
  return nums
}

// console.log(quickSort3([5], 0, 0));
// console.log(quickSort3([5,4,3,2,1], 0, 4));
// console.log(quickSort3([1,2,3,4,5], 0, 4));
// console.log(quickSort3(_.range(0, 250001).reverse(), 0, 250000));
// console.log(quickSort3([5,4,3,4,3,5,2,1], 0, 7));

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


// console.log(insertionSort([]));
// console.log(insertionSort([1]));
// console.log(insertionSort([5,4,3,2,1]));
// console.log(insertionSort([1,2,3,4,5]));
// console.log(insertionSort([5,3,1,2,4]));
// console.log(insertionSort([4,5,2,1,3]));
// console.log(insertionSort([1,1,1,1,1]));
// console.log(insertionSort([5,1,1,1,1]));
// insertionSort(_.range(1, 20000))

var bucketSort = function (nums, bucketSize) {

  if (nums.length <= 1) {
    return nums
  }
  
  var minVal = nums[0]
  var maxVal = nums[0]
  for(var i = 0; i < nums.length; i ++) {
    if (maxVal < nums[i]) {
      maxVal = nums[i]
    }
    if (minVal > nums[i]) {
      minVal = nums[i]
    }
  }

  var DEFAULT_BUCKET_SIZE = 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE
  var bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1
  // console.log(bucketCount);
  
  var buckets = new Array(bucketCount)
  for(var i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }

  for(var i = 0; i < nums.length; i++) {
    var bucket = buckets[Math.floor((nums[i] - minVal) / bucketSize)]
    bucket.push(nums[i])
  }

  var result = []
  for(var i = 0; i < bucketCount; i ++) {
    var bucket = buckets[i]
    quickSort(bucket)
    for(var j = 0; j < bucket.length; j++) {
      result.push(bucket[j])
    }
  }
  return result
}


var merge = function (left, right) {
  const final = []
  while(left.length && right.length) {
    final.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  return final.concat(left).concat(right)
}

var mergeSort = function (nums) {
  if (nums.length < 2) {
    return nums
  }
  const mid = parseInt(nums.length / 2)
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)))
}

assert.deepEqual(mergeSort([]), []);
assert.deepEqual(mergeSort([1]), [1]);
assert.deepEqual(mergeSort([5,4,3,2,1]), [1,2,3,4,5]);
assert.deepEqual(mergeSort([1,2,3,4,5]), [1,2,3,4,5]);
assert.deepEqual(mergeSort([5,3,1,2,4]), [1,2,3,4,5]);
assert.deepEqual(mergeSort([4,5,2,1,3]), [1,2,3,4,5]);
assert.deepEqual(mergeSort([1,1,1,1,1]), [1,1,1,1,1]);
assert.deepEqual(mergeSort([5,1,1,1,1]), [1,1,1,1,5]);

var calcAlgoTimeImpl = function (sortFn, count) {
  
  var nums = genRandomNums(count);
  console.log('%s begin, count: %d', sortFn.name, count);
  var now = Date.now();
  sortFn(nums)
  console.log('%s end, cost %d ms', sortFn.name, Date.now() - now);
}

var calcAlgoTime = function (count) {

  // calcAlgoTimeImpl(bubbleSort, count)
  // calcAlgoTimeImpl(insertionSort, count)
  calcAlgoTimeImpl(quickSort, count)
  calcAlgoTimeImpl(bucketSort, count)
  calcAlgoTimeImpl(mergeSort, count)
}

// calcAlgoTime(100)
// calcAlgoTime(100000)
// calcAlgoTime(2000000)
// calcAlgoTime(10000000)

var verifyAlgo = function (sortFn) {
  console.log(sortFn([]));
  console.log(sortFn([1]));
  console.log(sortFn([5,4,3,2,1]));
  console.log(sortFn([1,2,3,4,5]));
  console.log(sortFn([5,3,1,2,4]));
  console.log(sortFn([4,5,2,1,3]));
  console.log(sortFn([1,1,1,1,1]));
  console.log(sortFn([5,1,1,1,1]));
  var nums = genRandomNums(1000)
  var result = sortFn(nums)
  for(var i = 0; i < result.length - 1; i++) {
    assert.ok(result[i] <= result[i + 1])
  }
}

// verifyAlgo(quickSort)
// verifyAlgo(bucketSort)
