/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {

  const l = 'A'.charCodeAt(0)
  const u = 'Z'.charCodeAt(0)
  let diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
  let res = []
  for (let i = 0; i < str.length; i++) {
    const cc  = str.charCodeAt(i)
    if (cc >= l && cc <= u) {
      res.push(String.fromCharCode(cc + diff))
    } else {
      res.push(str[i])
    }
  }
  // console.log(res);
  return res.join('')
};

console.log(toLowerCase('Hello') === 'hello');
console.log(toLowerCase('here') === 'here');
console.log(toLowerCase('LOVELY') === 'lovely');
