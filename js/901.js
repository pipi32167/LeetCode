var StockSpanner = function () {
  this.__prices = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {

  let count = 1
  for (let i = this.__prices.length - 1; i >= 0; i--) {
    if (this.__prices[i] > price) {
      break
    }
    count++
  }
  this.__prices.push(price)
  return count
};

var assert = require('assert')
var S = new StockSpanner()
assert.equal(S.next(100), 1)
assert.equal(S.next(80), 1)
assert.equal(S.next(60), 1)
assert.equal(S.next(70), 2)
assert.equal(S.next(60), 1)
assert.equal(S.next(75), 4)
assert.equal(S.next(85), 6)