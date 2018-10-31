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

// console.log(match('appppple', 'apple'));
// console.log(match('aple', 'apple'));


/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    
  d = sort(d);
  
  for(var i = 0; i < d.length; i++) {
    if (match(s, d[i])) {
      return d[i]
    }
  }
  return '';
};

var s = "abpcplea", d = ["ale","apple","monkey","plea"]
console.log(findLongestWord(s, d));
var s = "abpcplea", d = ["a","b","c"]
console.log(findLongestWord(s, d));
var s = "aewfafwafjlwajflwajflwafj"
var d = ["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]
console.log(findLongestWord(s, d));