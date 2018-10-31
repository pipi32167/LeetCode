var isMatch = function (s, i, j) {
  
  // var i = 0, j = s.length-1
  while(i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++,j--
  }
  return true
}

var go = function (s, i, prefix, result) {
  // console.log(i, prefix);
  if (i >= s.length-1) {
    // console.log(prefix);
    var res = prefix.slice(0)
    if (i === s.length-1) {
      res.push(s[i])
    }
    result.push(res)
    return
  }

  var j = s.length - 1
  while(j >= i) {
    if (isMatch(s, i, j)) {
      prefix.push(s.substring(i, j + 1))
      go(s, j+1, prefix, result)
      prefix.pop()
    }
    j--
  }
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  
  var result = []
  go(s, 0, [], result)
  return result
};

console.log(partition('aab'));
console.log(partition('aaba'));
