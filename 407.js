
var rotateCW = function (matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var result = new Array(n).fill(0)
  for(var i = 0; i < n; i++) {
    result[i] = new Array(m).fill(0)
    for(var j = 0; j < m; j++) {
      result[i][j] = matrix[m-1-j][i]
    }
  }
  return result
}

// console.log(rotateCW([[1,2],[3,4]]), [[3,1],[4,2]]);
// console.log(rotateCW([[1,2,3],[4,5,6]]), [[4,1],[5,2],[6,3]]);
// console.log(rotateCW([[4,1],[5,2],[6,3]]), [[6,5,4],[3,2,1]]);
// console.log(rotateCW([[6,5,4],[3,2,1]]), [[3,6],[2,5],[1,4]]);


var rotateCCW = function (matrix) {
  matrix = rotateCW(matrix)
  matrix = rotateCW(matrix)
  matrix = rotateCW(matrix)
  return matrix
}

// console.log(rotateCCW([[1,2],[3,4]]), [[2,4],[1,3]]);
// console.log(rotateCCW([[1,2,3],[4,5,6]]), [[3,6],[2,5],[1,4]]);

var calcForeMaxHeights = function (heights) {
  // console.log('calcForeMaxHeights');
  // console.log(heights);
  var m = heights.length
  var n = heights[0].length
  var foreMaxHeights = new Array(m).fill(0)
  var getForeMax = (i, j) => {
    var h = heights[i][j]
    if (i === 0 || j === 0) {
      return h
    }
    return Math.max(h, Math.min(foreMaxHeights[i-1][j], foreMaxHeights[i][j-1]))
  }
  for(var i = 0; i < m; i++) {
    foreMaxHeights[i] = new Array(n).fill(0)
    for(var j = 0; j < n; j++) { 
      foreMaxHeights[i][j] = getForeMax(i, j)
    }
  }
  // console.log(foreMaxHeights);
  return foreMaxHeights
}

// console.log(calcForeMaxHeights([
//   [1,1,1,1],
//   [1,0,0,1],
//   [1,0,0,1],
//   [1,1,1,1],
// ]));

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  if (heightMap.length === 0) {
    return 0
  }
  // console.log(heightMap);
  
  var maxHeights1 = calcForeMaxHeights(heightMap)

  var heightMap2 = rotateCW(heightMap)
  var maxHeights2 = calcForeMaxHeights(heightMap2)
  maxHeights2 = rotateCCW(maxHeights2)
  
  var heightMap3 = rotateCW(heightMap2)
  var maxHeights3 = calcForeMaxHeights(heightMap3)
  maxHeights3 = rotateCW(rotateCW(maxHeights3))

  var heightMap4 = rotateCW(heightMap3)
  var maxHeights4 = calcForeMaxHeights(heightMap4)
  maxHeights4 = rotateCW(maxHeights4)

  var m = heightMap.length
  var n = heightMap[0].length
  // console.log('//////////');
  // console.log(maxHeights1);
  // console.log(maxHeights2);
  var area = 0
  var areaMatrix = new Array(m).fill(0)
  for(var i = 0; i < m; i++) {
    areaMatrix[i] = new Array(n).fill(0)
    for(var j = 0; j < n; j++) { 
      var h = heightMap[i][j]
      maxHeights1[i][j] = Math.min(
        maxHeights1[i][j], 
        maxHeights2[i][j],
        maxHeights3[i][j],
        maxHeights4[i][j]
      )
      var res = maxHeights1[i][j] - h
      // console.log({i, j, area: res});
      area += res
      areaMatrix[i][j] = res
    }
  }
  // console.log('//////////');
  // console.log(maxHeights1);
  console.log(areaMatrix);
  
  return area
};

var matrix = [
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]
// console.log(trapRainWater(matrix), 4);
// console.log(trapRainWater([]), 0);
// console.log(trapRainWater([[1,4,3,1,3,2]]), 0);
var matrix = [
  [12,13,1,12],
  [13,4,13,12],
  [13,8,10,12],
  [12,13,12,12],
  [13,13,13,13]
]
// console.log(trapRainWater(matrix), 14);
var matrix = [
  [5,5,5,1],
  [5,1,1,5],
  [5,1,5,5],
  [5,2,5,8]
]
// var res = [ 
//   [ 5, 5, 5, 1 ], 
//   [ 5, 5, 5, 5 ], 
//   [ 5, 5, 5, 5 ], 
//   [ 5, 5, 5, 8 ] ]
// var res = [ 
//   [ 5, 5, 5, 1 ], 
//   [ 5, 2, 5, 5 ], 
//   [ 5, 2, 5, 5 ], 
//   [ 5, 2, 5, 8 ] ]
// [ [ 5, 5, 5, 1 ], 
//   [ 5, 2, 5, 5 ], 
//   [ 5, 2, 5, 5 ], 
//   [ 5, 2, 5, 8 ] ]
// console.log(trapRainWater(matrix), 3);

var matrix = require('./407_input')
console.log(trapRainWater(matrix), 79058);

// var deepEqual = function (m1, m2) {
//   if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
//     return false
//   }
//   var m = m1.length
//   var n = m1[0].length
//   for(var i = 0; i < m; i ++) {
//     for(var j = 0; j < n; j ++) {
//       if (m1[i][j] !== m2[i][j]) {
//         return false
//       }
//     }
//   }
//   return true
// }

// console.log(deepEqual([[1,2]], [[1,2]]), true);
// console.log(deepEqual([[1,2],[3,4]], [[1,2],[3,4]]), true);
// console.log(deepEqual(matrix, matrix), true);
// console.log(deepEqual(matrix, rotateCCW(rotateCW(matrix))), true);
// console.log(deepEqual(matrix, rotateCW(matrix)), false);
// console.log(deepEqual(matrix, rotateCCW(matrix)), false);
// console.log(deepEqual(matrix, rotateCCW(rotateCCW(rotateCW(rotateCW(matrix))))), true);