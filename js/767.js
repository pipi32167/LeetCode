var count = function (S) {
  
  var result = {}
  for(var i = 0; i < S.length; i ++) {
    var char = S[i]
    result[char] = result[char] || 0
    result[char] ++
  }
  return result;
}

var pick = function (charsCount, beforeChar) {
  
  var max = 0, char, count
  for(var c in charsCount) {
    count = charsCount[c]
    if (c !== beforeChar && max < count) {
      max = count
      char = c
    }
  }

  if (char) {
    charsCount[char] --;
  }

  return char
}

// var charsCount = { a: 1, b: 1 }
// console.log(pick(charsCount, 'a'), charsCount);
// console.log(pick(charsCount, 'b'), charsCount);
// console.log(pick(charsCount, 'a'), charsCount);
// console.log(pick(charsCount, 'b'), charsCount);


var useAllChars = function (charsCount) {
  
  for(var c in charsCount) {
    if (charsCount[c] > 0) {
      return false
    }
  }
  return true;
}

// console.log(useAllChars({ a: 0, b: 0 }));
// console.log(useAllChars({ a: 1, b: 0 }));
// console.log(useAllChars({ a: 0, b: 1 }));


/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  
  var charsCount = count(S);
  var result = ''
  var char 
  do {
    char = pick(charsCount, char)
    if (char) {
      result += char
    }
  } while(char)

  if (useAllChars(charsCount)) {
    return result
  }
  return ''
};

console.log(reorganizeString('aab'));
console.log(reorganizeString('aaab'));
