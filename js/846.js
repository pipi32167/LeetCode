/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function (hand, W) {

  if (hand.length % W !== 0) {
    return false
  }

  const map = new Map
  for (let i = 0; i < hand.length; i++) {
    map.set(hand[i], (map.get(hand[i]) || 0) + 1)
  }

  while (map.size > 0) {
    let min = 1000000001
    for (const i of map.keys()) {
      if (min > i) {
        min = i
      }
    }
    // console.log(min);
    for (let i = min; i < min + W; i++) {
      const count = map.get(i) || 0
      if (count <= 0) {
        return false
      }

      if (map.has(i)) {
        if (count - 1 === 0) {
          map.delete(i)
        } else {
          map.set(i, count - 1)
        }
      }
    }
  }

  return true
};

var assert = require('assert');

var hand = [1, 2, 3, 6, 2, 3, 4, 7, 8],
  W = 3
assert.ok(isNStraightHand(hand, W))
var hand = [1, 2, 3, 4, 5],
  W = 4
assert.ok(!isNStraightHand(hand, W))
var hand = Array(10000).fill(0).map((e, idx) => idx),
  W = 4
assert.ok(isNStraightHand(hand, W))
var hand = Array(10000).fill(0).map((e, idx) => idx),
  W = 100
assert.ok(isNStraightHand(hand, W))