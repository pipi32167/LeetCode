/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  
  var bulbs = new Array(n+1).fill(false)
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j+=i) {
      bulbs[j] = !bulbs[j]
    }
    // console.log(bulbs);
  }
  
  return bulbs.reduce((res, e) => e ? res + 1 : res, 0)
};


/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  
  var count = 1, step = 3
  for (let i = 1; i <= n; i += step, count++, step += 2) {}
  return count-1
};


console.log(bulbSwitch(1) === 1);
console.log(bulbSwitch(2) === 1);
console.log(bulbSwitch(3) === 1);
console.log(bulbSwitch(4) === 2);
console.log(bulbSwitch(5) === 2);
console.log(bulbSwitch(6) === 2);
console.log(bulbSwitch(7) === 2);
console.log(bulbSwitch(8) === 2);
console.log(bulbSwitch(9) === 3);
console.log(bulbSwitch(10) === 3);
console.log(bulbSwitch(11) === 3);
console.log(bulbSwitch(12) === 3);
console.log(bulbSwitch(13) === 3);
console.log(bulbSwitch(14) === 3);
console.log(bulbSwitch(15) === 3);
console.log(bulbSwitch(16) === 4);
console.log(bulbSwitch(17) === 4);
console.log(bulbSwitch(18) === 4);
console.log(bulbSwitch(19) === 4);
console.log(bulbSwitch(20) === 4);
console.log(bulbSwitch(21) === 4);
console.log(bulbSwitch(22) === 4);
console.log(bulbSwitch(23) === 4);
console.log(bulbSwitch(24) === 4);
console.log(bulbSwitch(25) === 5);
console.log(bulbSwitch(26) === 5);
console.log(bulbSwitch(27) === 5);
console.log(bulbSwitch(28) === 5);
console.log(bulbSwitch(29) === 5);
// console.log(bulbSwitch(100000) === 316);
// console.log(bulbSwitch(99999999) , 9999);
