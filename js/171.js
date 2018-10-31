/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var res = 0
  var start = 'A'.charCodeAt(0)
  for(var i = s.length - 1; i >= 0; i--) {
    // console.log(s[i], (s.charCodeAt(i) - start + 1) * Math.pow(26, s.length - 1 - i) );
    res += (s.charCodeAt(i) - start + 1) * Math.pow(26, s.length - 1 - i) 
  }
  return res
};

console.log(titleToNumber('A'), 1);
console.log(titleToNumber('AB'), 28);
console.log(titleToNumber('ZY'), 701);
