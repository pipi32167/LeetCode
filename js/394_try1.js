var assert = require('assert');

var convert = function (nums, chars) {
  const num = Number(nums.join(''))
  const realChars = Array(num).fill(0).map(() => chars).reduce((s, e) => s.concat(e), [])
  return realChars
}

assert.deepEqual(convert([ '3' ], [ 'a' ]), [ 'a','a','a' ])

const CODE_0 = '0'.codePointAt(0)
const CODE_9 = '9'.codePointAt(0)
var isNum = function (char) {
  const code = char.codePointAt(0)
  return code >= CODE_0 && code <= CODE_9
}

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

  let nums = []
  let chars = []
  let i = 0
  const stack = []
  let result = []
  while (i < s.length) {
    console.log({ i, char: s[i], nums, chars, result: JSON.stringify(result), stack: JSON.stringify(stack) }, );
    
    switch (s[i]) {
      case '[':
        stack.push({
          nums, chars
        })
        nums = []
        break;
      case ']': {
          const { nums, chars } = stack[stack.length-1]
          const realChars = convert(nums, chars)
          if (stack.length > 1) {
            const lastChars = stack[stack.length - 1].chars
            stack[stack.length - 1].chars = lastChars.concat(realChars)
          } else {
            if (stack.length === 1) {
              stack.pop()
            }
            result = result.concat(realChars)
          }
        }
        break;
      default:
        if (isNum(s[i])) {
          if (chars.length > 0) {
            chars = []
          }
          nums.push(s[i])
        } else {
          chars.push(s[i])
        }
        break;
    }
    i++
  }

  if (chars.length > 0) {
    result = result.concat(chars)
  }
  while (stack.length > 0) {
    // console.log({ result });
    const {
      nums,
      chars
    } = stack.pop()
    result = result.concat(convert(nums, chars))
  }
  return result.join('')
};

assert.equal(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"), "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef")
assert.equal(decodeString("3[a]2[b4[F]c]"), "aaabFFFFcbFFFFc")
assert.equal(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef")
assert.equal(decodeString("3[a2[c]]"), "accaccacc")
assert.equal(decodeString("3[a]2[bc]"), "aaabcbc")