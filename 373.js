
var swap = function (nums, i, j) {
  var tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return nums
  }

  var t = nums[l].value, i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && nums[i].value < t)
    do { j-- } while(nums[j].value > t)
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

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @param {number} k
//  * @return {number[][]}
//  */
// var kSmallestPairs = function(nums1, nums2, k) {
  
//   var result = []
//   for(var i = 0; i < nums1.length; i ++) {
//     for(var j = 0; j < nums2.length; j ++) {
//       result.push({
//         i: i, 
//         j: j,
//         value: nums1[i] + nums2[j]
//       })
//     }
//   }

//   quickSort3(result, 0, result.length - 1)
//   return result.slice(0, k).map(function (elem) {
//     return [nums1[elem.i], nums2[elem.j]]
//   })
// };

var validate = function (heap) {
  return
  for(var i = 1; i < heap.length; i++) {
    if (2 * i < heap.length && heap[i].value > heap[2 * i].value || 
        (2 * i + 1) < heap.length && heap[i].value > heap[2 * i + 1].value) {
      throw new Error('invalid heap: ' + JSON.stringify(heap) + ', i:' + i)
    }
  }
}

var siftup = function (heap) {
  var i = heap.length - 1
  while(i !== 1) {
    // console.log({ i });
    var p = Math.floor(i / 2)
    if (heap[p].value < heap[i].value) {
      break
    }
    swap(heap, i, p)
    i = p
  }
  validate(heap)
}

var siftdown = function (heap) {
  var i = 1
  while(true) {
    var c = i * 2
    if (c >= heap.length) {
      break
    }
    if (c+1 < heap.length) {
      // console.log({c, len: heap.length, heap});
      if (heap[c+1].value < heap[c].value) {
        c++
      }
    }
    if (heap[i].value < heap[c].value) {
      break
    }
    swap(heap, i, c)
    i = c
  }
  validate(heap)
  return heap
}

var insert = function (heap, n) {
  heap.push(n)
  siftup(heap)
  return heap
}

var deque = function (heap) {
  
  if(heap.length < 2) {
    return
  } else if (heap.length === 2) {
    return heap.pop()
  }

  var res = heap[1]
  heap[1] = heap.pop()
  siftdown(heap)
  return res
}


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  
  var heap = [0]
  for(var i = 0; i < nums1.length; i ++) {
    for(var j = 0; j < nums2.length; j ++) {
      insert(heap, {
        i: i, 
        j: j,
        value: nums1[i] + nums2[j]
      })
    }
  }

  // console.log(heap);
  
  var result = []
  while (result.length < k && heap.length > 1) {
    result.push(deque(heap))
  }

  return result.map(function (elem) {
    return [nums1[elem.i], nums2[elem.j]]
  })
};


nums1 = [1,7,11], nums2 = [2,4,6], k = 3
console.log(kSmallestPairs(nums1, nums2, k), [[1,2],[1,4],[1,6]]);
nums1 = [1,1,2], nums2 = [1,2,3], k = 2
console.log(kSmallestPairs(nums1, nums2, k), [[1,1],[1,1]]);
nums1 = [1,2], nums2 = [3], k = 3 
console.log(kSmallestPairs(nums1, nums2, k), [[1,3],[2,3]]);

var { nums1, nums2, k } = require('./373_input')
console.log(kSmallestPairs(nums1, nums2, k), [[1,3],[2,3]]);
