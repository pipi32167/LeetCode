var merge = function (range) {
  
  for(var i = 1; i < range.length; i ++) {

    var range1 = range[i-1], range2 = range[i]
    
    if (range1[0] <= range2[0] && 
        range1[1] >= range2[0] && 
        range1[1] <= range2[1]) {

      range2[0] = range1[0]
      range1[0] = 0
      range1[1] = 0
      continue
    }
  }
  return range
}

var calcTotalTime = function (range) {
  
  var result = 0
  for(var i = 0; i < range.length; i++) {
    result += range[i][1] - range[i][0]
  }
  return result
}

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    
  var timeRange = timeSeries.map(function (elem) {
    return [elem, elem + duration]
  })

  // console.log(timeRange);
  timeRange = merge(timeRange)
  // console.log(timeRange);
  return calcTotalTime(timeRange)
};

console.log(findPoisonedDuration([1,4],2), 4);
console.log(findPoisonedDuration([1,2],2), 3);
console.log(findPoisonedDuration([1,2,3,4,5],2), 3);
