var isValid = function (s, k) {
  var charCounts = {}
  for(var i = 0; i < s.length; i++) {
    charCounts[s[i]] = charCounts[s[i]] || 0
    charCounts[s[i]] ++ 
  }

  for(var char in charCounts) {
    if (charCounts[char] < k) {
      return false
    }
  }
  return true
}

var flatten = function (arr) {
  var results = [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      results = results.concat(flatten(arr[i]))
    } else {
      results.push(arr[i])
    }
  }
  return results;
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (s.length < k) {
    return 0
  }
  var charCounts = new Array(26).fill(0)
  var start = 'a'.charCodeAt(0)
  for(var i = 0; i < s.length; i++) {
    charCounts[s.charCodeAt(i) - start] ++ 
  }

  var invalidChars = []
  for(var i = 0; i < charCounts.length; i++) {
    if (charCounts[i] > 0 && charCounts[i] < k) {
      invalidChars.push(String.fromCharCode(i + start))
    }
  }

  if (invalidChars.length === 0) {
    return s.length
  }

  var result = [s]
  for(var i = 0; i < invalidChars.length; i++) {
    for(var j = 0; j < result.length; j++) {
      result[j] = result[j].split(invalidChars[i]).filter(function (elem) {
        return elem.length >= k
      })
    }
    result = flatten(result)
  }

  // console.log(result);
  var maxLen = 0
  for(var i = 0; i < result.length; i++) {
    // console.log('isValid', result[i], k, isValid(result[i], k));
    if (isValid(result[i], k) && maxLen < result[i].length) {
      maxLen = result[i].length
    }
  }

  // console.log(maxLen);

  if (result.length > 0) {
    return Math.max.apply(null, result.map(function (elem) {
      return longestSubstring(elem, k)
    }).concat(maxLen))
  }
  // console.log({invalidChars});
  return maxLen
};

console.log(longestSubstring('aaabb', 3), 3);
console.log(longestSubstring('ababbc', 2), 5);
console.log(longestSubstring("ababacb", 3), 0);
console.log(longestSubstring("bbaaacbd", 3), 3);
console.log(longestSubstring("bbaaacbd", 3), 3);
var s = "zzzzzzzzzzaaaaaaaaabbbbbbbbhbhbhbhbhbhbhicbcbcibcbccccccccccbbbbbbbbaaaaaaaaafffaahhhhhiaahiiiiiiiiifeeeeeeeeee"
var k = 10
console.log(longestSubstring(s, k), 21);