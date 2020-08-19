/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  
  const nums = []
  while(num > 0) {
    nums.unshift(num % 10)
    num = Math.floor(num / 10)
  }
  let hit = false
  return nums.reduce((r, e) => {
    if(!hit && e !== 9) {
      e = 9
      hit = true
    }
    return r * 10 + e
  }, 0);
};


console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));
