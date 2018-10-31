/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  for(var i = shifts.length - 2; i >= 0; i--)  {
    shifts[i] += shifts[i+1]
  }

  shifts = shifts.map(function  (elem) {
    return elem % 26
  })

  // console.log(shifts);

  var result = [], start = 'a'.charCodeAt(0)
  for(var i = 0; i < S.length; i++) {
    var pos = (S.charCodeAt(i) - start + shifts[i]) % 26
    // console.log(pos);
    result[i] = String.fromCharCode(start + pos)
  }
  return result.join('')
};

console.log(shiftingLetters('a', [17]), 'r');
console.log(shiftingLetters('abc', [3,5,9]), 'rpl');
