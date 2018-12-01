/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {

  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }
  for (let i = 0; i < t.length; i++) {
    let res = (map.get(t[i]) || 0) - 1
    if (res === 0) {
      map.delete(t[i])
    } else {
      map.set(t[i], res)
    }
  }
  // console.log(map.keys());
  return Array.from(map.keys())[0]
};

var assert = require('assert');
assert.equal(findTheDifference('abcd', 'abcde'), 'e')