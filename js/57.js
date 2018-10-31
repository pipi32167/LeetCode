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
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  return merge(intervals.concat([newInterval])).sort(function (item1, item2) {
    return item1.start - item2.start;
  })
};

var intervals = [[1,3],[6,9]], newInterval = [2,5]
var intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
var intervals = [[1,5]], newInterval = [0,0]
var intervals = [[0,0]], newInterval = [1,2]
console.log(insert(mkIntervals(intervals), mkIntervals([newInterval])[0]));
