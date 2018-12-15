/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {

  S = Array.from(S.toUpperCase()).filter(e => e !== '-')
  const result = []
  let i = S.length
  while (i - K > 0) {
    result.unshift(S.slice(i - K, i).join(''))
    i -= K
  }
  result.unshift(S.slice(0, i).join(''))
  return result.join('-')
};

const assert = require('assert');
assert.equal(licenseKeyFormatting("5F3Z-2e-9-w", 4), '5F3Z-2E9W')
assert.equal(licenseKeyFormatting("2-5g-3-J", 2), '2-5G-3J')
assert.equal(licenseKeyFormatting("-2-5g-3-J", 2), '2-5G-3J')
assert.equal(licenseKeyFormatting("2-4A0r7-4k", 4), "24A0-R74K")