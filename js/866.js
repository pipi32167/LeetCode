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
  if (num <= primes[primes.length - 1]) {
    for(var i = 0; i < primes.length; i++) {
      if (num <= primes[i]) {
        return primes[i]
      }
    }
  }
  var res = primes[primes.length - 1]
  do {
    res += 2
    if (isPrime(res)) {
      primes.push(res)
    }
  } while(primes[primes.length - 1] < num)
  return primes[primes.length - 1]
}

// console.log(nextPrime(1) === 2);
// console.log(nextPrime(2) === 2);
// console.log(nextPrime(5) === 5);
// console.log(nextPrime(6) === 7);
// console.log(nextPrime(15) === 17);
// console.log(nextPrime(17) === 17);
// console.log(nextPrime(19) === 19);

var isPalindrome = function (num) {
  num = num.toString().split('')
  var i = 0, j = num.length - 1
  while(i < j) {
    if (num[i] !== num[j]) {
      return false
    }
    i++, j--
  }
  return true
}

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
  
  var res = N
  do {
    res = nextPrime(res)
    if (isPalindrome(res)) {
      break
    }
    res += 2
  } while(true)
  return res
};

// console.log(primePalindrome(2) === 2);
// console.log(primePalindrome(6) === 7);
// console.log(primePalindrome(8) === 11);
// console.log(primePalindrome(13) === 101);
console.log(primePalindrome(9989900) === 101);

