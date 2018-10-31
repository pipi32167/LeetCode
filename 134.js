/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  
  var len = gas.length
  for(var i = 0; i < len; i++) {
    var fuelTank = 0
    for(var j = 0; j < len; j++) {
      var j2 = (i + j) % len
      fuelTank += gas[j2] - cost[j2]
      if (fuelTank < 0) {
        break
      }
    }
    if (j >= len) {
      return i
    }
  }
  return -1
};

gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]
console.log(canCompleteCircuit(gas, cost), 3);
gas  = [2,3,4]
cost = [3,4,3]
console.log(canCompleteCircuit(gas, cost), -1);
