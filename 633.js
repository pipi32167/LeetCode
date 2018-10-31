var go = function (num, l, u) {
  
  if(l > u) {
    return false
  }
  
  var m = Math.floor((l + u) / 2)
  var mValue = m * m
  if (mValue === num) {
    return true
  }
  if (l === m && l + 1 === u) {
    return u * u === num
  }

  if (mValue > num) {
    return go(num, l, m - 1)
  } else {
    return go(num, m + 1, u)
  }
}

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
  return go(num, 0, num)
};

var go2 = function (num, l, u) {
  
  var m = Math.floor((l + u) / 2)
  var mValue = m * m
  if (mValue === num) {
    return m
  }
  if (l === m && l + 1 === u) {

    var uValue = u * u
    var lValue = l * l
    if (uValue <= num) {
      // console.log('go2 1', {u, l});
      return u
    } else if (lValue <= num) {
      // console.log('go2 2', l);
      return l
    } else {
      // console.log('go2 3', l - 1);
      return l - 1
    }
  } else {
    if (mValue > num) {
      return go2(num, l, m)
    } else {
      return go2(num, m, u)
    }
  }

}

var getClosestSquare = function (num) {
  return go2(num, 0, num)
}

// console.log(getClosestSquare(1));
// console.log(getClosestSquare(2));
// console.log(getClosestSquare(3));
// console.log(getClosestSquare(4));
// console.log(getClosestSquare(5));
// console.log(getClosestSquare(8));
// console.log(getClosestSquare(9));
// console.log(getClosestSquare(2147483642));


/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  
  var iEnd = getClosestSquare(c)
  for(var i = 0; i <= iEnd; i++) {
    var iSquare = i * i
    if (isPerfectSquare(c - iSquare)) {
      return true
    }
    
  }
  return false
};

console.log(judgeSquareSum(0));
console.log(judgeSquareSum(1));
console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
console.log(judgeSquareSum(2147483642));
