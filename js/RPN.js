var OPS = ['+','-','*','/','(',')']

var OP_PRIORITY = {
  '+': 0,
  '-': 0,
  '*': 1,
  '/': 1,
  '(': 2,
}

var cmpOpPriority = function (op1, op2) {
  return OP_PRIORITY[op1] - OP_PRIORITY[op2]
}

// console.log(cmpOpPriority('+', '-'), 0);
// console.log(cmpOpPriority('*', '-'), 1);
// console.log(cmpOpPriority('+', '/'), -1);
// console.log(cmpOpPriority('(', '/'), 1);
// console.log(cmpOpPriority('+', '('), -2);


/**
 * @param {string} s
 * @return {string}
 */
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

/**
 * @param {string} s
 * @return {string[]}
 */
var parse = function (s) {

  var result = []
  var start = 0, end = 0
  while(end < s.length) {
    if (OPS.indexOf(s[end]) >= 0) {
      if (start < end) {
        result.push(trim(s.substring(start, end)), trim(s[end]))
      } else {
        result.push(trim(s[end]))
      }
      end ++
      start = end
    } else {
      end ++
    }
  }

  result.push(trim(s.substring(start)))
  return result
}

// console.log(parse('(a+b)*c-(a+b)/e'));

/**
 * @param {string} tokens
 * @return {string[]}
 */
var translate = function (tokens) {
  var s1 = [], s2 = []

  for(var i = 0; i < tokens.length; i++) {

    var token = tokens[i]
    if (OPS.indexOf(token) < 0) {
      s2.push(token)
    } else if (token === '(') {
      s1.push(token)
    } else if (token === ')') {
      while(s1[s1.length - 1] !== '(') {
        // console.log('loop 1');
        s2.push(s1.pop())
      }
      s1.pop()
    } else {
      // console.log('cmp', token, s1[s1.length - 1], cmpOpPriority(token, s1[s1.length - 1]));
      while(s1[s1.length - 1] !== '(' && cmpOpPriority(token, s1[s1.length - 1]) <= 0) {
        // console.log('loop 2');
        s2.push(s1.pop())
      }
      s1.push(token)
    }
    // console.log({ token, s1, s2 });
  }

  while(s1.length > 0) {
    s2.push(s1.pop())
  }
  // return s2.reverse()
  return s2
}

// console.log(translate(parse('(a+b-c)*c-(a-c+b)/e')).join(''));
// console.log(translate(parse('a/a*a')).join(''));


/**
 * @param {string[]} tokens
 * @return {number}
 */
var doEvaluate = function(tokens) {
  
  var vals = []
  for(var i = 0; i < tokens.length; i++) {

    var token = tokens[i]
    // console.log({vals, token});
    switch (token) {
      case '+':
      case '-':
      case '*':
      case '/': {
        var val2 = Number(vals.pop())
        var val1 = Number(vals.pop())
        switch(token) {
          case '+': vals.push(val1 + val2); break;
          case '-': vals.push(val1 - val2); break;
          case '*': vals.push(val1 * val2); break;
          case '/': {
            var res = Number(val1 / val2)
            res = res >= 0 ? Math.floor(res) : Math.ceil(res)
            vals.push(res);
          }
          break;
        }
        // console.log(val1, token, val2, '=', vals[vals.length-1]);
      }
      break
      default: {
        vals.push(token)
      }
      break
    }
  }
  
  return Number(vals[0])
};


var evaluate = function (s) {
  var tokens = parse(s)
  tokens = translate(tokens)
  return doEvaluate(tokens)
}

console.log(evaluate('1+2'), 3);
console.log(evaluate('1*2'), 2);
console.log(evaluate('1*2/3'), 0);
console.log(evaluate('((1+2-3)*4-(5+6-7)/2)/2'), -1);
console.log(evaluate('2/2*2'), 2);
console.log(evaluate('2/2+2*2/2'), 3);