var filling = function (nums1, nums2) {
  var len = Math.max(nums1.length, nums2.length)
  if (len > nums1.length) {
    nums1 = new Array(len - nums1.length).fill('0').concat(nums1)
  }
  if (len > nums2.length) {
    nums2 = new Array(len - nums2.length).fill('0').concat(nums2)
  }
  return [nums1, nums2]
}

var add = function (nums1, nums2) {
  var nums = filling(nums1, nums2)
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

var sub = function (nums1, nums2) {
  var nums = filling(nums1, nums2)
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

var compare = function (nums1, nums2) {
  var nums = filling(nums1, nums2)
  for(var i = 0; i < nums[0].length; i++) {
    var res = nums[0][i].localeCompare(nums[1][i])
    if (res !== 0) {
      return res
    }
  }
  return 0
}

var isEqual = function (nums1, nums2) {
  return compare(nums1, nums2) === 0
}

// console.log(compare(['1','2','3'], ['1','2','3']) === 0);
// console.log(compare(['1','2','3'], ['1','2','2']) === 1);
// console.log(compare(['1','2','3'], ['1','2','4']) === -1);
// console.log(compare(['1','2','3'], ['2','2']) === 1);
// console.log(compare(['1','2'], ['2','2','3']) === -1);

var absSub = function (nums1, nums2) {
  if (compare(nums1, nums2) > 0) {
    return sub(nums1, nums2)
  } else {
    return sub(nums2, nums1)
  }
}

// console.log(isEqual(absSub(['1','2','3'], ['1','2','3']), ['0']));
// console.log(isEqual(absSub(['1','2','3'], ['1','2','2']), ['1']));
// console.log(isEqual(absSub(['1','2','3'], ['1','2','4']), ['1']));
// console.log(isEqual(absSub(['1','2','3'], ['2','2']), ['1', '0', '1']));
// console.log(isEqual(absSub(['1','2'], ['2','2','3']), ['2','1','1']));

var isPalindromic = function (nums) {
  var i = 0, j = nums.length - 1
  while(i < j) {
    if (nums[i++] !== nums[j--]) {
      return false
    }
  }
  return true
}

var genBigger = function (nums) {
  var res
  var mid = Math.floor(nums.length / 2)
  if (nums.length % 2 === 0) {
    let t = nums.slice(0, mid)
    let t1 = add(t, ['1'])
    res = t1.concat(t1.slice(0).reverse())
  } else {
    let t = nums.slice(0, mid+1)
    let t1 = add(t, ['1'])
    res = t1.concat(t1.slice(0).reverse().slice(1))
  }
  if (res.length !== nums.length) {
    res = nums.slice(0)
    do {
      res = add(res, ['1'])
    } while((!isPalindromic(res)))   
  }
  return res
}

// console.log(isEqual(genBigger(['1']), ['2']));
// console.log(isEqual(genBigger(['0']), ['1']));
// console.log(isEqual(genBigger(['9']), ['1', '1']));
// console.log(isEqual(genBigger(['1', '1']), ['2', '2']));
// console.log(isEqual(genBigger(['9', '9']), ['1', '0', '1']));
// console.log(isEqual(genBigger(['9', '9', '8']), ['9', '9', '9']));
// console.log(isEqual(genBigger(['9', '9', '9']), ['1', '0', '0', '1']));

var genSmaller = function (nums) {
  var res
  var mid = Math.floor(nums.length / 2)
  if (nums.length % 2 === 0) {
    let t = nums.slice(0, mid)
    let t1 = sub(t, ['1'])
    res = t1.concat(t1.slice(0).reverse())
  } else {
    let t = nums.slice(0, mid+1)
    let t1 = sub(t, ['1'])
    res = t1.concat(t1.slice(0).reverse().slice(1))
  }
  res = sub(res, ['0'])
  if (res.length !== nums.length) {
    res = nums.slice(0)
    do {
      res = sub(res, ['1'])
    } while(!isPalindromic(res))
  }
  // console.log(res);
  
  return res
}

// console.log(genSmaller(['2']).join('') === '1');
// console.log(genSmaller(['1']).join('') === '0');
// console.log(genSmaller(['1', '1']).join('') === '9');
// console.log(genSmaller(['2', '2']).join('') === '11');
// console.log(genSmaller(['1', '0', '1']).join('') === '99');
// console.log(genSmaller(['9', '9', '9']).join('') === '989');
// console.log(genSmaller(['1', '0', '0', '1']).join('') === '999');

var genLatest = function (nums) {
  var mid = Math.floor(nums.length / 2)
  let t = nums.slice(0, mid)
  let res
  // console.log(t);
  if (nums.length % 2 === 0) {
    res = t.concat(t.slice(0).reverse())
  } else {
    res = t.concat([nums[mid]]).concat(t.slice(0).reverse())
  }
  return res
}

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  var nums = n.toString().split('')  
  
  var results = [genBigger(nums), genSmaller(nums)]
  if (!isPalindromic(nums)) {
    results.push(genLatest(nums))
  }

  results.sort((a, b) => {
    var res = compare(absSub(a, nums), absSub(b, nums))
    if (res === 0) {
      return compare(a, b)
    }
    return res
  })

  return results[0].join('')
};

console.log(nearestPalindromic('123') === '121');
console.log(nearestPalindromic('12') === '11');
console.log(nearestPalindromic('1234') === '1221');
console.log(nearestPalindromic('1213') === '1221');
console.log(nearestPalindromic('12321') === '12221');
console.log(nearestPalindromic('1221') === '1111');
console.log(nearestPalindromic('1001') === '999');
console.log(nearestPalindromic('1') === '0');
console.log(nearestPalindromic('2') === '1');
console.log(nearestPalindromic('10') === '9');
console.log(nearestPalindromic('100') === '99');
console.log(nearestPalindromic('21') === '22');
console.log(nearestPalindromic('11') === '9');
console.log(nearestPalindromic('101') === '99');
console.log(nearestPalindromic('99') === '101');
console.log(nearestPalindromic('8') === '7');
console.log(nearestPalindromic('9') === '8');
console.log(nearestPalindromic('1283') === '1331');