/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  
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
        console.log(val1, token, val2, '=', vals[vals.length-1]);
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

console.log(evalRPN(["2", "1", "+", "3", "*"]), 9);
console.log(evalRPN(["4", "13", "5", "/", "+"]), 6)
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]),22)