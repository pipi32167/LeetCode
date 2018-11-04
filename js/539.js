let convertToMinutes = function (timePoint) {
  
  let [hour, minute] = timePoint.split(':').map(Number)
  return hour * 60 + minute
}

// console.log(convertToMinutes('00:00') === 0);
// console.log(convertToMinutes('23:59') === 24 * 60 - 1);


/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    
  let times = timePoints.map(convertToMinutes)
  times.sort((a, b) => a-b)
  let min = times[1] - times[0]
  for (let i = 1; i < times.length; i++) {
    min = Math.min(min, times[i] - times[i-1])
  }
  min = Math.min(min, times[0] + 24 * 60 - times[times.length - 1])
  return min
};


console.log(findMinDifference(["23:59","00:00"]) === 1);
console.log(findMinDifference(["23:58","00:00","00:01"]) === 1);
console.log(findMinDifference(["23:59","00:00","00:02"]) === 1);
console.log(findMinDifference(["23:58","00:03","00:00","00:02"]) === 1);
