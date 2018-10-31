/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  return s === t;
};

var s = "anagram", t = "nagaram"
console.log(isAnagram(s, t));
var s = "rat", t = "car"
console.log(isAnagram(s, t));