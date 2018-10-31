var isMatch = function (str, i, j) {
  var charDict1 = {}
  for(var k = i; k < j; k++) {
    charDict1[str[k]] = true
  }
  var charDict2 = {}
  for(var k = j; k < str.length; k++) {
    charDict2[str[k]] = true
  }
  // console.log({ charDict1, charDict2 });
  
  for(var char in charDict1) {
    if (charDict2[char]) {
      return false
    }
  }
  return true
}

// console.log(isMatch('abcd', 0, 2), true);
// console.log(isMatch('abcda', 0, 2), false);

var go = function (str, i, result) {
  
  for(var j = i+1; j < str.length; j++) {
    if (isMatch(str, i, j)) {
      result.push(j - i)
      return go(str, j, result)
    }
  }
  result.push(str.length - i)
}

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  var result = []
  go(S, 0, result)
  return result
};

S = "ababcbacadefegdehijhklij"
console.log(partitionLabels(S));
