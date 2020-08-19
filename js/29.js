const { equal } = require("assert");

const MIN = -2147483648
const MAX = 2147483647

function solve (dividend, divisor) {
  // console.log({ dividend, divisor });
  if (dividend < divisor) {
    return 0.5
  } else if (dividend === divisor) {
    return 1
  } else if (dividend < divisor + divisor) {
    return 1
  }

  let num = divisor, i = 1
  while (dividend > num && num > 0 && num < 1073741824) {
    // console.log({num, i});
    num <<= 1
    i <<= 1
  }
  // console.log({ num, num2: num >> 1 });
  return (i >> 1) + solve(dividend - (num >> 1), divisor)
}

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let flag = false
  if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
    flag = true
  }

  if (dividend === MIN) {
    if (divisor === -1) 
      return MAX
    if (divisor === 1) 
      return MIN
  }

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  const ret = solve(dividend, divisor)
  if (flag) {
    return Math.ceil(-ret)
  } 
  return Math.floor(ret)
};

equal(divide(10, 3), 3);
equal(divide(7, -3), -2);
equal(divide(5, 2), 2);
equal(divide(-2147483648, -1), 2147483647);
equal(divide(-2147483648, 1), -2147483648);
equal(divide(2147483647, -1), -2147483647);
equal(divide(2147483647, 1), 2147483647);
equal(divide(2147483647, 2), 1073741823);
equal(divide(-2147483648, 2), -1073741824);
equal(divide(1100540749, -1090366779), -1);

