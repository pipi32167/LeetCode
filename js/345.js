var swap = function (s, i, j) {
  var t = s[i]
  s[i] = s[j]
  s[j] = t
}

var isVowel = function (c) {
  return 'aeiouAEIOU'.indexOf(c) >= 0
}

var getNextVowel = function (s, i) {
  for (var j = i + 1; j < s.length; j++) {
    if (isVowel(s[j])) {
      return j
    }
  }
  return j
}

var getLastVowel = function (s, i) {
  for (var j = i - 1; j >= 0; j--) {
    if (isVowel(s[j])) {
      return j
    }
  }
  return j
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

  s = s.split('')

  let i = -1
  let j = s.length
  while (true) {
    i = getNextVowel(s, i)
    j = getLastVowel(s, j)
    if (i >= j) {
      break
    }
    swap(s, i, j)
  }

  return s.join('')
};

console.log(reverseVowels('ae') === 'ea');
console.log(reverseVowels('bac') === 'bac');
console.log(reverseVowels('bc') === 'bc');
console.log(reverseVowels('hello') === 'holle');
console.log(reverseVowels('leetcode') === 'leotcede');
console.log(reverseVowels('aA') === 'Aa');