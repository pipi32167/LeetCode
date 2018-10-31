var counting = function (num, u) {
  return Math.floor(u / num)
}

var findLeastCommonMultiple = function (a, b) {
  var m = a, n = b
  var c
  while(b !== 0) {
    c = a % b
    a = b
    b = c
  }
  return m * n / a
}

// console.log(findLeastCommonMultiple(10, 8));


var counting2 = function (num, num1, num2) {

  var count1 = counting(num1, num)
  var count2 = counting(num2, num)
  var count3 = counting(findLeastCommonMultiple(num1, num2), num)
  // console.log({ count1, count2, count3 });
  return count1 + count2 - count3
}

// console.log(counting2(9, 2, 4));
// console.log(counting2(100, 1, 1));
// console.log(counting2(100, 2, 3));
// console.log(counting2(100, 3, 2));
// console.log(counting2(100, 51, 50));
// console.log(counting2(100, 50, 51));
// console.log(counting2(48, 10, 8));

var find = function (N, A, B, l, u) {
  
  var m = Math.floor((l + u) / 2)
  var count = counting2(m, A, B)
  // console.log('counting2', { m, A, B, count });
  
  if (count === N) {
    return m
  } else if (count > N) {
    return find(N, A, B, l, m + 1)
  } else {
    return find(N, A, B, m - 1, u)
  }
}

var nthMagicalNumber = function(N, A, B) {
  
  u = find(N, A, B, 1, Math.pow(10, 14))
  // console.log({ u, Ai: Math.floor(u / A), Bi: Math.floor(u / B) });
  return Math.max(Math.floor(u / A) * A, Math.floor(u / B) * B) % (Math.pow(10, 9) + 7)
};
var N = 1, A = 2, B = 3
console.log(nthMagicalNumber(N, A, B), 2);
var N = 4, A = 2, B = 3
console.log(nthMagicalNumber(N, A, B), 6);
var N = 5, A = 2, B = 4
console.log(nthMagicalNumber(N, A, B), 10);
var N = 3, A = 6, B = 4
console.log(nthMagicalNumber(N, A, B), 8);
var N = 3, A = 8, B = 3
console.log(nthMagicalNumber(N, A, B), 8);
var N = 8, A = 10, B = 5
console.log(nthMagicalNumber(N, A, B), 40);
var N = 1000000000, A = 40000, B = 40000
console.log(nthMagicalNumber(N, A, B), 8);
var N = 1000000000, A = 4, B = 5
console.log(nthMagicalNumber(N, A, B), 8);
var N = 10, A = 10, B = 8
console.log(nthMagicalNumber(N, A, B), 50);