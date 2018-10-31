var repeat = function (s, times) {
  
  var result = []
  for(var i = 0; i < times; i++) {
    result.push(s)
  }
  return result.join('')
}

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  
  var lines = [], width = 0
  for(var i = 0, j = 0; i < words.length; i++) {
    var word = words[i]
    var line = lines[j] = lines[j] || []
    var width = line.join(' ').length
    if (word.length >= maxWidth && width === 0) {
      line.push(word)
    } else if (width + 1 + word.length > maxWidth) {
      j++
      line = [word]
      lines.push(line)
    } else {
      line.push(word)
    }
  }

  for(var i = 0; i < lines.length; i++) {
    var line = lines[i]
    var remainWidth = maxWidth - line.join('').length
    if (line.length === 1) {
      lines[i] = line[0] + repeat(' ', remainWidth)
    } else if (lines.length - 1 === i) {
      line = line.join(' ')
      remainWidth = maxWidth - line.length
      lines[i] = line + repeat(' ', remainWidth)
    } else {

      var innerWidth = Math.floor(remainWidth / (line.length - 1))
      var widerCount = remainWidth % (line.length - 1)
      // console.log({widerCount, remainWidth, innerWidth});
      var result = ''
      for(var j = 0; j < line.length - 1; j++) {
        result += line[j] + repeat(' ', innerWidth + (widerCount > 0 ? 1 : 0))
        widerCount --
      }
      result += line[j]
      lines[i] = result
    }
  }
  
  return lines
};

words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
console.log(fullJustify(words, maxWidth));
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
console.log(fullJustify(words, maxWidth));
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
console.log(fullJustify(words, maxWidth));
words = []
maxWidth = 20
console.log(fullJustify(words, maxWidth));
words = ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"]
maxWidth = 16
console.log(fullJustify(words, maxWidth));
words = ["Listen","to","many,","speak","to","a","few."]
maxWidth = 6
console.log(fullJustify(words, maxWidth));
words = ["a","b","c","d","e"]
maxWidth = 1
console.log(fullJustify(words, maxWidth));
words = ["a","b","c","d","e"]
maxWidth = 3
console.log(fullJustify(words, maxWidth));