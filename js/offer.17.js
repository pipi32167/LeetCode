/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  const N = 10 ** n;
  const result = []
  for(let i = 1; i < N; i++) {
    result.push(i)
  }
  return result
};

console.log(printNumbers(1));
console.log(printNumbers(3));
