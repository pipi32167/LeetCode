
var stat = function (word) {
  
  let result = [], lastChar = word[0], count = 1
  for (let i = 1; i < word.length; i++) {
    if (word[i] === lastChar) {
      count++
    } else {
      result.push({ char: lastChar, count })
      lastChar = word[i]
      count = 1
    }
  }
  result.push({ char: lastChar, count })
  return result
}


// console.log(stat('aabbcc').join() === [['a', 2], ['b', 2], ['c', 2]].join());
// console.log(stat('aaaaabbcc').join() === [['a', 5], ['b', 2], ['c', 2]].join());

var isExpressive = function (word1, word2) {
  
  var stat1 = stat(word1), stat2 = stat(word2)
  if (stat1.length !== stat2.length) {
    return false
  }

  for (let i = 0; i < stat1.length; i++) {
    
    const st1 = stat1[i], st2 = stat2[i]
    // console.log({st1, st2});
    if (st1.char !== st2.char) {
      return false
    }
    if (st1.count > st2.count) {
      return false
    }
    if (st1.count < st2.count && st2.count < 3) {
      return false
    }
  }
  return true
}

// console.log(isExpressive('ab', 'aaab') === true);
// console.log(isExpressive('ab', 'abbb') === true);
// console.log(isExpressive('ab', 'aaabbbb') === true);
// console.log(isExpressive('ab', 'aabb') === false);
// console.log(isExpressive('ab', 'aabbb') === false);
// console.log(isExpressive('abb', 'abbb') === true);


/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    
  return words.filter(e => isExpressive(e, S)).length
};

var S = "heeellooo"
var words = ["hello", "hi", "helo"]
console.log(expressiveWords(S, words) === 1);
var S = "heeelllooo"
var words = ["hello", "hi", "helo"]
console.log(expressiveWords(S, words) === 2);
