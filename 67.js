var fillLeft = function (s, len, char) {
  
  while(s.length < len) {
    s = char + s
  }
  return s
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var len = Math.max(a.length, b.length)
  a = fillLeft(a, len, '0')
  b = fillLeft(b, len, '0')
  
  var carry = 0
  var result = []
  for(var i = len - 1; i >= 0; i --) {
    var sum = Number(a[i]) + Number(b[i]) + carry
    carry = Math.floor(sum / 2)
    result[i] = sum % 2
  }
  if (carry > 0) {
    result.unshift(carry)
  }
  // console.log(result);
  return result.join('')
};

console.log(addBinary('11', '1'), '100');
