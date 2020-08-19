/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {

  const len = a.length
  const dp1 = new Array(len).fill(1)
  const dp2 = new Array(len).fill(1)
  dp1[0] = a[0]
  dp2[len - 1] = a[len - 1] 
  for (let i = 1, j = len - 2; i < len; i++, j--) {
    dp1[i] = dp1[i - 1] * a[i]
    dp2[j] = dp2[j + 1] * a[j]
  }
  // console.log(dp1);
  // console.log(dp2);

  dp1.unshift(1); dp1.push(1)
  dp2.unshift(1); dp2.push(1)

  const result = []
  for (let i = 1; i <= len; i++) {
    result.push(dp1[i - 1] * dp2[i + 1])
  }
  return result
};

console.log(constructArr([1, 2, 3, 4, 5]));
console.log(constructArr([1]));
// console.log(constructArr(new Array(100000).fill(1)));