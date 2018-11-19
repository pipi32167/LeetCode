var RecentCounter = function () {
  this.__pings = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  let count = 1
  for (let i = 0; i < this.__pings.length; i++) {
    if (this.__pings[i] >= t - 3000) {
      count += this.__pings.length - i
      break
    }
  }
  this.__pings.push(t)
  return count
};

var assert = require('assert')
var counter = new RecentCounter()
assert.equal(counter.ping(1), 1)
assert.equal(counter.ping(100), 2)
assert.equal(counter.ping(3001), 3)
assert.equal(counter.ping(3002), 3)
