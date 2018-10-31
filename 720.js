var sort = function (d) {
  
  return d.sort(function (a, b) {
    if(a.length !== b.length) {
      return b.length - a.length
    }
    for(var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return a.codePointAt(i) - b.codePointAt(i);
      }
    }
    return 0;
  })
}


var match = function (s, w) {

  // console.log('match', s, w);
  
  var pos = 0;
  for(var i = 0; i < w.length; i ++) {
    var hit = false;
    while(pos < s.length) {
      if (w[i] === s[pos++]) {
        hit = true;
        break
      }
    }

    if (!hit) {
      return false;
    }
  }
  return true;
}

var match2 = function (word, words, begin) {
  // console.log('match2', word);
  
  if (word.length === 1) {
    return true;
  }
  
  for(var i = begin; i < words.length; i++) {
    if (word.length === words[i].length + 1 && 
      match(word, words[i]) && 
      match2(words[i], words, i + 1)) {
      return true;
    }
  }
  return false;
}

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  
  words = sort(words);

  for(var i = 0; i < words.length; i++) {
    if (match2(words[i], words, i+1)) {
      return words[i]
    }
  }
  return ''
};

var words = ["w","wo","wor","worl", "world"]
console.log(longestWord(words));
var words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
console.log(longestWord(words));
var words = ["a", "banana", "app", ]
console.log(longestWord(words));