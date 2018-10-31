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

var isOk = function (num, idx, num1, num2, result) {

  if (idx >= num.length) {
    return true
  }
  
  var num3 = num1 + num2
  if (num3 >= Math.pow(2, 31)) {
    return false
  }
  var num3Str = num3.toString()
  result.push(num3)
  if (startsWith(num, idx, num3Str) && isOk(num, idx + num3Str.length, num2, num3, result)) {
    return true
  }
  return false
}

// console.log(isOk('123', 0, 1, 2) === false);
// console.log(isOk('123', 2, 1, 2) === true);
// console.log(isOk('1233', 2, 1, 2) === false);
// console.log(isOk('12324', 3, 1, 23) === true);

/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
  const num1MaxLen = S[0] === '0' ? 1 : S.length
    
  for (let i = 1; i <= num1MaxLen; i++) {
    let num1 = Number(S.slice(0, i))
    const num2MaxLen = S[i] === '0' ? 1 : S.length - i
    for (let j = 1; j <= num2MaxLen; j++) {
      let num2 = Number(S.slice(i, i+j))
      if (i+j >= S.length) {
        break
      }
      let result = [num1, num2]
      if (isOk(S, i+j, num1, num2, result)) {
        return result
      }
    }
  }
  return []
};

console.log(splitIntoFibonacci('101').join() === [1,0,1].join());
console.log(splitIntoFibonacci('0123').join() === [].join());
console.log(splitIntoFibonacci('1023').join() === [].join());
console.log(splitIntoFibonacci('1203').join() === [].join());
console.log(splitIntoFibonacci('10').join() === [].join());
console.log(splitIntoFibonacci('112358').join() === [1,1,2,3,5,8].join());
console.log(splitIntoFibonacci('199100199').join() === [1,99,100,199].join());
console.log(splitIntoFibonacci('10203050801302103405508901440233037706100987015970258404181067650109460177110286570463680750250121393019641803178110514229083204001346269021783090352457805702887092274650149303520241578170390881690632459860102334155016558014102679142960433494437070140873301134903170018363119030297121507304807526976077787420490125862690250203650110740').join() === [].join());
console.log(splitIntoFibonacci("539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511").join() === [].join());