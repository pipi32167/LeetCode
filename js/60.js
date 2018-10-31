var range = function (begin, end) {
  var result = []
  for(var i = begin; i < end; i++) {
    result.push(i)
  }
  return result;
}

var doGen = function (nums, n, prefix, result) {
  if (result.found) {
    return;
  }
  if (prefix.length === n) {
    // console.log(prefix);
    
    result.count ++;
    result.found = result.count === result.k;
    if (result.found) {
      result.value = prefix.join('');
    }
    return
  }

  for(var i = 0; i < nums.length; i++) {
    var newNums = nums.slice(0);
    newNums.splice(i, 1);
    doGen(newNums, n, prefix.concat(nums[i]), result);
    if (result.found) {
      return;
    }
  }
}


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {

  var result = 1;
  for(var i = 1; i <= n; i ++) {
    result *= i;
    if (result > k) {
      break;
    }
  }
  if (i <= n) {
    result /= i;
  }
  i --;
  var k1 = Math.floor((k - 1) / result) + 1;
  var k2 = (k - 1) % result + 1;
  // console.log({ i, result, k1, k2 });
  
  var result1 = {
    count: 0,
    k: k1,
    found: false,
    value: '',
  };
  var range1 = range(1, n + 1)
  doGen(range(1, n + 1), n - i, [], result1);
  var prefix = result1.value.split('').map(Number)
  
  var result2 = {
    count: 0,
    k: k2,
    found: false,
    value: '',
  };
  var range2 = range1.filter(function (elem) {
    return prefix.indexOf(elem) < 0;
  })
  doGen(range2, i, [], result2);
  // console.log(prefix, range2, result1.value, result2.value);
  
  return result1.value + result2.value;
};

console.log(getPermutation(2, 1));
console.log(getPermutation(2, 2));
console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(9, 116907));
console.log(getPermutation(9, 362880));
