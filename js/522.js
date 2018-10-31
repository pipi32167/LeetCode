var indexOf = function (str, idx, substr) {
  // console.log(str.slice(idx), substr);
  
  for (let i = idx; i < str.length; i++) {
    if (str.length - i < substr.length) {
      break
    }
    let hit = false
    for (let j = 0; j < substr.length; j++) {
      if (str[i+j] !== substr[j]) {
        hit = true
        break
      }
    }
    if (!hit) {
      return i
    }
  }
  return -1
}

// console.log(indexOf('aaa', 0, 'aa') === 0);
// console.log(indexOf('aaa', 1, 'aa') === 1);
// console.log(indexOf('aaa', 2, 'aa') === -1);
// console.log(indexOf('abc', 0, 'aa') === -1);
// console.log(indexOf('abc', 0, 'bc') === 1);

var includes = function (str, substr) {
  
  let idx = -1
  for (let i = 0; i < substr.length; i++) {
    idx = indexOf(str, idx+1, substr[i])
    // console.log(idx);
    
    if (idx < 0) {
      return false
    }
  }
  return true
}

// console.log(includes('aaa', 'aaa') === true);
// console.log(includes('aaa', 'aa') === true);
// console.log(includes('abc', 'ac') === true);
// console.log(includes('abc', 'bc') === true);
// console.log(includes('abc', 'cb') === false);
// console.log(includes('aabbcc', 'abc') === true);
// console.log(includes('abcabc', 'cca') === false);

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  let maxLen = -1
  for (let i = 0; i < strs.length; i++) {
    let hit = false
    const str1 = strs[i]
    for (let j = 0; j < strs.length; j++) {
      const str2 = strs[j]
      if (i === j) {
        continue
      }
      hit = str1.length === str2.length && str1 === str2 || 
            str1.length < str2.length && includes(str2, str1)
      // console.log({i, j, str1, str2, hit});
      if (hit) {
        break
      }
    }

    if (!hit) {
      maxLen = Math.max(maxLen, strs[i].length)
    }
  }
  return maxLen
};


console.log(findLUSlength(['aba', 'cdc']) === 3);
console.log(findLUSlength(["aba", "cdc", "eae"]) === 3);
console.log(findLUSlength(['aaa', 'aaa']) === -1);
console.log(findLUSlength(['aaa', 'aaa', 'aa']) === -1);
console.log(findLUSlength(['aaa', 'aba']) === 3);
console.log(findLUSlength(['aaaa', 'aaa']) === 4);
console.log(findLUSlength(['aaa', 'aaaa']) === 4);
var strs = new Array(50).fill('aaaaaaaaaa')
console.log(findLUSlength(strs) === -1);
var strs = new Array(50).fill(0).map((e, idx) => {
  const code = 'a'.charCodeAt(0)
  return 'aaaaaaaa' + String.fromCharCode(code + Math.floor(idx / 26)) + String.fromCharCode(code + idx % 26)
})
// console.log(strs);
console.log(findLUSlength(strs) === 10);
console.log(findLUSlength(["aabbcc", "aabbcc","cb","abc"]) === 2);
console.log(findLUSlength(["abcabc","abcabc","abcabc","abc","abc","cca"]) === 3);
