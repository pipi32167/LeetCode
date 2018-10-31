var calcHours = function (piles, num) {
  
  return piles.reduce(function (sum, elem) {
    return sum + Math.ceil(elem / num)
  }, 0)
}

var go = function (piles, H, l, u) {
  if (l > u) {
    return -1
  }
  var m = Math.floor((l + u) / 2)
  var hours = calcHours(piles, m)
  var hours2 = calcHours(piles, m - 1)
  // console.log({ l, u, m, hours, hours2 });  
  if (hours <= H && hours2 > H) {
    return m
  } else if (hours > H) {
    return go(piles, H, m + 1, u)
  } else {
    return go(piles, H, l, m)
  }
}

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  
  return go(piles, H, 1, Math.pow(10, 9))
};

// console.log(minEatingSpeed([3,6,7,11], 8), 4);
// console.log(minEatingSpeed([30,11,23,4,20], 5), 30);
// console.log(minEatingSpeed([30,11,23,4,20], 6), 23);
var { piles, H } = require('./875_input')
console.log(minEatingSpeed(piles, H), 4);