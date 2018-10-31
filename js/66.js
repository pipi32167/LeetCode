/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var carry = 1;
  for(var i = digits.length - 1; i >= 0; i--) {
    var sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    digits.unshift(carry)
  }
  return digits;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([9,9,9]));

