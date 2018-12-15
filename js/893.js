var calcMap = function (s, op = () => true) {
  const map = new Map
  for (let i = 0; i < s.length; i++) {
    if (op(i)) {
      map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
  }
  return map
}

var isMapEqual = function (map1, map2) {

  if (map1.size !== map2.size) {
    return false
  }

  for (const [k, v] of map1) {
    if (v !== map2.get(k)) {
      return false
    }
  }
  return true
}

var isSpecEqual = function (map1, map2) {
  // console.log('isSpecEqual', {s1, s2, len1: diff1.length, len2: diff2.length});
  return isMapEqual(map1, map2)
}

/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {

  const groups = []
  const maps = []
  const maps2 = []
  for (let i = 0; i < A.length; i++) {
    const map = calcMap(A[i])
    const map2 = calcMap(A[i], (i) => i % 2 === 0)
    let hit = false
    for (let j = 0; j < maps.length; j++) {
      // console.log({ map1: map, map2: maps[j], res: isMapEqual(maps[j], map) });
      if (isMapEqual(maps[j], map) && isSpecEqual(map2, maps2[j])) {
        hit = true
        groups[j].push(A[i])
        break
      }
    }
    if (!hit) {
      maps.push(map)
      maps2.push(map2)
      groups.push([i])
    }
  }
  // console.log(groups);
  return groups.length
};

var assert = require('assert');
assert.equal(numSpecialEquivGroups(["fcrokswjnxglmjouwkht", "shlgnfbgchiiytgxmamc", "hynzlifgupwmwxbrbjdq", "wkklgurjncmtfjoshxwo", "kogsokwjnjrthlfxwcmu"]), 3)
assert.equal(numSpecialEquivGroups(["a", "b", "c", "a", "c", "c"]), 3)
assert.equal(numSpecialEquivGroups(["aa", "bb", "ab", "ba"]), 4)
assert.equal(numSpecialEquivGroups(["abc", "acb", "bac", "bca", "cab", "cba"]), 3)
assert.equal(numSpecialEquivGroups(["abcd", "cdab", "adcb", "cbad"]), 1)