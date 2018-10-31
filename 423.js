var numWords = [
  'zero', //z 1
  'one', //o 8
  'two', //w 2
  'three', //h 7
  'four', //u 3
  'five', //v 6
  'six', //x 4
  'seven', //s 5
  'eight', //g 0
  'nine', //i 9
]

// 8 0 2 4 6 7 5 3 1 9

var counting = function (s, charCounts) {
  charCounts = charCounts || {}
  for(var i = 0; i < s.length; i++) {
    charCounts[s[i]] = charCounts[s[i]] || 0
    charCounts[s[i]] ++
  }
  return charCounts
}

var reduce = function (charCounts, word, count) {
  for(var i = 0; i < word.length; i++) {
    charCounts[word[i]] -= count
  }
}
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  
  var charCounts = counting(s)

  var checklist = [{
    key: 'g',
    num: 8,
  }, {
    key: 'z',
    num: 0,
  }, {
    key: 'w',
    num: 2,
  }, {
    key: 'u',
    num: 4,
  }, {
    key: 'x',
    num: 6,
  }, {
    key: 's',
    num: 7,
  }, {
    key: 'v',
    num: 5,
  }, {
    key: 'h',
    num: 3,
  }, {
    key: 'o',
    num: 1,
  }, {
    key: 'i',
    num: 9,
  }, ]
  var result = []
  for(var i = 0; i < checklist.length; i++) {
    var elem = checklist[i]
    var word = numWords[elem.num]
    var count = charCounts[elem.key] || 0
    
    if (count > 0) {
      console.log({word, count, charCounts});
      reduce(charCounts, word, count)
      result.push({
        num: elem.num,
        count: count
      }) 
    }
  }
  var result2 = []
  result.sort(function (a, b) {
    return a.num - b.num
  }).forEach(function (elem) {
    result2 = result2.concat(new Array(elem.count).fill(elem.num))
  })
  return result2.join('')
};

// console.log(originalDigits('owoztneoer'), '012')
// console.log(originalDigits('fviefuro'), '45')
console.log(originalDigits("nnei"), '9')

// var s = new Array(10000).fill(0).map((elem, idx) => numWords[idx % 10]).join('')
// console.log(s.length);
// console.log(originalDigits(s), '45')
