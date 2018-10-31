var makeInteraction = function (range1, range2) {
  if (range1[0] >= range2[0] && range1[1] <= range2[1]) {
    return range1.slice(0)
  }
  if (range2[0] >= range1[0] && range2[1] <= range1[1]) {
    return range2.slice(0)
  }
  if (range1[1] >= range2[0] && range1[1] < range2[1]) {
    return [range2[0], range1[1]]
  }
  if (range2[1] >= range1[0] && range2[1] < range1[1]) {
    return [range1[0], range2[1]]
  }
};

// console.log(makeInteraction([1,2],[2,3]), undefined);
// console.log(makeInteraction([1,4],[2,3]), [2,3]);
// console.log(makeInteraction([2,3],[1,4]), [2,3]);
// console.log(makeInteraction([1,3],[2,4]), [2,3]);
// console.log(makeInteraction([2,4],[1,3]), [2,3]);
// console.log(makeInteraction([1,2],[2,3]), [2,2]);
// console.log(makeInteraction([2,3],[1,2]), [2,2]);

var makeInteractions = function (ranges) {
  
  var result = []
  while(ranges.length > 0) {
    var noInterResult = []
    var range0 = [-Math.pow(2,31), Math.pow(2,31)]
    for(var i = 0; i < ranges.length; i++) {
      var res = makeInteraction(range0, ranges[i])
      if (res) {
        range0 = res
      } else {
        noInterResult.push(ranges[i])
      }
    }
    // console.log({ range0 });
    
    result.push(range0)
    ranges = noInterResult
  } 
  // console.log(result);
  return result
};

// console.log(makeInteractions([[1,2],[2,3],[3,4]]));


/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  
  return makeInteractions(points.sort((a, b)=>a[0]-b[0])).length
};

console.log(findMinArrowShots([[10,16], [2,8], [1,6], [7,12]]), 2);
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]), 2);
var arr = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]
// console.log(arr.sort((a, b)=>a[0]-b[0]));

console.log(findMinArrowShots(arr), 2);


