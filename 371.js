/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (b === 0) {
      return a;
    }

    var s = a ^ b;
    var c = (a & b) << 1;
    return getSum(s, c);
};

console.log(getSum(1,2));
console.log(getSum(2,3));
