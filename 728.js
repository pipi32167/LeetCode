

var isSelfDividingNumber = function (num) {
  var originNum = num;
  
  do {
    var factor = num % 10;
    if (factor === 0 || (originNum % factor !== 0)) {
      return false;
    }
    num = Math.floor(num / 10);
  } while(num > 0)

  return true;
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
  var results = [];
  for(var i = left; i <= right; i++) {
    if (isSelfDividingNumber(i)) {
      results.push(i)
    }
  }

  return results;
};

console.log(selfDividingNumbers(1, 10000));
