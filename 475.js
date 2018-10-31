
var isCover = function (houses, heaters, radius) {
  
  for(var i = 0; i < houses.length; i ++) {
    var house = houses[i]
    var hit = false
    for(var j = 0; j < heaters.length; j ++) {
      var heater = heaters[j]
      if (Math.abs(heater - house) <= radius) {
        hit = true
        break
      }
    }
    if (!hit) {
      return false
    }
  }
  return true
}

var go = function (houses, heaters, l, u) {
  // console.log({ l, u });
  
  if (l >= u) {
    return l
  }
  
  var m = Math.floor((l + u) / 2)
  if (isCover(houses, heaters, m)) {
    return go(houses, heaters, l, m)
  } else {
    return go(houses, heaters, m + 1, u)
  }
}

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  
  var radius = go(houses, heaters, 0, Math.pow(10, 9))
  return radius
};

console.log(findRadius([1,2,3],[2]), 1);
console.log(findRadius([1,2,3,4],[1,4]), 1);
console.log(findRadius([1,5],[2]), 3);
console.log(findRadius([1],[1,2,3,4]), 0);

var houses = [617819336,399125485,156091745,356425228]
var heaters = [585640194,937186357]
console.log(findRadius(houses, heaters));

var houses = [282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923]
var heaters = [823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612]
// console.log(isCover(houses, heaters, 161834419));
console.log(findRadius(houses, heaters), 161834419);

// var _ = require('./util.underscore')
// var houses = _.range(1, 25000)
// var heaters = _.range(1, 25000)
// console.log(findRadius(houses, heaters));