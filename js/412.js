/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = []
  for (let i = 1; i <= n; i++) {
    
    const num = i
    const res1 = num % 3
    const res2 = num % 5
    if (res1 === 0 && res2 === 0) {
      result.push('FizzBuzz')
    } else if (res1 === 0) {
      result.push('Fizz')
    } else if (res2 === 0) {
      result.push('Buzz')
    } else {
      result.push(num.toString())
    }
  }
};