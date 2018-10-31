function BigNum (s) {
  if (typeof s === 'string') {
    this.nums = s.split('').reverse().map(Number)
  } else if (typeof s === 'number') { 
    this.nums = s.toString().split('').reverse().map(Number)
  } else if (s instanceof BigNum) {
    this.nums = s.nums.slice(0)
  }
}

BigNum.prototype.add = function (num) {
  num = new BigNum(num)

  var carry = 0, len = Math.max(this.nums.length, num.nums.length)
  var result = new Array(len).fill(0)
  for(var i = 0; i < len; i++) {
    var num1 = this.nums[i] || 0
    var num2 = num.nums[i] || 0
    var sum = num1 + num2 + carry
    result[i] = sum % 10
    carry = Math.floor(sum / 10)
  }
  if (carry > 0) {
    result.push(carry)
  }
  return new BigNum(result)
}


BigNum.prototype.multiply = function (num) {
  num = new BigNum(num)

  var carry = 0
  for(var i = 0; i < num.nums.length; i++) {
    var sum = 
  }
  return new BigNum(result)
}

BigNum.prototype.toString = function () {
  return this.nums.reverse().join('')
}

console.log(new BigNum('99').add('1').toString());
console.log(new BigNum(99).add('1').toString());
console.log(new BigNum('999999999999999999999999').add('1').toString());


var primes = [2,3]
var getPrime = function (n) {
  if (primes[n] !== undefined) {
    return primes[n]
  }

  var num = getPrime(n - 1) + 2
  while(true) {
    for(var i = 0; i < primes.length; i++) {
      if (num % primes[i] === 0) {
        break
      }
    }

    if (i !== primes.length) {
      num += 2
    } else {
      break
    }
  }

  primes[n] = num
  return primes[n]
}

// console.log(getPrime(0));
// console.log(getPrime(1));
// console.log(getPrime(2));
// console.log(getPrime(3));
// console.log(getPrime(4));
// console.log(getPrime(5));
// console.log(getPrime(1000));

var splitToPrimes = function (num) {
  
  var result = []
  while(num !== 1) {
    // console.log({ num });
    var i = 0 
    while(num % getPrime(i) !== 0) {
      i++
    }
    var prime = getPrime(i)
    num /= prime
    result.push(prime)
  }
  return result
}

// console.log(splitToPrimes(10));
// console.log(splitToPrimes(999));
// console.log(splitToPrimes(999999999999999999));

var genIdxGroups = function (len, prefix, result) {
  // console.log('genIdxGroups', prefix);
  if (prefix.length > 0) {
    result.push(prefix)
  }

  var begin
  if (prefix.length === 0) {
    begin = 0
  } else {
    begin = prefix[prefix.length - 1] + 1
  }
  for(var i = begin; i < len; i++) {
    
    genIdxGroups(len, prefix.concat(i), result)
  }
}

var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return nums
  }

  var t = nums[l], i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && nums[i] < t)
    do { j-- } while(nums[j] > t)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1)
  quickSort3(nums, j + 1, u)
  return nums
}


var genNums = function (nums) {
  
  var result = []
  var idxGroups = []
  genIdxGroups(nums.length, [], idxGroups)
  // console.log({idxGroups});
  
  for(var i = 0; i < idxGroups.length; i++) {
    var res = idxGroups[i].reduce(function (memo, elem) {
      return memo * nums[elem]
    }, 1)
    if (result.indexOf(res) < 0) {
      result.push(res)
    }
  }
  quickSort3(result, 0, result.length - 1)
  return result
}

// console.log(genNums([2,3,3]), [2,3,6,9,18]);

var isGoodBase = function (n, base) {
  
  while(n % base === 1) {
    n = Math.floor(n / base)
  }
  return n === 0
}

// console.log(isGoodBase(13, 3));
// console.log(isGoodBase(13, 4));
// console.log(isGoodBase(13, 12));


var findSmallestGoodBase = function (n, nums) {
  
  for(var i = 0; i < nums.length; i++) {
    if (isGoodBase(n, nums[i])) {
      return nums[i]
    }
  }
  return -1
}

/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function(n) {
  
  var now = Date.now()
  //因数分解
  var primes = splitToPrimes(n - 1)
  console.log('cost 1:', Date.now() - now, primes);now = Date.now()

  //根据因数生成排好序的可能进制
  var nums = genNums(primes)
  console.log('cost 2:', Date.now() - now, { nums });now = Date.now()

  //找到最小的进制
  var num = findSmallestGoodBase(n, nums)
  console.log('cost 3:', Date.now() - now, { num });now = Date.now()

  return num.toString()
};

// console.log(smallestGoodBase(13), 3);
// console.log(smallestGoodBase(4681), 8);
// console.log(smallestGoodBase(1000000000000000000), 999999999999999999);
