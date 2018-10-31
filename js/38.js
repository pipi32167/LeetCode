

var countAndSayNumbers;

var split = function (str) {
  var results = [];
  
  for(var i = 0, begin = 0; i < str.length - 1; i ++) {
    if (str[i] !== str[i+1]) {
      results.push(str.slice(begin, i + 1));
      begin = i+1;
    }
  }
  results.push(str.slice(begin));
  // console.log('split', str, results);
  
  return results;
}

var genCountAndSayNumbers = function (n) {
  
  countAndSayNumbers = ['1'];
  while (countAndSayNumbers.length < n) {
    
    var lastNum = countAndSayNumbers[countAndSayNumbers.length - 1];
    var parts = split(lastNum);
    var newNum = parts.map(function (elem) {
      return elem.length + elem[0];
    }).join('');
    countAndSayNumbers.push(newNum);
  }
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

  genCountAndSayNumbers(n);
  return countAndSayNumbers[n - 1];
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));