var startsWith = function (s, idx, s2) {
  
  if (s.length - idx < s2.length) {
    return false
  }
  for(let i = 0; i < s2.length; i++) {
    if (s[idx + i] !== s2[i]) {
      return false
    }
  }
  return true
}

// console.log(startsWith('123', 0, '123') === true);
// console.log(startsWith('123', 0, '12') === true);
// console.log(startsWith('123', 1, '23') === true);
// console.log(startsWith('123', 0, '23') === false);
// console.log(startsWith('123', 3, '123') === false);

var isOk = function (num, idx, num1, num2) {

  if (idx >= num.length) {
    return true
  }
  
  var num3 = num1 + num2
  var num3Str = num3.toString()
  if (startsWith(num, idx, num3Str) && isOk(num, idx + num3Str.length, num2, num3)) {
    return true
  }
  return false
}

// console.log(isOk('123', 0, 1, 2) === false);
// console.log(isOk('123', 2, 1, 2) === true);
// console.log(isOk('1233', 2, 1, 2) === false);
// console.log(isOk('12324', 3, 1, 23) === true);

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  const num1MaxLen = num[0] === '0' ? 1 : num.length
    
  for (let i = 1; i <= num1MaxLen; i++) {
    let num1 = Number(num.slice(0, i))
    const num2MaxLen = num[i] === '0' ? 1 : num.length - i
    for (let j = 1; j <= num2MaxLen; j++) {
      let num2 = Number(num.slice(i, i+j))
      if (i+j >= num.length) {
        break
      }
      if (isOk(num, i+j, num1, num2)) {
        return true
      }
    }
  }
  return false
};

console.log(isAdditiveNumber('101') === true);
console.log(isAdditiveNumber('0123') === false);
console.log(isAdditiveNumber('1023') === false);
console.log(isAdditiveNumber('1203') === false);
console.log(isAdditiveNumber('10') === false);
console.log(isAdditiveNumber('112358') === true);
console.log(isAdditiveNumber('199100199') === true);
console.log(isAdditiveNumber('10203050801302103405508901440233037706100987015970258404181067650109460177110286570463680750250121393019641803178110514229083204001346269021783090352457805702887092274650149303520241578170390881690632459860102334155016558014102679142960433494437070140873301134903170018363119030297121507304807526976077787420490125862690250203650110740') === true);
