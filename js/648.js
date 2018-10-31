var startsWith = function (word, prefix) {
  return word.indexOf(prefix) === 0
}

var replace = function (dict, word) {
  for(var i = 0; i < dict.length; i++) {
    if (startsWith(word, dict[i])) {
      return dict[i]
    }
  }
  return word
}

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  dict.sort((a, b) => a.length - b.length)
  return sentence.split(' ').map(word => replace(dict, word)).join(' ')
};

var dict = ["cat", "bat", "rat"]
var sentence = "the cattle was rattled by the battery"
console.log(replaceWords(dict, sentence), 'the cat was rat by the bat');
