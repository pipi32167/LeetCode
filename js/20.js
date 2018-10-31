var brackets = {
  '(': ')',
  '{': '}',
  '[': ']',
}


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var results = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (brackets[char]) {
      results.push(char)
    } else if(brackets[results[results.length - 1]] === char) {
      results.pop();
    } else {
      return false;
    }
  }

  // console.log(results);
  
  return results.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('([{}])'));
console.log(isValid('([]{})'));
console.log(isValid('('));
console.log(isValid('()['));
console.log(isValid('()[}'));
console.log(isValid(')'));
console.log(isValid('([{([}])}])'));

