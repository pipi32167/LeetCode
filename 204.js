var primes = [2,3,5]
var primesDict = { 2:true, 3: true, 5: true }
// var count = 0
var isPrime = function (num) {
  if (primesDict[num]) {
    return true
  }
  var u = Math.floor(Math.sqrt(num))
  const len = primes.length
  for (let i = 0; i < len; i++) {
    // count++
    const prime = primes[i]
    if (prime > u) {
      break
    }
    if (num % prime === 0) {
      return false
    }
  }
  primes.push(num)
  primesDict[num] = true
  // primes.sort((a, b) => a-b)
  return true
}

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  
  let count = 0
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
};

console.log(countPrimes(10) === 4);
console.log(countPrimes(10) === 4);
console.log(countPrimes(150000) === 13848);
console.log(countPrimes(1000000) === 13848);

// console.log(count);
