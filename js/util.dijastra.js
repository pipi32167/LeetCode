
var trim = function (s) {
  
  for(var i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      break
    }
  }
  for(var j = s.length - 1; j >= 0; j--) {
    if (s[j] !== ' ') {
      break
    }
  }
  if (i > j) {
    return ''
  }
  return s.substring(i, j+1)
}

// console.log(trim(' 1  '), '1');
// console.log(trim(' 1  ').length, 1);
// console.log(trim(' 1 2 3 '), '1 2 3');


var split = function (input, opChars) {

  var result = []
  var start = 0, end = 0
  while(end < input.length) {
    if (opChars.indexOf(input[end]) >= 0) {
      if (start < end) {
        result.push(trim(input.substring(start, end)), trim(input[end]))
      } else {
        result.push(trim(input[end]))
      }
      end ++
      start = end
    } else {
      end ++
    }
  }

  result.push(trim(input.substring(start)))

  return result
}

// console.log(split('(1+2- 3)*4/50%6', '+-*/%()'));

var evaluate = function (input) {

  input = split(input, '+-*/%()')
  var vals = []
  var ops = []
  for(var i = 0; i < input.length; i++) {
    switch(input[i]) {
      case '+': 
      case '-': 
      case '*': 
      case '/': 
      case '%': ops.push(input[i]); break;
      case '(': break;
      case ')': {
        var op = ops.pop()
        var val2 = Number(vals.pop())
        var val1 = Number(vals.pop())
        // console.log({ val1, op, val2 });
        
        switch (op) {
          case '+': vals.push(val1 + val2); break;
          case '-': vals.push(val1 - val2); break;
          case '*': vals.push(val1 * val2); break;
          case '/': vals.push(val1 / val2); break;
          case '%': vals.push(val1 % val2); break;
        }
      }
      break
      default: vals.push(input[i]); break;
    }
  }
  // console.log(vals);
  
  return vals[0]
}

var assert = require('assert')
assert.equal(evaluate('(((((1+2)-3)*4)/50)%6)'), 0);
