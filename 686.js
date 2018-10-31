/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  var str = '';
  var times = 0;
  var maxLen = B.length * 2;
  while (str.length < maxLen) {
    str += A;
    times ++;
    if (str.indexOf(B) >= 0) {
      return times;
    }
  }

  return -1;
};

console.log(repeatedStringMatch('abcd', 'cdabcdab'));
