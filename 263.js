var factors = [2,3,5];

var divide = function (num) {

  do {

    var isDivided = false;

    for(var i = 0; i < factors.length; i ++) {
      if (num % factors[i] === 0) {
        num /= factors[i];
        isDivided = true
        break;
      }
    }

    if (!isDivided) {
      break;
    }

  } while(true)

  return num;
}

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {

  if (num === 0) {
    return false;
  }
    
  if (num === 1 || factors.indexOf(num) >= 0) {
    return true;
  }

  return divide(num) === 1;
};

console.log(isUgly(0));
console.log(isUgly(1));
console.log(isUgly(2));
console.log(isUgly(3));
console.log(isUgly(5));
console.log(isUgly(4));
console.log(isUgly(9));
console.log(isUgly(30));
console.log(isUgly(50));
console.log(isUgly(51));
