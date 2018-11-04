
function go (s, idx, stack) {
  // console.log(s, idx, stack);
  
  if (idx >= s.length) {
    return stack.length === 0
  }

  if (s[idx] === '(') {
    stack.push('(')
    return go(s, idx + 1, stack)
  } 
  
  if (s[idx] === ')') {
    if (stack[stack.length - 1] !== '(') {
      return false
    }
    stack.pop()
    return go(s, idx + 1, stack)
  } 

  if (go(s, idx + 1, stack.slice(0))) {
    return true
  }

  stack.push('(')
  if (go(s, idx + 1, stack.slice(0))) {
    return true
  }
  stack.pop()

  stack.pop()
  if (go(s, idx + 1, stack.slice(0))) {
    return true
  }
  stack.push('(')

  return false
}

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  
  let stack = []
  let res = go(s, 0, stack)
  // console.log(stack);
  return res
};

console.log(checkValidString('()') === true);
console.log(checkValidString('(*)') === true);
console.log(checkValidString('(*))') === true);
console.log(checkValidString('(*())') === true);
console.log(checkValidString('(*') === true);
console.log(checkValidString('*)') === true);
console.log(checkValidString('((') === false);
console.log(checkValidString(')(') === false);
console.log(checkValidString('())') === false);
console.log(checkValidString('()(') === false);
console.log(checkValidString('(()') === false);
console.log(checkValidString(new Array(50).fill('(').concat(new Array(50).fill(')')).join('')) === true);
console.log(checkValidString(new Array(50).fill('()').join('')) === true);
console.log(checkValidString(new Array(100).fill('*').join('')) === true);

