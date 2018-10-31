var makeIntersection = function (range1, range2) {
  if (range1[0] >= range2[0] && range1[1] <= range2[1]) {
    return range1.slice(0)
  }
  if (range2[0] >= range1[0] && range2[1] <= range1[1]) {
    return range2.slice(0)
  }
  if (range1[1] >= range2[0] && range1[1] < range2[1] && range2[0] < range1[1]) {
    return [range2[0], range1[1]]
  }
  if (range2[1] >= range1[0] && range2[1] < range1[1] && range1[0] < range2[1]) {
    return [range1[0], range2[1]]
  }
};

// console.log(makeIntersection([1,2],[2,3]), undefined);
// console.log(makeIntersection([1,3],[2,3]), [2,3]);
// console.log(makeIntersection([2,3],[1,2]), undefined);
// console.log(makeIntersection([2,3],[1,3]), [2,3]);

var makeIntersections = function (ranges) {
  
  var result = []
  while(ranges.length > 0) {
    var noInterResult = []
    var range0 = [-Math.pow(2,31), Math.pow(2,31)]
    for(var i = 0; i < ranges.length; i++) {
      var res = makeIntersection(range0, ranges[i])
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

// console.log(makeIntersections([[1,2],[3,4]]), [[1,2],[3,4]]);
// console.log(makeIntersections([[1,2],[2,4]]), [[1,2],[2,4]]);
// console.log(makeIntersections([[1,3],[2,4]]), [[2,3]]);

var isIn = function (val, range) {
  return range[0] <= val && val <= range[1]
}

var isOk = function (intervals, ranges, minCount) {
  var start = 0
  for(var i = 0; i < intervals.length; i++) {
    var elem = intervals[i]
    var count = 0
    for(var j = start; j < ranges.length; j++) {
      // if (isIn(ranges[j], elem)) {
      var val = ranges[j]
      if (elem[0] <= val && val <= elem[1]) {
        if (count === 0) {
          // intervals是有序的，不需要重新从0开始搜索ranges
          start = j
        }
        count++
        if (count >= minCount) {
          break
        }
      }
    }
    if (count < minCount) {
      return false
    }
  }
  return true
}

var count = function (intervals, val) {
  var res = 0
  for(var i = 0; i < intervals.length; i++) {
    var elem = intervals[i]
    if (isIn(val, elem)) {
      res++
    }
  }
  return res
}


var go = function (intervals, prefix, result) {
  // console.log('isOk', prefix, isOk(intervals, prefix, 2));
  
  if (!isOk(intervals, prefix, 2)) {
    return
  } 
  
  if (result.minLen > prefix.length) {
    result.minLen = prefix.length
    result.minRes = prefix
  }
  for(var i = 0; i < prefix.length; i++) {
    var res = prefix.slice(0)
    res.splice(i, 1)
    go(intervals, res, result)
  }
}

var doit = function (intervals) {
  
  var result = makeIntersections(intervals)
  // console.log('%j', result);
  
  var result2 = []
  for(var i = 0; i < result.length; i ++) {
    if (result2.indexOf(result[i][0]) < 0) {
      result2.push(result[i][0])
    }
    if (result2.indexOf(result[i][1]) < 0) {
      result2.push(result[i][1])
    }
  }

  // console.log('%j', result2.length);
  
  var result3 = { minLen: result2.length, minRes: result2 }
  go(intervals, result2, result3)
  // console.log('%s', result3.minRes);
  // console.log(result3.minRes.map(elem => count(intervals, elem)));
  return result3.minLen
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {

  // console.log('//////////////////////////////////////////');
  intervals = intervals.sort(function (a, b) {
    var res = a[0] - b[0]
    if (res === 0) {
      return a[1] - b[1]
    }
    return res
  })

  // console.log('%j', intervals);
  return Math.min(doit(intervals), doit(intervals.reverse()))
};

var intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
console.log(intersectionSizeTwo(intervals), 3);
var intervals = [[2,10],[3,7],[3,15],[4,11],[6,12],[6,16],[7,8],[7,11],[7,15],[11,12]]
console.log(intersectionSizeTwo(intervals), 5);
var intervals = [[1,2],[2,3],[2,4],[4,5]]
console.log(intersectionSizeTwo(intervals), 5);
var intervals = [[33,44],[42,43],[13,37],[24,33],[24,33],[25,48],[10,47],[18,24],[29,37],[7,34]]
console.log(intersectionSizeTwo(intervals), 6);
var intervals = [[53,64],[91,99],[34,92],[6,89],[6,84],[17,49],[25,38],[67,87],[81,88],[2,43],[26,58],[46,52],[22,39],[69,97],[29,49],[27,95],[18,82],[40,58],[37,59],[16,72]]
console.log(intersectionSizeTwo(intervals), 10);
var intervals = [[1,3],[4,9],[0,10],[6,7],[1,2],[0,6],[7,9],[0,1],[2,5],[6,8]]
console.log(intersectionSizeTwo(intervals), 7);
var intervals = [[4,15],[0,2],[1,10],[5,16],[0,14],[10,18],[3,13],[13,18],[5,10],[7,8],[10,11],[14,17],[13,16],[0,20],[7,11],[11,14],[10,12],[7,9],[18,19],[8,17]]
console.log(intersectionSizeTwo(intervals), 10);
// console.log(isOk(intervals, [ 1, 2, 7, 8, 10, 11, 13, 14, 17, 18, 19 ],));
var { intervals } = require('./757_input')
console.log(intersectionSizeTwo(intervals), 1504);
