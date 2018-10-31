
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  var n = A.length
  // console.log({ n });
  
  if (n === 0) {
    return 0
  }
  var sum = A.reduce(function (res, elem) {
    return res + elem
  }, 0)
  var prodSum = A.reduce(function (res, elem, idx) {
    return res + elem * idx
  }, 0)
  var beforeProdSum = prodSum
  var max = prodSum
  for(var i = 1; i < n; i++) {
    // var res = rotate(A, i)
    prodSum = beforeProdSum + sum - n * A[n - i]
    // console.log({ i, res });
    if (max < prodSum) {
      max = prodSum
    }
    beforeProdSum = prodSum
  }
  return max
};

console.log(maxRotateFunction([4, 3, 2, 6]), 26);
console.log(maxRotateFunction([-2147483648,-2147483648]), -2147483648);
console.log(maxRotateFunction([]), 0);
console.log(maxRotateFunction(require('./396_input')), 0);

