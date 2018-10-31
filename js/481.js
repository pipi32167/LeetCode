

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  
  var i = 1, j = 1
  var result = [1], countOf1 = 1
  while(j < n) {
    var item = 3 - result[j-1]
    var num = result[i] || item
    if (num === 1) {
      result.push(item)
      j ++
    } else {
      result.push(item, item)
      j += 2
    }
    if (item === 1) {
      countOf1 += num
    }
    i++
  }
  if (result.length > n && result[n] === 1) {
    countOf1 --
  }
  // return result
  // console.log(result);
  return countOf1
};

console.log(magicalString(4), 2);
console.log(magicalString(5), 3);
console.log(magicalString(6), 3);
