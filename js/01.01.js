const { ok } = require("assert");


/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  // return new Set(Array.from(astr)).size === astr.length
  const START = 'a'.charCodeAt(0)
  const memo = new Array(26).fill(0)
  for (let i = 0; i < astr.length; i++) {
    const idx = astr.charCodeAt(i) - START
    if(memo[idx] > 0) return false
    memo[idx] ++
  }
  return true
};


ok(isUnique('abc'))
ok(!isUnique('leetcode'))