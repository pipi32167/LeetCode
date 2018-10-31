
/**
 * 使用辗转相除法求最大公约数
 * @param {number} n1 
 * @param {number} n2 
 */
var maxCommonDivisor = exports.maxCommonDivisor = function (n1, n2) {
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

// console.log(maxCommonDivisor(2,3), 1);
// console.log(maxCommonDivisor(6,8), 2);
// console.log(maxCommonDivisor(12,18), 6);
// console.log(maxCommonDivisor(0,1), 1);
// console.log(maxCommonDivisor(0,1), 1);

var primes = [2,3,5]
var isPrime = function (num) {
  var upper = Math.floor(Math.sqrt(num))
  for(var i = 0; i < primes.length && primes[i] <= upper; i++) {
    if (num % primes[i] === 0) {
      return false
    }
  }
  return true
}

// console.log(isPrime(2) === true);
// console.log(isPrime(3) === true);
// console.log(isPrime(5) === true);

var nextPrime = function (num) {
  if (num <= 2) {
    return 2
  } else if (num <= 3) {
    return 3
  } else {

    var n = Math.floor(num / 6)
    var res
    do {
      res = n * 6 - 1
      if (isPrime(res)) {
        continue
      }
      res = n * 6 + 1
      if (isPrime(res)) {
        continue
      }
      n++
    } while() 
  }
  // if (num > primes[primes.length - 1]) {
  //   var n = Math.floor(primes[primes.length - 1] / 6)
  //   var res
  //   do {
  //     res = n * 6 - 1
  //     if (isPrime(res)) {
  //       primes.push(res)
  //     }
  //     res = n * 6 + 1
  //     if (isPrime(res)) {
  //       primes.push(res)
  //     }
  //     n++
  //   } while(primes[primes.length - 1] < num) 
  // }

  // for(var i = 0; i < primes.length; i++) {
  //   if (num <= primes[i]) {
  //     return primes[i]
  //   }
  // }
}


console.log(nextPrime(1) === 2);
console.log(nextPrime(2) === 2);
console.log(nextPrime(5) === 5);
console.log(nextPrime(6) === 7);
console.log(nextPrime(15) === 17);
console.log(nextPrime(17) === 17);
console.log(nextPrime(19) === 19);
console.log(nextPrime(9989900) , 19);

/**
 * 求第n个质数
 * @param {number} n 
 * @returns {number}
 */
var nthPrime = exports.nthPrime = function (n) {
  if (primes[n-1]) {
    return primes[n-1]
  }

  while (primes.length < n) {
    nextPrime(primes[primes.length - 1])
  }

  return primes[n-1]
}

// console.log(nthPrime(1) === 2);
// console.log(nthPrime(2) === 3);
// console.log(nthPrime(3) === 5);
// console.log(nthPrime(4) === 7);
// console.log(nthPrime(10000));

var FIBOS = [1,1]
var getFibo = function (n) {
  if (n < FIBOS.length) {
    return FIBOS[n]
  }
  var res = getFibo(n-1) + getFibo(n-2)
  FIBOS[n] = res
  return res
}
