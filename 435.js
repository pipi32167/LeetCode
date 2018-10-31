
var isOverlap = function (intervals, i1, i2) {
  i1 = intervals[i1]
  i2 = intervals[i2]
  if(
    i1.start >= i2.start && i1.end <= i2.end || 
    i2.start >= i1.start && i2.end <= i1.end || 
    i1.end > i2.start && i1.end < i2.end || 
    i2.end > i1.start && i2.end < i1.end
  ) {
    return true
  }
  return false
}

var go = function (intervals) {
  
  var count = 0
  var last = 0
  for(var i = 1; i < intervals.length; i++) {
    // console.log('isOverlap', intervals[last], intervals[i], isOverlap(intervals, last, i));
    if (isOverlap(intervals, last, i)) {
      count++
    } else {
      last = i
    }
  }
  return count
}

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  var intervals1 = intervals.slice(0).sort((a, b) => {
    if (a.start === b.start) {
      return a.end - b.end
    }
    return a.start - b.start
  })
  var intervals2 = intervals.slice(0).sort((a, b) => {
    if (a.start === b.start) {
      return a.end - b.end
    }
    return b.start - a.start
  })
  return Math.min(go(intervals1), go(intervals2))
};

var getIntervalsFromArray = function (arr) {
  
  return arr.map(function (elem) {
    return {
      start: elem[0],
      end: elem[1],
    }
  })
}

var getArrayFromIntervals = function (intervals) {
  return intervals.map(function (elem) {
    return [elem.start, elem.end]
  })
}

var arr = [ [1,2], [2,3], [3,4], [1,3] ]
console.log(eraseOverlapIntervals(getIntervalsFromArray(arr)), 1);
var arr = [ [1,2], [1,2], [1,2] ]
console.log(eraseOverlapIntervals(getIntervalsFromArray(arr)), 2);
var arr = [ [1,2], [2,3] ]
console.log(eraseOverlapIntervals(getIntervalsFromArray(arr)), 0);
var arr = [[2,4],[3,5],[3,5],[4,6]]
console.log(eraseOverlapIntervals(getIntervalsFromArray(arr)), 2);
var arr = [[0,2],[1,3],[1,3],[2,4],[3,5],[3,5],[4,6]]
console.log(eraseOverlapIntervals(getIntervalsFromArray(arr)), 4);
var arr = [[1,100],[11,22],[1,11],[2,12]]
console.log(eraseOverlapIntervals(getIntervalsFromArray(arr)), 2);
var arr = require('./435_input').intervals
console.log(eraseOverlapIntervals(getIntervalsFromArray(arr)), 187);