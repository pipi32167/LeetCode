// // var multiply = function (num1, num2) {
// //   return num1 * num2
// // }

var MIN = -2147483648
var MAX = 2147483647

// var multiply = function (num1, num2) {
  
//   var result = 0
//   var i = 0
//   while(num2 > 0) {
//     // console.log({ num1, num2, i });
//     if (num2 & 0x1 === 1) {
//       var add = num1 << i
//       console.log({ result, add, res1: result >= 0 ? MAX - result : MIN - result });
      
//       if (result >= 0 && MAX - result < add) {
//         result = MAX
//       } else if (result < 0 && MIN - result > add) {
//         result = MIN
//       } else {
//         result += add
//       }
//     }
//     num2 = num2 >> 1
//     i++
//   }
//   return result
// }

// // console.log(multiply(1,2),2);
// // console.log(multiply(1000,2),2000);
// // console.log(multiply(1000,123),123000);
// // console.log(multiply(12345, 54321),12345 * 54321);
// console.log(multiply(12345000, 54321000),MAX);
// // console.log(multiply(2, 1073741824), MAX);
// // console.log(multiply(1, MAX), MAX);
// // console.log(multiply(2, MAX), MAX);
// // console.log(multiply(2, MIN), MIN);
// // console.log(multiply(MAX, 2), MAX);
// // console.log(multiply(MIN, 2), MIN);



// var go = function (dividend, divisor, l, u) {
//   // console.log({ l, u });
//   if (l === u) {
//     return l
//   }
//   if (l > u) {
//     return -1
//   }

//   var m = Math.floor((l + u) / 2)
//   var res1 = multiply(divisor, m)
//   var res2 = multiply(divisor, m + 1)
//   var prod = res1.prod
//   var prod2 = res2.prod
//   console.log({ l, u, m, prod, prod2 });
//   if (prod === dividend) {
//     return m
//   } else if(prod2 === dividend) {
//     if (res2.isOverflow) {
//       return m
//     }
//     return m + 1
//   } else if (prod > dividend) {
//     return go(dividend, divisor, l, m-1)
//   } else {
//     if (prod2 > dividend) {
//       return m
//     }
//     return go(dividend, divisor, m+1, u)
//   }
// }

// // console.log(go(7, 3, 0, 7), 2);
// // console.log(go(9, 3, 0, 9), 3);
// // console.log(go(10, 3, 0, 10), 3);
// // console.log(go(11, 3, 0, 11), 3);
// // console.log(go(12, 3, 0, 12), 4);
// // console.log(go(13, 3, 0, 13), 4);
// // console.log(go(14, 3, 0, 14), 4);
// // console.log(go(15, 3, 0, 15), 5);
// // console.log(go(5, 2, 0, 5), 2);
// // console.log(go(2, 5, 0, 2), 0);
// // console.log(go(MAX, 1, 0, MAX), MAX);

// /**
//  * @param {number} dividend
//  * @param {number} divisor
//  * @return {number}
//  */
// var divide = function(dividend, divisor) {

//   //overflow
//   if (dividend === MIN && divisor === -1) {
//     return MAX
//   }

//   var flag1 = dividend >= 0 ? 1 : -1
//   var flag2 = divisor >= 0 ? 1 : -1
//   var flag = flag1 === flag2 ? 1 : -1

//   dividend = dividend >= 0 ? dividend : -dividend
//   divisor = divisor >= 0 ? divisor : -divisor

//   var quotient = go(dividend, divisor, 0, dividend)
//   return flag >= 0 ? quotient : -quotient
// };

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

  var flag1 = dividend >= 0 ? 1 : -1
  var flag2 = divisor >= 0 ? 1 : -1
  var flag = flag1 === flag2 ? 1 : -1

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  var res = 0
  while(dividend >= divisor) {
    
    var tmp = divisor, i = 1
    while(dividend >= tmp) {
      console.log({ res, i });
      dividend -= tmp
      res += i
      i <<= 1
      tmp <<= 1
    }
  }
  res = res * flag
  return Math.min(Math.max(MIN, res), MAX)
};


// console.log(divide(10, 3), 3);
// console.log(divide(7, -3), -2);
// console.log(divide(5, 2), 2);
console.log(divide(-2147483648, -1), 2147483647);
// console.log(divide(-2147483648, 1), -2147483648);
// console.log(divide(2147483647, -1), -2147483647);
// console.log(divide(2147483647, 1), 2147483647);
// console.log(divide(2147483647, 2), 1073741823);
// console.log(divide(-2147483648, 2), -1073741824);