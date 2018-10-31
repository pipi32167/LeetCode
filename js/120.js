var getMin = function  (triangle, level, i, cache = {}) {
  
  if (level === triangle.length - 1) {
    return triangle[level][i]
  }

  var key = level + '|' + i
  if (cache[key] !== undefined) {
    return cache[key]
  } 

  var res =  triangle[level][i] + Math.min(
    getMin(triangle, level + 1, i, cache), 
    getMin(triangle, level + 1, i + 1, cache)
  )

  cache[key] = res
  return res
}

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  
  return getMin(triangle, 0, 0)
};

var triangle = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
console.log(minimumTotal(triangle), 11);
var triangle = require('./120_input')
console.log(minimumTotal(triangle), 11);