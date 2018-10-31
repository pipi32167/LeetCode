/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  var prehandle = (a) => {
    return a.split('+').map(e => {
      return e.indexOf('i') < 0 ? Number(e) : Number(e.slice(0, e.length-1))
    })
  }
  a = prehandle(a)
  b = prehandle(b)
  // console.log({ a, b });
  return (a[0] * b[0] - a[1] * b[1]) + '+' + (a[0] * b[1] + a[1] * b[0]) + 'i'
};
console.log(complexNumberMultiply('1+1i', '1+1i') === '0+2i');
console.log(complexNumberMultiply("1+-1i", "1+-1i") === "0+-2i");
