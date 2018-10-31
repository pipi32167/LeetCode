var calcTriangleArea = function (points) {
  var x1 = points[0][0], x2 = points[1][0], x3 = points[2][0];
  var y1 = points[0][1], y2 = points[1][1], y3 = points[2][1];
  return Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)) / 2;
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    
  var groups = [];
  var len = points.length;
  for(var i = 0; i < len; i ++) {
    for(var j = i + 1; j < len; j++) {
      for(var k = j + 1; k < len; k++) { 
        groups.push([ points[i], points[j], points[k] ]);
      }
    }
  }
  var areas = groups.map(calcTriangleArea)
  // console.log(areas);
  
  var maxArea = Math.max.apply(null, areas);
  return maxArea;
};


console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]), 2);
