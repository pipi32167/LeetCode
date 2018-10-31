var uglyNumbers = [1];
var tmp = [];

var genUglyNumbers = function (n) {
  uglyNumbers = [1];
  
  while(uglyNumbers.length < n) {
    var elem = uglyNumbers[uglyNumbers.length - 1];
    var newUglyNumbers = [elem * 2, elem * 3, elem * 5];
    for(var i = 0; i < newUglyNumbers.length; i++) {
      var newNum = newUglyNumbers[i];
      if (uglyNumbers.indexOf(newNum) < 0 && tmp.indexOf(newNum) < 0) {
        tmp.push(newNum);
      }
    }
    var realNewUglyNumber = Math.min.apply(null, tmp);
    // console.log('realNewUglyNumber', tmp, realNewUglyNumber);
    tmp.splice(tmp.indexOf(realNewUglyNumber), 1);
    uglyNumbers.push(realNewUglyNumber);
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  genUglyNumbers(n);
  // console.log(uglyNumbers);
  return uglyNumbers[n - 1];
};

console.log(nthUglyNumber(1));
console.log(nthUglyNumber(2));
console.log(nthUglyNumber(3));
console.log(nthUglyNumber(4));
console.log(nthUglyNumber(5));
console.log(nthUglyNumber(10));
console.log(nthUglyNumber(12));
console.log(nthUglyNumber(100));
console.log(nthUglyNumber(200));
console.log(nthUglyNumber(500));
console.log(nthUglyNumber(1000));
console.log(nthUglyNumber(1000));
console.log(nthUglyNumber(1001));
console.log(nthUglyNumber(1690));