/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
  
  var dp1 = new Array(A.length).fill(0)
  var dp2 = new Array(A.length).fill(0)
  var max = -1
  for(var i = 0; i < A.length; i++) {
    dp1[i] = max = Math.max(max, A[i])
  }
  var min = Math.pow(10, 6) + 1
  for(var i = A.length - 1; i >= 0; i--) {
    dp2[i] = min = Math.min(min, A[i])
  }
  for(var i = 0; i < A.length - 1; i++) {
    if (dp1[i] <= dp2[i+1]) {
      return i+1
    }
  }
};

console.log(partitionDisjoint([5,0,3,8,6]) === 3);
console.log(partitionDisjoint([1,1,1,0,6,12]) === 4);
console.log(partitionDisjoint([1,1]) === 1);
