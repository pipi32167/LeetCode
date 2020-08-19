/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  
  const words = text.split(/\s/)
  const results = []
  for(let i = 0; i < words.length - 2; i++) {
    if (words[i] === first && words[i+1] === second) {
      results.push(words[i+2])
      i++
    }
  }
  return results
};

let text = "alice is a good girl she is a good student", first = "a", second = "good"
console.log(findOcurrences(text, first, second))
text = "we will we will rock you", first = "we", second = "will"
console.log(findOcurrences(text, first, second))