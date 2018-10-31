var isLetter = function (c) {
  return /^[a-z]$/.test(c)
}

var isMatch = function (chars1, chars2) {
  for(var c in chars1) {
    if (!isLetter(c)) {
      continue
    }
    var count1 = chars1[c]
    var count2 = chars2[c] || 0
    if (count2 < count1) {
      return false
    }
  }
  return true
}

// console.log(isMatch({a: 1, b: 2}, {a:2}) === false);
// console.log(isMatch({a: 1, b: 2}, {a:2,b:2}) === true);
// console.log(isMatch({a: 1}, {a:2,b:2}) === true);


var doCount = function (word) {
  var chars = {}
  for(var j = 0; j < word.length; j++) {
    var c = word[j].toLowerCase()
    chars[c] = chars[c] || 0
    chars[c] ++
  }
  return chars
}

// console.log(doCount('abcd'));
// console.log(isMatch(doCount("1s3 PSt"), doCount('step')) === false);

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  var lpChars = doCount(licensePlate)
  var wordChars = {}
  for(var i = 0; i < words.length; i++) {
    var word = words[i]
    wordChars[word] = doCount(word)
  }

  var minLen = Math.pow(2, 31), minRes
  for(var i = 0; i < words.length; i++) {
    var word = words[i]
    if (isMatch(lpChars, wordChars[word]) && minLen > word.length) {
      minLen = word.length
      minRes = word
    }
  }
  return minRes
};

var licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
console.log(shortestCompletingWord(licensePlate, words) === 'steps');
var licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
console.log(shortestCompletingWord(licensePlate, words) === 'pest');