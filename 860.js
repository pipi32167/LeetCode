
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  var amounts = [20, 10, 5]
  var holds = { 5:0, 10:0, 20:0 }
  var cost = 5
  var i = 0
  for(var i = 0; i < bills.length; i++) {
    var bill = bills[i] - cost
    // console.log({bill, holds});
    if (bill > 0) {
      while(bill > 0) {
        var hit = false
        for(var j = 0; j < amounts.length; j++) {
          var amount = amounts[j]
          if (bill >= amount && holds[amount] > 0) {
            holds[amount] --
            bill -= amount
            hit = true
            break
          }
        }
        if (!hit) {
          return false
        }
      }
    }
    holds[bills[i]] ++
  }

  return true
};

console.log(lemonadeChange([5,5,5,10,20]), true);
console.log(lemonadeChange([5,5,10]), true);
console.log(lemonadeChange([10,10]), false);