/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  
  var maxArea = 0
  for(var i = 0; i < heights.length; i++) {
    var count = 1
    for(var j = i+1; j < heights.length; j++) {
      if (heights[j] >= heights[i]) {
        count++
      } else {
        break
      }
    }
    for(var j = i-1; j >= 0; j--) {
      if (heights[j] >= heights[i]) {
        count++
      } else {
        break
      }
    }
    var area = count * heights[i]
    // console.log({ i, height: heights[i], count, area });
    if (maxArea < area) {
      maxArea = area
    }
  }
  return maxArea
};

console.log(largestRectangleArea([2,1,5,6,2,3]), 10);
var heights = require('./84_input')
console.log(largestRectangleArea(heights));