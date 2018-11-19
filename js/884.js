const counting = function (s) {

  let dict = {}
  for (let i = 0; i < s.length; i++) {
    const word = s[i];
    dict[word] = dict[word] || 0
    dict[word]++
  }
  return dict
}

const scan = function (dict1, dict2, result) {
  for (const word in dict1) {
    const count = dict1[word]
    if (count === 1 && !dict2[word]) {
      result.push(word)
    }
  }
}

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {

  A = A.split(' ')
  B = B.split(' ')
  const dictA = counting(A)
  const dictB = counting(B)
  // console.log(A, B, dictA, dictB);
  let result = []
  scan(dictA, dictB, result)
  scan(dictB, dictA, result)
  return result
};

var assert = require('assert');
var A = "this apple is sweet",
  B = "this apple is sour"
var res = ["sweet", "sour"]
assert.deepEqual(uncommonFromSentences(A, B), res)
var A = "apple apple",
  B = "banana"
var res = ["banana"]
assert.deepEqual(uncommonFromSentences(A, B), res)