var isChar = function (c) {
  return /[a-zA-Z]/.test(c)
}

var solve = function (S, prefix, idx, result) {

  if (prefix.length === S.length) {
    result.push(prefix.join(''))
    return
  }

  const c = S[idx]

  if (isChar(c)) {
    prefix.push(c.toLowerCase())
    solve(S, prefix, idx + 1, result)
    prefix.pop()
    prefix.push(c.toUpperCase())
    solve(S, prefix, idx + 1, result)
    prefix.pop()
  } else {
    prefix.push(c)
    solve(S, prefix, idx + 1, result)
    prefix.pop()
  }
}

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const result = []
  solve(S, [], 0, result)
  return result
};

var assert = require('assert');
assert.deepEqual(letterCasePermutation('a1b2'), ["a1b2", "a1B2", "A1b2", "A1B2"])
assert.deepEqual(letterCasePermutation('3z4'), ["3z4", "3Z4"])
assert.deepEqual(letterCasePermutation('12345'), ["12345"])