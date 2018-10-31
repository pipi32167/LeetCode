/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) {
    return true
  }
    
  var count = 0
  flowerbed.unshift(0)
  flowerbed.push(0)
  for(var i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
      flowerbed[i] = 1
      count++
      if (count >= n) {
        return true
      }
    }
  }
  return false
};

console.log(canPlaceFlowers([1,0,0,0,1], 1), true);
console.log(canPlaceFlowers([1,0,0,0,1], 2), false);
console.log(canPlaceFlowers([1,0,1,0,1], 0), true);
