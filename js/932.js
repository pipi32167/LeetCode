
/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function(N) {

  if (N === 1) return [1]
  if (N === 2) return [1,2]
  if (N === 3) return [1,3,2]
  if (N === 1) return [1,3,2,4]

  let arr = [1,3,2,4]
  while (arr.length < N) {
    arr = arr
      .map(e => e * 2 - 1)
      .concat(arr.map(e => e * 2))
      .filter(e => e <= N)
  }
  return arr
};

console.log(beautifulArray(3));
console.log(beautifulArray(4));
console.log(beautifulArray(5));
console.log(beautifulArray(10));
for (let i = 0; i < 1000; i++) 
  beautifulArray(1000);