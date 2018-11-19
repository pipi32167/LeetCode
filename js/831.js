/**
 * @param {string} S
 * @return {string}
 */
var maskPIIEmail = function (S) {
  S = S.toLowerCase()
  let parts = S.split('@')
  parts[0] = parts[0][0] + '*****' + parts[0][parts[0].length - 1]
  return parts.join('@')
}

var assert = require('assert');
assert.equal(maskPIIEmail('LeetCode@LeetCode.com'), 'l*****e@leetcode.com')
assert.equal(maskPIIEmail('ab@ABC.COM'), 'a*****b@abc.com')

/**
 * @param {string} S
 * @return {string}
 */
var maskPIIPhoneNumber = function (S) {
  const firstChar = /[\+-]/.test(S[0]) ? S[0] : '+'
  S = S.replace(/[{}\(\)\+-]/g, '')
  if (S.length === 10) {
    return '***-***-' + S.slice(6)
  } else {
    let firstStars = new Array(S.length - 10).fill('*').join('')
    return firstChar + firstStars + '-***-***-' + S.slice(S.length - 4)
  }
}

var assert = require('assert');
assert.equal(maskPIIPhoneNumber("1(234)567-890"), "***-***-7890")
assert.equal(maskPIIPhoneNumber("86-(10)12345678"), "+**-***-***-5678")
assert.equal(maskPIIPhoneNumber("-86-(10)12345678"), "-**-***-***-5678")

/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function (S) {
  S = S.replace(/\s/g, '')

  if (S.indexOf('@') >= 0) {
    return maskPIIEmail(S)
  } else {
    return maskPIIPhoneNumber(S)
  }
};

var assert = require('assert');
var input = "LeetCode@LeetCode.com"
var output = "l*****e@leetcode.com"
assert.equal(maskPII(input), output)
var input = "AB@qq.com"
var output = "a*****b@qq.com"
assert.equal(maskPII(input), output)
var input = "1(234)567-890"
var output = "***-***-7890"
assert.equal(maskPII(input), output)
var input = "86-(10)12345678"
var output = "+**-***-***-5678"
assert.equal(maskPII(input), output)
var input = "+(501321)-50-23431"
var output = "+***-***-***-3431"
assert.equal(maskPII(input), output)
var input = "(3906)2 07143 711"
var output = "+***-***-***-3711"
assert.equal(maskPII(input), output)
