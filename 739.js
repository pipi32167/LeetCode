/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  
  var result = []
  for(var i = 0; i < temperatures.length; i++) {
    var t1 = temperatures[i]
    var hit = false
    for(var j = i+1; j < temperatures.length; j++) {
      var t2 = temperatures[j]
      if (t2 > t1) {
        hit = true
        result.push(j - i)
        break
      }
    }
    if (!hit) {
      result.push(0)
    }
  }
  return result
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
