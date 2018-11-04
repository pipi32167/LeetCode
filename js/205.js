/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

  if (s.length !== t.length) {
    return false
  }
  
  let mapping = {}, mapping2 = {}
  for (let i = 0; i < s.length; i++) {
    const si = s[i];
    const ti = t[i];
    // console.log(si, ti, mapping[si]);
    if (!mapping[si] && !mapping2[ti]) {
      mapping[si] = ti
      mapping2[ti] = si
    } else if (mapping[si] !== ti || mapping2[ti] !== si) {
      return false
    }
  }
  // console.log(mapping);
  return true
};


console.log(isIsomorphic("egg", "add") === true);
console.log(isIsomorphic("aa", "ab") === false);
console.log(isIsomorphic("ab", "aa") === false);
console.log(isIsomorphic("foo", "bar") === false);
console.log(isIsomorphic("paper", "title") === true);
