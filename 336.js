
var reverse = function (s) {
  
  var result = '';
  for(var i = s.length - 1; i >= 0; i --) {
    result += s[i];
  }
  return result;
}

// var call = 0
var isPalindrome = function (s, begin, end) {
  // call ++;
  if (begin == null) {
    begin = 0;
  }
  if (end == null) {
    end = s.length;
  }

  // console.log('isPalindrome', s);
  // var begin = 0;
  // var end = s.length - 1;
  while(begin < end - 1) {
    if (s[begin] !== s[end - 1]) {
      // console.log(begin, s[begin], end - 1, s[end - 1]);
      return false;
    }
    begin ++;
    end --;
  }

  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeFrom1stChar = function(s) {

  if (s.length <= 1) {
    // return s;
    return {
      begin: 0, 
      end: s.length,
    }
  }

  var begin = 0, end = s.length, skip = (end - begin) > 1000, beforeEnd = s.length;
  do {
    // console.log(begin, end);
    if (!skip) {
      if (isPalindrome(s, begin, end)) {
        break
      }
      end --; 
    } else {
      if (isPalindrome(s, begin, end)) {
        skip = false;
        end = beforeEnd;
      } else {
        beforeEnd = end;
        end = Math.floor((begin + end) / 2);
      }
    }
  } while(begin < end);

  // return s.slice(begin, end);
  return { begin: begin, end: end };
};


//TODO：只处理了prefix，还需要处理suffix
/**
 * @param {string} s
 * @return {string}
 */
var possiblePalindromes = function(s) {
  var res1 = longestPalindromeFrom1stChar(s);
  // console.log(result, s.slice(result.end));
  var longest = reverse(s);
  var shortest = reverse(s.slice(res1.end))

  // console.log({ longest, shortest });

  if (longest.length === 0) {
    return [];
  }
  
  var res = []

  for(var i = shortest.length || 1; i <= longest.length; i++) {
    // console.log(i, longest.length, shortest.length);
    var word = longest.slice(0, i);
    // console.log(word, word + s, isPalindrome(word + s));
    if (isPalindrome(word + s)) {
      res.push(word);
    } 
  }
  return res;
};

// console.log(possiblePalindromes(''));
// console.log(possiblePalindromes('a'));
// console.log(possiblePalindromes('aba'));
// console.log(possiblePalindromes('abc'));
// console.log(possiblePalindromes('abac'));
// console.log(possiblePalindromes('aacecaaa'));

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  if (words.length <= 1) {
    return [];
  }
  var results = [];
  for(var i = 0; i < words.length; i++) {
    var word = words[i];
    var res = possiblePalindromes(word);
    // console.log(res);
    for(var j = 0; j < res.length; j++) {
      var idx = words.findIndex(function (elem, idx) {
        return idx !== i && elem === res[j]
      });
      if (idx >= 0) {
        results.push([idx, i]);
      }
    }
  }
  return results;
};
// /**
//  * @param {string[]} words
//  * @return {number[][]}
//  */
// var palindromePairs = function(words) {
//   var results = [];
//   for(var i = 0; i < words.length; i++) {
//     for(var j = 0; j < words.length; j++) {
//       if (i === j) {
//         continue;
//       }

//       var word1 = words[i], word2 = words[j];
//       if (word1 === word2 || isPalindrome(word1 + word2)) {
//         results.push([i, j]);
//       }
//     }
//   }
//   return results;
// };

console.log(palindromePairs([]));
console.log(palindromePairs(['a']));
console.log(palindromePairs(['a', 'b']));
console.log(palindromePairs(["bat", "tab", "cat"]));
console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]));
var { words } = require('./336_input')
console.log(palindromePairs(words).length);
