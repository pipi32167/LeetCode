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

console.log(isPerfectSquare(0));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(3));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(15));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(17));

