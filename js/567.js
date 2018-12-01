var isMatch = function (map1, map2) {
  for (const [char, count] of map1) {
    if (map2.get(char) !== count) {
      return false
    }
  }
  return true
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const map1 = new Map()
  for (let i = 0; i < s1.length; i++) {
    map1.set(s1[i], (map1.get(s1[i]) || 0) + 1)
  }

  const map2 = new Map()
  for (let i = 0; i < s1.length - 1; i++) {
    map2.set(s2[i], (map2.get(s2[i]) || 0) + 1)
  }
  for (let i = 0; i <= s2.length - s1.length; i++) {
    const c = s2[i + s1.length - 1]
    map2.set(c, (map2.get(c) || 0) + 1)
    // console.log(map2, s2.slice(i, i + s1.length));
    
    if (isMatch(map1, map2)) {
      // console.log(map1, map2);
      return true
    }
    const c2 = s2[i]
    map2.set(c2, map2.get(c2) - 1)
  }
  return false
};

var assert = require('assert');
assert.ok(checkInclusion('ab', 'eidbaooo'))
assert.ok(!checkInclusion('ab', 'eidboaooo'))
assert.ok(checkInclusion('abc', 'bbbca'))