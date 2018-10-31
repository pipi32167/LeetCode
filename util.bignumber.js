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

var abs = function (nums) {
  return nums[0] === '-' ? nums.slice(1) : nums.slice(0)
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

// console.log(add(['9','9'], ['1']).join('') === '100');
// console.log(add(['1','9'], ['1']).join('') === '20');
// console.log(add(['9','9'], ['1', '0', '1']).join('') === '200');

var sub = function (num1, num2) {
  var nums = filling(num1, num2)
  // console.log(nums);
  var carry = 0
  var result = []
  for(var i = nums[0].length - 1; i >= 0; i--) {

    var num1 = Number(nums[0][i])
    var num2 = Number(nums[1][i])
    var res = num1 - num2 + carry
    carry = res < 0 ? -1 : 0
    res = res >= 0 ? res : res + 10
    result.unshift(res.toString())
  }

  while(result[0] === '0' && result.length > 1) {
    result.shift()
  }

  return result
}

// console.log(sub(['1'], ['1']).join('') === '0');
// console.log(sub(['9','9'], ['1']).join('') === '98');
// console.log(sub(['1','9'], ['1', '0']).join('') === '9');
// console.log(sub(['1', '0', '1'], ['1', '0', '0']).join('') === '1');
// console.log(sub(['1', '0'], ['1']).join('') === '9');

var mul = function (num1, num2) {
  // body
}

var div = function (num1, num2) {
  // body
}

var mod = function (num1, num2) {
  // body
}

var compare = function (num1, num2) {
  var nums = filling(num1, num2)
  for(var i = 0; i < nums[0].length; i++) {
    var res = nums[0][i].localeCompare(nums[1][i])
    if (res !== 0) {
      return res
    }
  }
  return 0
}

var isEqual = function (num1, num2) {
  return compare(num1, num2) === 0
}

// console.log(compare(['1','2','3'], ['1','2','3']) === 0);
// console.log(compare(['1','2','3'], ['1','2','2']) === 1);
// console.log(compare(['1','2','3'], ['1','2','4']) === -1);
// console.log(compare(['1','2','3'], ['2','2']) === 1);
// console.log(compare(['1','2'], ['2','2','3']) === -1);

var absSub = function (num1, num2) {
  if (compare(num1, num2) > 0) {
    return sub(num1, num2)
  } else {
    return sub(num2, num1)
  }
}

// console.log(isEqual(absSub(['1','2','3'], ['1','2','3']), ['0']));
// console.log(isEqual(absSub(['1','2','3'], ['1','2','2']), ['1']));
// console.log(isEqual(absSub(['1','2','3'], ['1','2','4']), ['1']));
// console.log(isEqual(absSub(['1','2','3'], ['2','2']), ['1', '0', '1']));
// console.log(isEqual(absSub(['1','2'], ['2','2','3']), ['2','1','1']));
