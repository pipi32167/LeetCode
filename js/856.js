/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
  // console.log(S);
  const stack = []
  const ops = []
  let res = -1
  const popup = () => {
    const v = stack.pop()
    const op = ops.pop()
    if (op === '+') {
      res += v
    } else if (op === '^') {
      res *= 2
    }
  }
  for (let i = 0; i < S.length; i++) {
    const c = S[i];

    switch (c) {
      case '(':
        if (res >= 1) {
          stack.push(res)
          ops.push('+')
        } else if (res === 0) {
          stack.push(res)
          ops.push('^')
        }
        res = 0
        break;

      case ')':
        if (res === 0) {
          res += 1
        } else if (stack.length > 0) {
          popup()
        }
        while (ops.length > 0 && ops[ops.length - 1] === '+') {
          popup()
        }
        break
    }
    // console.log({ c, stack, ops, res });
  }
  while (stack.length > 0) {
    popup()
    // console.log({ stack, ops, res });
  }
  return res
};

var assert = require('assert');

assert.equal(scoreOfParentheses("(()())()"), 5)
assert.equal(scoreOfParentheses("(()(()))()"), 7)
assert.equal(scoreOfParentheses("()"), 1)
assert.equal(scoreOfParentheses("(())"), 2)
assert.equal(scoreOfParentheses("((()))"), 4)
assert.equal(scoreOfParentheses("(((())))"), 8)
assert.equal(scoreOfParentheses("()()"), 2)
assert.equal(scoreOfParentheses("()()()()()"), 5)
assert.equal(scoreOfParentheses("(()())"), 4)
assert.equal(scoreOfParentheses("(()(()))"), 6)

