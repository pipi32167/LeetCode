

/**
 * 使用辗转相除法求最大公约数
 * @param {number} n1 
 * @param {number} n2 
 */
var maxCommonDivisor = function (n1, n2) {
  if (n1 === 0 || n2 === 0) {
    return 0
  }
  if (n1 < n2) {
    var tmp = n1
    n1 = n2
    n2 = tmp
  }
  // console.log({ n1,n2 });
  while(n2 > 0) {
    var t = n1 % n2
    n1 = n2
    n2 = t
  }
  return n1
}

var isEqual = function (nums1, nums2) {
  if (nums1.length !== nums2.length) {
    return false
  }

  for(var i = 0; i < nums1.length; i++) {
    if (nums1[i] !== nums2[i]) {
      return false
    }
  }
  return true
}

// console.log(isEqual([1,2,3], [1,2,3]), true);
// console.log(isEqual([1,2,3], [1,2,4]), false);
// console.log(isEqual([1,2,3], [1,2]), false);

var isRepeat = function (decimal) {
  
  if(decimal.length === 0 || decimal.length % 2 !== 0) {
    return false
  }

  if (!isEqual(decimal.slice(0, decimal.length / 2), decimal.slice(decimal.length / 2))) {
    return false
  }
  return true
}

// console.log(isRepeat([1,2,3,4]), false);
// console.log(isRepeat([1,2,3,4,1,2,3,4]), true);
// console.log(isRepeat([1,1]), true);
// console.log(isRepeat([1,2]), false);
// console.log(isRepeat([1,2,3]), false);
// console.log(isRepeat([1,2,1,2]), true);

var countOf = function (num, n) {
  var count = 0
  while(num % 2 === 0) {
    num /= 2
    count++
  }
  return count
}

var canBeDivided = function (n1, n2) {
  var cd = maxCommonDivisor(n1, n2)
  n2 /= cd
  while (n2 % 2 === 0) {
    n2 /= 2
  }
  while (n2 % 5 === 0) {
    n2 /= 5
  }
  return n2 === 1
}

// console.log(canBeDivided(1,1), true);
// console.log(canBeDivided(1,2), true);
// console.log(canBeDivided(1,3), false);
// console.log(canBeDivided(3,3), true);
// console.log(canBeDivided(6,12), true);
// console.log(canBeDivided(8,60), false);

var paddingLeft = function (s, char, count) {
  return new Array(count).fill(char).concat([s]).join('')
}

// console.log(paddingLeft('100', '0', 2), '00100');

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  
  let flag = numerator * denominator >= 0 ? '' : '-'
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  let integer = Math.floor(numerator / denominator)
  let remainder = numerator % denominator
  //能被整除
  if (remainder === 0) {
    return flag + integer.toString()
  }

  //有限小数，最简分数的分母中因数只有2和5
  if (canBeDivided(numerator, denominator)) {
    
    let decimal = []
    while(remainder !== 0) {
      remainder *= 10
      decimal.push(Math.floor(remainder / denominator))
      remainder %= denominator
    }
    return flag + integer + '.' + decimal.join('')
  } 

  //循环小数，最简分数的分母中因数存在2或5，则为混循环小数，否则为循环小数
  let unrepeatDecimal = ''
  let repeatDecimal = []
  let countOf2 = countOf(denominator, 2), countOf5 = countOf(denominator, 5)
  let count = Math.max(countOf2, countOf5)
  
  if (count > 0) {
    remainder *= Math.pow(10, count)
    let t = Math.floor(remainder / denominator).toString()
    unrepeatDecimal = paddingLeft(t, '0', count - t.length)
    remainder %= denominator
  }

  // console.log({count, unrepeatDecimal, remainder});
  
  var remainders = []
  do {
    remainders.push(remainder)
    remainder *= 10
    repeatDecimal.push(Math.floor(remainder / denominator))
    remainder %= denominator
  } while(remainders.indexOf(remainder) < 0)

  return flag + integer + '.' + unrepeatDecimal + '(' + repeatDecimal.join('') + ')'
};

console.log(fractionToDecimal(2, 1) === '2');
console.log(fractionToDecimal(-2, 1) === '-2');
console.log(fractionToDecimal(1, 2) === '0.5');
console.log(fractionToDecimal(-1, 2) === '-0.5');
console.log(fractionToDecimal(1, 3) === '0.(3)');
console.log(fractionToDecimal(1, 4) === '0.25');
console.log(fractionToDecimal(1, 5) === '0.2');
console.log(fractionToDecimal(1, 6) === '0.1(6)');
console.log(fractionToDecimal(2, 3) === '0.(6)');
console.log(fractionToDecimal(1, 7) === '0.(142857)');
console.log(fractionToDecimal(1, 333) === '0.(003)');
console.log(fractionToDecimal(1, 333333333) === '0.(000000003)');
console.log(fractionToDecimal(-1, 333) === '-0.(003)');
console.log(fractionToDecimal(-1, -333) === '0.(003)');
console.log(fractionToDecimal(1, -333) === '-0.(003)');
console.log(fractionToDecimal(1, 214748364) === "0.00(000000465661289042462740251655654056577585848337359161441621040707904997124914069194026549138227660723878669455195477065427143370461252966751355553982241280310754777158628319049732085502639731402098131932683780538602845887105337854867197032523144157689601770377165713821223802198558308923834223016478952081795603341592860749337303449725)");
