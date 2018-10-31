var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var siftup = function (heap, cmpFn) {
  var i = heap.length - 1
  while(i !== 1) {
    var p = Math.floor(i / 2)
    if (cmpFn(heap[p], heap[i]) > 0) {
      break
    }
    swap(heap, i, p)
    i = p
  }
}

var siftdown = function (heap, cmpFn) {
  var i = 1
  while(true) {
    var c = i * 2
    if (c >= heap.length) {
      break
    }
    if (c+1 < heap.length) {
      if (cmpFn(heap[c+1], heap[c]) > 0) {
        c++
      }
    }
    if (cmpFn(heap[i], heap[c]) > 0) {
      break
    }
    swap(heap, i, c)
    i = c
  }
  return heap
}

var insert = function (heap, n, cmpFn) {
  heap.push(n)
  siftup(heap, cmpFn)
  return heap
}

var memoryUsage = function () {
  var res = process.memoryUsage()
  for(var k in res) {
    res[k] = (res[k] / (1 << 20)).toFixed(2) + 'm'
  }
  return res
}

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(A, K) {
  // var cmpFn = (a, b) => a.v-b.v
  var cmpFn = (a, b) => a-b
  // var cmpFn = (a, b) => a[0] / a[1] - b[0] / b[1]
  // var cmpFn = (a, b) => a.e1 / a.e2 -b.e1 / b.e2
  var heap = [1]
  for (let i = 0; i < A.length; i++) {
  // for (let i = A.length - 1; i >= 0; i--) {
    const e1 = A[i];
    for (let j = i+1; j < A.length; j++) {
    // for (let j = A.length - 1; j > i; j--) {
      const e2 = A[j];
      const res = e1 / e2
      // const res = { a: [e1, e2], v: e1 / e2 }
      // const res = [e1, e2]
      // const res = {e1, e2}
      if (heap.length - 1 < K ) {
        insert(heap, res, cmpFn)
      } else if (cmpFn(heap[1], res) > 0) {
        heap[1] = res
        siftdown(heap, cmpFn)
      }
      // if (heap.length % 10000 === 0) {
      //   console.log(heap.length);
      // }
    }
  }

  var res
  for (let i = 0; i < A.length; i++) {
    res = A[i] * heap[1]
    if (Math.abs(Math.round(res) - res) < 0.000000001) {
      break
    }
  }

  // console.log(memoryUsage())
  // return heap[1]
  // return [heap[1].e1, heap[1].e2]
  // console.log([res, Math.round(res / heap[1])]);
  res = [Math.round(res), Math.round(res / heap[1])]
  return res
};

// var quickSort3 = function (nums, l, u) {
//   if (l >= u) {
//     return nums
//   }

//   var t = nums[l], i = l, j = u+1
//   while(true) {
//     do { i++ } while(i <= u && nums[i].v < t.v)
//     do { j-- } while(nums[j].v > t.v)
//     if (i > j) {
//       break
//     }
//     swap(nums, i, j)
//   }
//   swap(nums, l, j)
//   quickSort3(nums, l, j - 1)
//   quickSort3(nums, j + 1, u)
//   return nums
// }

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number[]}
//  */
// var kthSmallestPrimeFraction = function(A, K) {
  
//   var results = []
//   for (let i = 0; i < A.length; i++) {
//   // for (let i = A.length - 1; i >= 0; i--) {
//     const e1 = A[i];
//     for (let j = i+1; j < A.length; j++) {
//     // for (let j = A.length - 1; j > i; j--) {
//       const e2 = A[j];
//       results.push({ a: [e1, e2], v: e1 / e2 })
//     }
//   }
//   quickSort3(results, 0, results.length-1)
//   return results[K-1].a
// };

var A = [1, 2, 3, 5], K = 3
console.log(kthSmallestPrimeFraction(A, K).join() === [2,5].join());
var A = [1, 2, 3, 5, 7, 11, 13], K = 10
console.log(kthSmallestPrimeFraction(A, K).join() === [1,3].join());
var A = [1, 7], K = 1
console.log(kthSmallestPrimeFraction(A, K).join() === [1,7].join());
var A = [1,13,17,59], K = 6
console.log(kthSmallestPrimeFraction(A, K).join() === [13,17].join());
var { A, K } = require('./786_input')
console.log(kthSmallestPrimeFraction(A, K).join() === [ 241, 14747 ].join());
var { A, K } = require('./786_input2')
console.log(kthSmallestPrimeFraction(A, K).join() === [ 3923,16267 ].join());
var { A, K } = require('./786_input3')
console.log(kthSmallestPrimeFraction(A, K).join() === [ 15013,28559 ].join());
var { A, K } = require('./786_input4')
console.log(kthSmallestPrimeFraction(A, K).join() === [ 1867,20543 ].join());
