const { equal, ok } = require("assert");

// Greatest Common Divisor 最大公约数
function gcd (a, b) {
  // console.log('gcd', {a, b});
  // ok(a && b)
  if (a > b) [a, b] = [b, a]
  if (b % a === 0) return a
  return gcd(a, b % a)
}

// Least Common Multiple 最小公倍数
function lcm (a, b) {
  // ok(a && b)
  if (a > b) [a, b] = [b, a]
  if (b % a === 0) return b
  const tmp = gcd(a, b)
  return tmp * (a / tmp) * (b / tmp)
}

function isMatch (n, a, b, c) {
  return n % a === 0 || n % b === 0 || n % c === 0
}

function sortFn (a, b) {
  return a - b
}

function calcIdx (end, a, b, c) {
  // console.log('calcIdx', { end, a, b, c });
  if(end === 0) return 0
  const lab = lcm(a, b)
  return Math.floor(end / a)
    + Math.floor(end / b)
    + Math.floor(end / c)
    - Math.floor(end / lab)
    - Math.floor(end / lcm(a, c))
    - Math.floor(end / lcm(b, c))
    + Math.floor(end / lcm(lab, c))
}

// /**
//  * @param {number} n
//  * @param {number} a
//  * @param {number} b
//  * @param {number} c
//  * @return {number}
//  */
// var nthUglyNumber = function(n, a, b, c) {
//   // console.log('nthUglyNumber', {n, a, b, c});
//   [a, b, c] = [a, b, c].sort(sortFn)
  
//   const labc = lcm(lcm(a, b), c)
//   let end = n * a
//   if (end > labc) {
//     const cnt = calcIdx(labc, a, b, c)
//     end = Math.ceil(n / cnt) * labc
//   } 
//   const endIdx = calcIdx(end, a, b, c)
//   const g = gcd(a, gcd(b, c))
//   let i = endIdx, num = end
//   console.log({ end, endIdx, g, i });
//   while (i > n) {
//     num -= g
//     if (isMatch(num, a, b, c)) i--
//   }
//   return num
// };


/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
  // console.log('nthUglyNumber', {n, a, b, c});
  [a, b, c] = [a, b, c].sort(sortFn)
  
  let l = a, u = a * n
  while(l <= u) {
    const m = Math.floor((l + u) / 2)
    // const m = (l + u) >> 1
    if (m === l) break
    const mIdx = calcIdx(m, a, b, c)
    if(mIdx > n) {
      u = m - 1
    } else if(mIdx < n) {
      l = m + 1
    } else {
      break
    }
  }

  const g = gcd(a, gcd(b, c))
  let ret = Math.floor(l / g) * g, idx = calcIdx(l, a, b, c)
  // console.log({ l, u, idx, g });
  while (idx < n) {
    // console.log({ l, u, idx, g, ret });
    ret += g
    if(isMatch(ret, a, b, c)) idx ++
  }

  return ret
};

var n = 3, a = 2, b = 3, c = 5, ret = 4
equal(nthUglyNumber(n, a, b, c), ret)
var n = 4, a = 2, b = 3, c = 4, ret = 6
equal(nthUglyNumber(n, a, b, c), ret)
var n = 5, a = 2, b = 11, c = 13, ret = 10
equal(nthUglyNumber(n, a, b, c), ret)
var n = 7, a = 7, b = 7, c = 7, ret = 49
equal(nthUglyNumber(n, a, b, c), ret)
var n = 1000000000, a = 2, b = 217983653, c = 336916467, ret = 1999999984
equal(nthUglyNumber(n, a, b, c), ret)
var n = 1000000000, a = 2, b = 3, c = 5, ret = 1363636364
equal(nthUglyNumber(n, a, b, c), ret)
var n = 1000000000, a = 2, b = 3, c = 217983653, ret = 1499999997
equal(nthUglyNumber(n, a, b, c), ret)
for (let i = 0; i < 100000; i++) {
  equal(nthUglyNumber(n, a, b, c), ret)
}