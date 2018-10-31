/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {

  if (intervals.length <= 1) {
    return intervals.map(function (elem) {
      return -1
    })
  }

  var max = 0
  for(var i = 0; i < intervals.length; i++) {
    if (max < intervals[i].end) {
      max = intervals[i].end
    }
  }

  var minRightIdx = intervals.map(function () {
    return intervals.length
  })
  var minRight = intervals.map(function () {
    return max
  })

  for(var i = 0; i < intervals.length; i++) {
    for(var j = 0; j < intervals.length; j++) {
      if (i === j) {
        continue
      } 
      if (intervals[i].end === intervals[j].start) {
        minRightIdx[i] = j
        break
      }
      if(intervals[i].end < intervals[j].start) {
        if (minRight[i] > intervals[j].start) {
          minRight[i] = intervals[j].start
          minRightIdx[i] = j
        } 
      }
    }
  }
  // console.log(minRightIdx);
  
  return minRightIdx.map(function (elem) {
    return elem < intervals.length ? elem : -1
  })
};


var buildIntervals = function  (arr) {
  return arr.map(function (elem) {
    return {
      start: elem[0],
      end: elem[1]
    }
  })
}

console.log(findRightInterval(buildIntervals([])));
console.log(findRightInterval(buildIntervals([[1,2]])));
console.log(findRightInterval(buildIntervals([ [3,4], [2,3], [1,2] ])));
console.log(findRightInterval(buildIntervals([ [1,4], [2,3], [3,4] ])));


