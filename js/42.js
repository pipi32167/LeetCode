var calcForeMaxHeights = function (heights) {
  
  var foreMax = heights[0], foreMaxHeights = new Array(heights.length).fill(0)
  for(var i = 0; i < heights.length; i++) {
    var h = heights[i]
    if (foreMax <= h) {
      foreMax = h
    }
    foreMaxHeights[i] = foreMax
  }
  return foreMaxHeights
}

/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function(heights) {
  
  // console.log(heights);
  var foreMaxHeights = calcForeMaxHeights(heights)
  var hindMaxHeights = calcForeMaxHeights(heights.reverse()).reverse()
  // console.log(foreMaxHeights);
  // console.log(hindMaxHeights);
  var area = 0
  for(var i = 0; i < heights.length; i++) {
    area += Math.min(foreMaxHeights[i], hindMaxHeights[i]) - heights[i]
  }
  return area
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6);
var arr = require('./84_input')
console.log(trap(arr), 6);
