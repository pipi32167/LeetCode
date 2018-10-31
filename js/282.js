var Timer = {
  timers: {},
  time: {},
  count: {},
  // use: true,
}

Timer.start = function (name) {
  if (this.use) {
    this.timers[name] = Date.now()
  }
}

Timer.end = function (name) {
  if (this.use) {
    this.time[name] = this.time[name] || 0
    this.time[name] += Date.now() - this.timers[name]
    this.count[name] = this.count[name] || 0
    this.count[name]++
  }
}

var split = function (input) {
  return input.split('')
}

var evaluate = function (input) {
  Timer.start('evaluate')
  // input = split(input)

  var input2 = []
  for(var i = 0; i < input.length; i++) {
    if (input[i] === '') {
      input2.push(input2.pop() + input[i+1])
      i++
    } else {
      input2.push(input[i])
    }
  }
  input = input2
  // console.log(input);

  var ops = [], vals = []
  for(var i = 0; i < input.length; i++) {

    var elem = input[i]
    switch(input[i]) {
      case '+':
      case '-': ops.push(elem); break;
      case '*': {
        i++
        var val2 = input[i]
        var val1 = vals.pop()
        vals.push(Number(val1) * Number(val2))
      }
      break;
      default: vals.push(elem); break;
    }
    // console.log(vals);
  }
  // console.log(vals);
  while(ops.length > 0) {
    var op = ops.shift()
    var val1 = vals.shift()
    var val2 = vals.shift()
    if (op === '+') {
      vals.unshift(Number(val1) + Number(val2))
    } else {
      vals.unshift(Number(val1) - Number(val2))
    }
  }

  Timer.end('evaluate')
  
  return Number(vals[0])
}

// console.log(evaluate('1+2-3*4'), -9);
// console.log(evaluate('1+2-3*4*0'), 3);
// var input = '12-3*4'.split('')
// input.splice(1, 0, '')
// console.log(evaluate(input), 0);
// var input = ["3","","4","*","5","","6","-","2","-","3","+","7","","4","","9","","0"]
// console.log(evaluate(input), 9389);
// var input = '2147483647'.split('').join('*').split('').map(elem => elem === '*' ? '' : elem)
// console.log(input);
// console.log(evaluate(input));


var go = function (nums, target, prefix, result) {
  Timer.start('go')
  
  if (prefix.length === nums.length - 1) {
    
    var input = []
    for(var i = 0; i < nums.length - 1; i++) {
      input.push(nums[i], prefix[i])
    }
    input.push(nums[i])
    
    // console.log('%j', input, evaluate(input), target);
    if (evaluate(input) === target) {
      // console.log('%j', input);
      result.push(input.join(''))
    }
    Timer.end('go')
    return 
  }

  var ops = ['*', '+', '-', '', ]
  // var ops = ['', ]

  for(var i = 0; i < ops.length; i++) {
    if (ops[i] === '' && nums[prefix.length] === '0' && prefix[prefix.length - 1] !== '') {
      continue
    }
    prefix.push(ops[i])
    go(nums, target, prefix, result)
    prefix.pop()
    // go(nums, target, prefix.concat([ops[i]]), result)
  }
  Timer.end('go')
}

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  if (num.length === 0) {
    return []
  }
  var nums = num.split('')
  var result = []
  go(nums, target, [], result)
  return result
};

num = "123", target = 6
result = ["1+2+3", "1*2*3"] 
console.log(addOperators(num, target), result);
num = "232", target = 8
result = ["2*3+2", "2+3*2"]
console.log(addOperators(num, target), result);
num = "105", target = 5
result = ["1*0+5","10-5"]
console.log(addOperators(num, target), result);
num = "00", target = 0
result = ["0+0", "0-0", "0*0"]
console.log(addOperators(num, target), result);
num = "3456237490", target = 9191
result = []
console.log(addOperators(num, target), result);
num = "", target = 5
result = []
console.log(addOperators(num, target), result);
num = "1000000009", target = 9
result = 3280
console.log('%j', addOperators(num, target).length, result);
// num = "34562374903456237490", target = 9191
// result = []
// console.log(addOperators(num, target), result);
num = "2147483647", target = 2147483647
result = ['2147483647']
console.log(addOperators(num, target), result);
// console.log(Timer.time);
// console.log(Timer.count);
