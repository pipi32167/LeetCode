var isPalindrome = function (s, i, j) {

  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++, j--
  }
  return true
}

// console.log(isPalindrome('a', 0, 0) === true);
// console.log(isPalindrome('aa', 0, 1) === true);
// console.log(isPalindrome('aaa', 0, 2) === true);
// console.log(isPalindrome('aba', 0, 2) === true);
// console.log(isPalindrome('ab', 0, 1) === false);
// console.log(isPalindrome('abc', 0, 2) === false);


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {

  let count = 0
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= s.length - i; j++) {
      // console.log(j, j + i - 1);
      if (isPalindrome(s, j, j + i - 1)) {
        count++
      }
    }
  }
  return count
};

console.log(countSubstrings('abc') === 3);
console.log(countSubstrings('aba') === 4);
console.log(countSubstrings('aaa') === 6);