

var find = function (s, i, chars) {
  var result = [], resultIdx = [], charDict = {}
  for(var j = i; j < s.length; j++) {
    var char = s[j]
    if (!charDict[char] && chars.indexOf(char) >= 0) {
      result.push(char)
      resultIdx.push(j)
      charDict[char] = true
    }

    if (result.length >= chars.length) {
      return {
        result,
        resultStr: result.join(''),
        resultIdx,
      }
    }
  }
}

// console.log(find('bcabc', 0, 'abc'), 'bca');
// console.log(find('bcabc', 1, 'abc'), 'cab');
// console.log(find('bcabc', 2, 'abc'), 'abc');
// console.log(find('bcabc', 3, 'abc'), undefined);

var go = function (s, begin, chars) {
  var min = null
  for(var i = begin; i < s.length; i++) {
    var res = find(s, i, chars)
    if (!res) {
      break
    }
    
    if (min) {
      // console.log('cmp', min.resultStr, res.resultStr, min.resultStr.localeCompare(res.resultStr));
    }
    if (min === null || min.resultStr.localeCompare(res.resultStr) > 0) {
      min = res 
    }
  }

  var firstChar = min.result[0]
  var firstCharIdx
  for(var i = begin; i < s.length; i++) {
    if (firstChar === s[i]) {
      firstCharIdx = i
      break
    }
  }
  var idx = chars.indexOf(firstChar)
  var newChars = chars.slice(0)
  newChars.splice(idx, 1)
  // console.log('%j', { firstChar, minStr: min.resultStr, newChars: newChars.join(''), s: s.substr(firstCharIdx) });

  if (newChars.length <= 0) {
    return [firstChar]
  }
  
  return [firstChar].concat(go(s, firstCharIdx + 1, newChars))
}

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  if (s.length === 0) {
    return s
  }
  
  var charDict = {}
  for(var i = 0; i < s.length; i++) {
    charDict[s[i]] = charDict[s[i]] || []
    charDict[s[i]].push(i)
  }

  var chars = Object.keys(charDict).sort()

  var res = go(s, 0, chars).join('')
  // console.log(res);
  return res
};

console.log(removeDuplicateLetters(''), '');
console.log(removeDuplicateLetters('bcabc'), 'abc');
console.log(removeDuplicateLetters('cbacdcbc'), 'acdb');
console.log(removeDuplicateLetters("thesqtitxyetpxloeevdeqifkz") === 'hesitxyplovdqfkz');
console.log(removeDuplicateLetters("mitnlruhznjfyzmtmfnstsxwktxlboxutbic"), 'hesitxyplovdqfkz');
console.log(removeDuplicateLetters("rusrbofeggbbkyuyjsrzornpdguwzizqszpbicdquakqws") === "bfegkuyjorndiqszpcaw");

console.log(removeDuplicateLetters("peymrzknlxtrutjiybqemquchgvtmmtpjvunvekszrkatctcirxwuqknrycpdtcuadblzkkleduezgspoxhhssoipbmdgrqggpfdsanolzczpaggwxrlaleaqtnzxclmxwjucnujsptnbmmjzzjhypnlsoxjveywsufegzlfnyvkcnfevkshbckfropoydkdlblppllgefagjgpajsplvxknvtlgtjyhmnwxcpjjzcizihycvsnhnnmqohivekitxzuo") === "abcefghkrdjlmnwpiysqovtxzu");