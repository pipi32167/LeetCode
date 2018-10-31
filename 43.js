var getNumBy = function (num, pos) {
  if (pos < num.length) {
    return Number(num[pos]);
  }
  return 0;
}

var repeat = function (char, times) {
  return new Array(times).fill(char).join('');
}

var add = function (num1, num2) {
  
  var len = num1.length > num2.length ? num1.length : num2.length;
  if (num1.length < len) {
    num1 = repeat('0', len - num1.length) + num1;
  }
  if (num2.length < len) {
    num2 = repeat('0', len - num2.length) + num2;
  }
  // console.log({num1, num2});
  
  var carry = 0;
  var result = [];
  for(var i = len - 1; i >= 0; i--) {
    var n1 = getNumBy(num1, i);
    var n2 = getNumBy(num2, i);
    var sum = n1 + n2 + carry;
    var n = sum % 10;
    carry = Math.floor(sum / 10);
    result.unshift(n);
    // console.log({ n1, n2, sum, n, carry });
    
  }
  if (carry > 0) {
    result.unshift(carry);
  }
  return result.join('');
}

// console.log(add('18', '9'));
// console.log(add('0', '111'));
// console.log(add('1123', '1'));
// console.log(add('123', '321'));
// console.log(add('999999999999999999999', '1'));
// console.log(add('555555555555555555555555555555555', '555555555555555555555555555555555'));


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  
  var len = num2.length;

  var result = [];
  for(var i = len - 1; i >= 0; i --) {
    var n2 = getNumBy(num2, i);
    var res2 = '0';
    for(var j = 0; j < n2; j++) {
      // console.log('add 1', res2, num1);
      res2 = add(res2, num1);
      // console.log('add 2', res2, num1);
    }

    for(var j = len - 1; j > i; j--) {
      res2 += '0';
    }

    result.push(res2)
  }

  // console.log(result);
  
  var result2 = '0';
  for(var i = 0; i < result.length; i++) {
    result2 = add(result2, result[i]);
  }
  result2 = result2.split('');
  while(result2.length > 1 && result2[0] === '0') {
    result2 = result2.slice(1);
  }
  return result2.join('');
};

console.log(multiply('111', '0'));
console.log(multiply('111', '1'));
console.log(multiply('111', '2'));
console.log(multiply('111', '10'));
console.log(multiply('9', '9'));
console.log(multiply('99', '99'));
console.log(multiply('0', '99'));

