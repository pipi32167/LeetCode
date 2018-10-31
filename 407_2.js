
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  if (heightMap.length === 0) {
    return 0
  }
  // console.log(heightMap);

  var m = heightMap.length
  var n = heightMap[0].length
  var maxHeights = new Array(m).fill(0)
  var max = 0
  for(var i = 0; i < m; i++) {
    maxHeights[i] = new Array(n).fill(0)
    for(var j = 0; j < n; j++) {
      maxHeights[i][j] = heightMap[i][j]
      if (max < heightMap[i][j]) {
        max = heightMap[i][j]
      }
    }
  }
  for(var i = 1; i < m-1; i++) {
    for(var j = 1; j < n-1; j++) {
      maxHeights[i][j] = max
    }
  }
  // console.log(maxHeights);

  while(true) {
    var hit = false
    for(var i = 1; i < m-1; i++) {
      for(var j = 1; j < n-1; j++) {
        var min = Math.min(
          maxHeights[i][j],
          maxHeights[i-1][j],
          maxHeights[i][j-1],
          maxHeights[i+1][j],
          maxHeights[i][j+1]
        )
        var maxHeight = Math.max(min, heightMap[i][j])
        if (maxHeights[i][j] > maxHeight) {
          maxHeights[i][j] = maxHeight
          hit = true
        }
      }
    }

    // console.log(maxHeights);

    if (!hit) {
      break
    }
  }
  var area = 0
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) { 
      var h = heightMap[i][j]
      var res = maxHeights[i][j] - h
      area += res
    }
  }
  // console.log(maxHeights);
  
  return area
};

var matrix = [
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]
console.log(trapRainWater(matrix), 4);
console.log(trapRainWater([]), 0);
console.log(trapRainWater([[1,4,3,1,3,2]]), 0);
var matrix = [
  [12,13,1,12],
  [13,4,13,12],
  [13,8,10,12],
  [12,13,12,12],
  [13,13,13,13]
]
console.log(trapRainWater(matrix), 14);
var matrix = [
  [5,5,5,1],
  [5,1,1,5],
  [5,1,5,5],
  [5,2,5,8]
]
// // var res = [ 
// //   [ 5, 5, 5, 1 ], 
// //   [ 5, 5, 5, 5 ], 
// //   [ 5, 5, 5, 5 ], 
// //   [ 5, 5, 5, 8 ] ]
// // var res = [ 
// //   [ 5, 5, 5, 1 ], 
// //   [ 5, 2, 5, 5 ], 
// //   [ 5, 2, 5, 5 ], 
// //   [ 5, 2, 5, 8 ] ]
// // [ [ 5, 5, 5, 1 ], 
// //   [ 5, 2, 5, 5 ], 
// //   [ 5, 2, 5, 5 ], 
// //   [ 5, 2, 5, 8 ] ]
console.log(trapRainWater(matrix), 3);

var matrix = require('./407_input')
console.log(trapRainWater(matrix), 79058);