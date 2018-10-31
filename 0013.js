
var romanChars = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanWords = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
}

var getNumByWord = function(word) {
  return romanWords[word] || romanChars[word]
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
  var result = 0, i = 0;
  var words = Object.keys(romanWords).concat(Object.keys(romanChars))
  while(i < s.length) {

    for(var j = 0; j < words.length; j ++) {
      var word = words[j];
      // console.log(word, s.slice(i, i + word.length), i, i + word.length);
      
      if (s.slice(i, i + word.length) === word) {
        result += getNumByWord(word);
        i += word.length;
        break;
      } 
    }
  }

  return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
