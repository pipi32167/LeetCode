// var go = function (A, K, prefix, result) {
  
//   if (prefix.length === A.length) {
//     var min = 10001+K, max = -K-1
//     for(var i = 0; i < prefix.length; i++) {
//       if (min > prefix[i]) {
//         min = prefix[i]
//       }
//       if (max < prefix[i]) {
//         max = prefix[i]
//       }
//     }
//     var res = max - min
//     if (result.minDiff > res) {
//       result.minDiff = res
//     }
//     return
//   }

//   prefix.push(A[prefix.length]+K)
//   go(A, K, prefix, result)
//   prefix.pop()
//   prefix.push(A[prefix.length]-K)
//   go(A, K, prefix, result)
//   prefix.pop()
// }

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// var smallestRangeII = function(A, K) {
  
//   var result = { minDiff: Math.pow(2,31) }
//   go(A, K, [], result)
//   return result.minDiff
// };

var go = function (A, K, i, j, min, max, result) {
  // console.log('go', { i, j, a: A[i], b: A[j], min, max });

  if (i > j) {

    var res = max - min
    if (result.minDiff > res) {
      result.minDiff = res
    }
    console.log('end');
    return
  }

  var a = A[i], b = A[j]

  // if (min < a - K && max > b + K) {
  //   // 中断计算
  //   go(A, K, A.length - 1, 0, min, max, result)
  //   return
  // }

  // if (min < a - K) {
  //   var arr = [b-K,b+K]
  //   for(var k = 0; k < arr.length; k++) {
  //     var b2 = arr[k]
  //     go(A, K, i, j-1, min, max < b2 ? b2 : max, result)
  //   }
  //   return
  // } 
  
  // if (max > b + K) {
  //   var arr = [a-K,a+K]
  //   for(var k = 0; k < arr.length; k++) {
  //     var a2 = arr[k]
  //     go(A, K, i+1, j, min > a2 ? a2 : min, max, result)
  //   }
  //   return
  // } 

  var arr = [
    [a-K, b-K],
    [a-K, b+K],
    [a+K, b-K],
    [a+K, b+K],
  ]
  for(var k = 0; k < arr.length; k++) {

    var a2 = arr[k][0], b2 = arr[k][1]
    go(A, K, i+1, j-1, min > a2 ? a2 : min, max < b2 ? b2 : max, result)
  }
  
  // go(A, K, i+1, min > a ? a : min, max < a ? a : max, result)
}

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
  if (A.length <= 1) {
    return 0
  }

  A.sort((a, b) => a - b)
  console.log(A);
  
  var result = { minDiff: Math.pow(2,31) }
  var i = 0, j = A.length-1
  go(A, K, i, j, 10001+K, -1-K, result)
  return result.minDiff
};
// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// var smallestRangeII = function(A, K) {
  
//   A.sort((a, b) => a - b)
//   console.log(A);
  
//   // var maxA = A[A.length - 1]

//   // var max = -K-1
//   // for(var i = 0; i < A.length; i++) {
//   //   max = Math.max(maxA - A[i], maxA - A[i] + K, maxA - A[i] - K)
//   // }
//   // return max
// };


A = [1], K = 0
// console.log(smallestRangeII(A, K), 0);
A = [0,10], K = 2
// console.log(smallestRangeII(A, K), 6);
A = [1,3,6], K = 3
console.log(smallestRangeII(A, K), 3);
A = [1,2,3,4,5,6], K = 3
// console.log(smallestRangeII(A, K), 5);
A = [8038,9111,5458,8483,5052,9161,8368,2094,8366,9164,53,7222,9284,5059,4375,2667,2243,5329,3111,5678,5958,815,6841,1377,2752,8569,1483,9191,4675,6230,1169,9833,5366,502,1591,5113,2706,8515,3710,7272,1596,5114,3620,2911,8378,8012,4586,9610,8361,1646,2025,1323,5176,1832,7321,1900,1926,5518,8801,679,3368,2086,7486,575,9221,2993,421,1202,1845,9767,4533,1505,820,967,2811,5603,574,6920,5493,9490,9303,4648,281,2947,4117,2848,7395,930,1023,1439,8045,5161,2315,5705,7596,5854,1835,6591,2553,8628], K = 4643
A = [8038,9111,5458,8483,5052,9161,8368,2094,8366,9164,53,7222,9284,5059,4375,2667,2243,5329,3111,5678,5958,815,6841,1377,2752], K = 4643
// console.log(smallestRangeII(A, K), 8022);