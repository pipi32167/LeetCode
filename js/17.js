var numToChars = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

var zip = function (arr1, arr2) {
  
  var results = [];
  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      results.push(arr1[i] + arr2[j]);
    } 
  }
  return results;
}

// console.log(zip(['a','b','c'], ['d','e','f']));


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  digits = digits.split('')
  var possibleChars = digits.map(function (digit) {
    return numToChars[digit] || []
  })

  var results = possibleChars[0] || [];
  for(var i = 1; i < possibleChars.length; i++) {
    results = zip(results, possibleChars[i]);
  }
  return results;
};

console.log(letterCombinations(''));
console.log(letterCombinations('23'));
