var tryMerge = function (item1, item2) {
  
  if (item1.start <= item2.start && item1.end >= item2.end) {
    // console.log('tryMerge 1', item1, item2);
    return true;
  }

  if (item2.start <= item1.start && item2.end >= item1.end) {
    // console.log('tryMerge 2', item1, item2);
    item1.start = item2.start;
    item1.end = item2.end;
    return true;
  }

  if (item1.start >= item2.start && item1.start <= item2.end && item1.end >= item2.end) {
    // console.log('tryMerge 3', item1, item2);
    item1.start = item2.start;
    return true;
  }

  if (item2.start >= item1.start && item2.start <= item1.end && item2.end >= item1.end) {
    // console.log('tryMerge 4', item1, item2);
    item1.end = item2.end;
    return true;
  }

  return false;
}

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  var result = [];
  var isMerged = false;
  for(var i = 0; i < intervals.length; i ++) {
    for(var j = 0; j < result.length; j ++) {
      if(tryMerge(result[j], intervals[i])) {
        isMerged = true;
        break;
      }
    }
    if (j === result.length) {
      result.push(intervals[i]);
    }
  }

  if (isMerged) {
    return merge(result);
  }

  return result;
};

var mkIntervals = function (intervals) {
  return intervals.map(function (elem) {
    return {
      start: elem[0],
      end: elem[1],
    }
  })
}
console.log(merge(mkIntervals([[1,3],[2,6],[8,10],[15,18]])));
console.log(merge(mkIntervals([[1,2],[2,6],[8,10],[15,18]])));
console.log(merge(mkIntervals([[1,2],[2,8],[8,10],[15,18]])));
