
var romanWords = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}

var romanKeys = Object.keys(romanWords);
var romanValues = romanKeys.map(function (key) {
  return romanWords[key];
})

// console.log(romanKeys);
// console.log(romanValues);



/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  
  var result = '';
  while(num > 0) {
    for(var i = romanValues.length - 1; i >= 0; i--) {
      var value = romanValues[i];
      var key = romanKeys[i];
      if (num >= value) {
        // console.log(key, value);
        num -= value;
        result += key;
        break;
      }
    }
  }
  return result;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));

