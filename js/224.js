
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
  // console.log(i, j);
  if (i < j+1) {
    return s.substring(i, j+1)
  }
  return ''
  
}

// console.log(trim('   ').length);

var split = function (input, opChars = '+-*/()') {

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
  return result.filter(elem => elem.length > 0)
}

// console.log(split("   (  3 ) "));


var cost = function (vals, ops) {
  // console.log('cost before', vals);
  while (ops.length > 0) {
    var op = ops.shift()
    var val1 = Number(vals.shift())
    var val2 = Number(vals.shift())
    // console.log(val1, op, val2);
    if (op === '+') {
      vals.unshift(val1 + val2)
    } else {
      vals.unshift(val1 - val2)
    }
    // console.log(vals);
  }
  // console.log('cost after ', vals);
  return vals[0]
}

/**
 * @param {string[]} input
 * @param {number]} l
 * @param {number]} u
 * @return {number}
 */
var doCalculate = function (input) {
  // console.log(input)
  
  var vals = [[]], ops = [[]]
  var level = 0
  for(var i = 0; i < input.length; i++) {
    switch(input[i]) {
      case '(': {
        level++
        vals.push([])
        ops.push([])
      } 
      break;
      case ')': {
        vals[level-1].push(cost(vals[level], ops[level]))
        level--
        vals.pop()
        ops.pop()
      } 
      break;
      case '+':
      case '-': ops[level].push(input[i]); break;
      default: vals[level].push(Number(input[i])); break;
    }
  }
  // console.log(vals, ops);
  
  return cost(vals[0], ops[0])
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var input = split(s, '+-()')
  // return doCalculate(input, 0, input.length-1)
  return doCalculate(input)
};

console.log(calculate("1 + 1"), 2);
console.log(calculate(" 2-1 + 2 "), 3);
console.log(calculate('(1+(4+5+2)-(3+4))+(6+8)'), 19);
console.log(calculate("   (  3 ) "), 3);