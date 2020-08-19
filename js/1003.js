
/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
  if (S.length % 3 !== 0) return false
  const stack = []
  let frame = []
  for (let i = 0; i < S.length; i++) {
    // console.log({ i, frame });
    if (frame.length === 0 && S[i] === 'a') {
      frame.push(S[i])
      continue
    }

    if (frame.length === 1 && S[i] === 'b') {
      frame.push(S[i])
      continue
    }

    if (frame.length === 2 && S[i] === 'c') {
      frame = stack.pop() || []
      continue
    }

    if (S[i] !== 'a') {
      return false
    }
    stack.push(frame)
    frame = ['a']
  }
  // console.log(stack, frame);
  return stack.length === 0 && frame.length === 0
};
/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
  // if (S.length % 3 !== 0) return false
  let len
  do {
    len = S.length
    S = S.replace(/abc/g, '')
  } while(len !== S.length)
  return S.length === 0
};

console.log(isValid('aabcbc'));
console.log(isValid('abcabcababcc'));
console.log(isValid('aabcbabcc'));
console.log(isValid('aaaabcbcbcbc'));
console.log(isValid('ababababcccc'));
console.log(isValid('abccba'));
console.log(isValid('cba'));
console.log(isValid('ab'));
console.log(isValid('abca'));
console.log(isValid(require('./1003_input.json')))
for (let i = 0; i < 2000; i++) isValid(require('./1003_input.json'))