var swap = function (chars, i, j) {
  var tmp = chars[i]
  chars[i] = chars[j]
  chars[j] = tmp
}

var reverse = function (chars, l, u) {
  while(l < u) {
    swap(chars, l++, u--)
  }
}

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  var chars = s.split('')
  var i = 0
  while(i < chars.length) {
    
    reverse(chars, i, Math.min(i + k, chars.length) - 1)
    i += 2 * k
  }
  return chars.join('')
};

s = "abcdefg", k = 2
console.log(reverseStr(s, k), 'bacdfeg');
s = "abcdefgi", k = 2
console.log(reverseStr(s, k), 'bacdfegi');
