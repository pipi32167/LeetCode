var isValid = function (S, i, j) {
  const s = S.slice(i, j + 1)
  if (s.length > 1 && Number(s) === 0) {
    return false
  }
  return true
}

var isValid2 = (e) => Number(e).toString().length === e.length

var gen = function (S, i, j) {
  const s = S.slice(i, j + 1)
  const result = []
  if (isValid2(s)) {
    result.push(s)
  }
  for (let k = 1; k < s.length; k++) {
    // console.log(k, s.slice(i, k), s.slice(k));
    const e = s.slice(0, k) + '.' + s.slice(k)
    if (isValid2(e)) {
      result.push(e)
    }
  }
  // console.log({ s, result });
  return result
}


/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function (S) {

  S = S.slice(1, S.length - 1)
  const result = []
  for (let i = 0; i < S.length - 1; i++) {
    if (isValid(S, 0, i) && isValid(S, i + 1, S.length - 1)) {
      const left = gen(S, 0, i)
      const right = gen(S, i + 1, S.length - 1)
      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          result.push('(' + left[j] + ', ' + right[k] + ')')
        }
      }
    }
  }
  return result
};

var assert = require('assert');
assert.deepEqual(gen('12', 0, 1), ['12', '1.2']);
assert.deepEqual(gen('100', 0, 2), ['100']);
assert.deepEqual(ambiguousCoordinates("(123)").sort(), ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"].sort())
assert.deepEqual(ambiguousCoordinates("(00011)").sort(), ["(0.001, 1)", "(0, 0.011)"].sort())
assert.deepEqual(ambiguousCoordinates("(0123)").sort(), ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"].sort())
assert.deepEqual(ambiguousCoordinates("(100)").sort(), ["(10, 0)"].sort())