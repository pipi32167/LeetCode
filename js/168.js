/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  
  var start = 'A'.charCodeAt(0)
  var result = []
  while (n > 0) {
    var res = (n - 1) % 26
    n = Math.floor((n - 1) / 26)
    result.unshift(String.fromCharCode(start + res))
  }

  return result.join('')
};

console.log(convertToTitle(1), 'A');
console.log(convertToTitle(28), 'AB');
console.log(convertToTitle(701), 'ZY');
