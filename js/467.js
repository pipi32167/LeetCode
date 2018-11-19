const codeStart = 'a'.codePointAt(0)

var isContinue = function (code1, code2) {
  // console.log({code1, code2});
  return (code1 + 1) === code2 || (code1 + 1) % 26 === code2;
}

// var assert = require('assert') assert.ok(isContinue('z'.codePointAt(0) -
// codeStart, 'a'.codePointAt(0) - codeStart));

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {

  const p2 = p
    .split('')
    .map(e => e.charCodeAt(0) - codeStart)
  let dp = new Array(26).fill(0).map(() => new Array(p.length).fill(0))
  for (let i = p2.length - 1; i >= 0; i--) {
    dp[p2[i]][0] = true
    for (let j = i + 1; j < p2.length; j++) {
      if (isContinue(p2[j - 1], p2[j])) {
        // let str = p.slice(i, j + 1) dp[str] = true
        dp[p2[i]][(j - i)] = true
      } else {
        break
      }
    }
  }
  let count = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (dp[i][j]) {
        count++
      }
    }
  }
  return count
};

var assert = require('assert');
assert.equal(findSubstringInWraproundString('a'), 1);
assert.equal(findSubstringInWraproundString('cac'), 2);
assert.equal(findSubstringInWraproundString('zab'), 6);
assert.equal(findSubstringInWraproundString(require('./467_input').sample1), 38207);
assert.equal(findSubstringInWraproundString(require('./467_input').sample2), 259259);

var _ = require('underscore')
var p = _
  .range(0, 400)
  .map(() => _.range(0, 26).map(e => String.fromCharCode(e + codeStart)).join(''))
  .join('');
assert.equal(findSubstringInWraproundString(p), 270075);
// // console.log(p);