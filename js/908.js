/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  
  var min = 10001, max = -1
  for(var i = 0; i < A.length; i++) {
    if (min > A[i]) {
      min = A[i]
    } 
    if (max < A[i]) {
      max = A[i]
    }
  }

  var res = max - min - 2 * K
  return res > 0 ? res : 0
};

A = [1], K = 0
console.log(smallestRangeI(A, K), 0);
A = [0,10], K = 2
console.log(smallestRangeI(A, K), 6);
A = [1,3,6], K = 3
console.log(smallestRangeI(A, K), 0);