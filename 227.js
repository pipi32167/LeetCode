var trim = function (s) {
  
  for(var i = 0; i < s.length; i ++) {
    if (s[i] !== ' ') {
      break
    }
  }

  for(var j = s.length - 1; j >= 0; j --) {
    if (s[j] !== ' ') {
      break
    }
  }

  return s.substring(i, j + 1)
}

// console.log(trim(' 123456 '));

var split = function (s, chars) {
  
  var result = []
  var start = 0
  for(var i = 0; i < s.length; i++) {
    if (chars.indexOf(s[i]) >= 0) {
      result.push(Number(s.slice(start, i)))
      result.push(trim(s.slice(i, i+1)))
      start = i+1
    }
  }
  result.push(Number(s.slice(start)))
  return result
}

// console.log(split('1+2*3/4+5-6', ['+', '-', '*', '/']));
// console.log(split('11 +2*3/4+5-6', ['+', '-', '*', '/']));

var indexOf = function (arr1, arr2) {
  for(var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) >= 0) {
      return i
    }
  }
  return -1
}

// console.log(indexOf('-a+b-c', ['+', '-']));

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var now = Date.now()
  var words = split(s, ['+', '-', '*', '/'])
  console.log('calculate 1', Date.now() - now); now = Date.now()

  var stack
  while(words.length > 1) {
    // console.log(words);
    // console.log('calculate 2', Date.now() - now); now = Date.now()
    
    var idx = indexOf(words, ['*', '/'])
    if (idx >= 0) {
      var num1 = Number(words[idx - 1]), num2 = Number(words[idx + 1])
      var res = words[idx] === '*' ? num1 * num2 : Math.floor(num1 / num2)
      words.splice(idx-1, 3, res)
      continue
    }
    idx = indexOf(words, ['+', '-'])
    if (idx >= 0) {
      var num1 = Number(words[idx - 1]), num2 = Number(words[idx + 1])
      var res = words[idx] === '+' ? num1 + num2 : num1 - num2
      words.splice(idx-1, 3, res)
      continue
    }
    break
  }

  return Number(words[0])
};


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var now = Date.now()
  var words = split(s, ['+', '-', '*', '/'])
  // console.log('words', words.length);
  // console.log('calculate 1', Date.now() - now); now = Date.now()
  var i = 0 
  var stack = [words[i++]]
  while(i < words.length) {
    // console.log(words);
    // console.log('calculate 2', Date.now() - now); now = Date.now()
    var word = words[i++]
    if (['*', '/'].indexOf(word) >= 0) {
      var num1 = stack.pop()
      var num2 = words[i++]
      var res = word === '*' ? num1 * num2 : Math.floor(num1 / num2)
      stack.push(res)
      // console.log(num1, word, num2, res);
      
    } else if (['+', '-'].indexOf(word) >= 0) {
      if (stack.length > 1) {
        var num2 = stack.pop()
        var op = stack.pop()
        var num1 = stack.pop()
        var res = op === '+' ? num1 + num2 : num1 - num2
        // console.log(num1, op, num2, res);
        stack.push(res)
      }
      stack.push(word)
      stack.push(words[i++]) 
    }
  }

  if (stack.length > 1) {
    var num2 = stack.pop()
    var op = stack.pop()
    var num1 = stack.pop()
    var res = op === '+' ? num1 + num2 : num1 - num2
    stack.push(res)
    // console.log(num1, op, num2, res);
  }

  return stack[0]
};

console.log(calculate("3+2*2"), 7);
console.log(calculate(" 3/2 "), 1);
console.log(calculate(" 3+5 / 2 "), 5);
console.log(calculate(" 0 "), 0);
console.log(calculate(require('./227_input')));


