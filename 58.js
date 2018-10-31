/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  
  var words = s.split(' ').filter(function (elem) {
    return elem.length > 0
  })
  if (words.length === 0) {
    return 0
  }
  return words[words.length - 1].length
};

console.log(lengthOfLastWord(""), 0);
console.log(lengthOfLastWord("Hello World"), 5);
