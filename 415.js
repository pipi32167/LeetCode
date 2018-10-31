var filling = function (num1, num2) {
  var len = Math.max(num1.length, num2.length)
  if (len > num1.length) {
    num1 = new Array(len - num1.length).fill('0').concat(num1)
  }
  if (len > num2.length) {
    num2 = new Array(len - num2.length).fill('0').concat(num2)
  }
  return [num1, num2]
}

var add = function (num1, num2) {
  var nums = filling(num1, num2)
  // console.log(nums);
  var carry = 0
  var result = []
  for(var i = nums[0].length - 1; i >= 0; i--) {

    var num1 = Number(nums[0][i])
    var num2 = Number(nums[1][i])
    var res = num1 + num2 + carry
    carry = Math.floor(res / 10)
    result.unshift((res % 10).toString())
  }

  if (carry > 0) {
    result.unshift(carry.toString())
  }
  return result
}


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    return add(num1.split(''), num2.split('')).join('')
};

console.log(addStrings('1', '2') === '3');
console.log(addStrings('10', '2') === '12');
console.log(addStrings('9', '2') === '11');
console.log(addStrings('99999', '100001') === '200000');
