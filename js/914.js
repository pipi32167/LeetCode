/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {

  let dict = {}
  for (let i = 0; i < deck.length; i++) {
    dict[deck[i]] = dict[deck[i]] || 0
    dict[deck[i]]++
  }
  if (deck.length < 2) {
    return false
  }
  if (deck.length <= 3) {
    return Object.keys(dict).length === 1
  }
  for (let i = Math.floor(deck.length / 2); i >= 2; i--) {
    // console.log(i);
    let hit = false
    for (const num in dict) {
      // console.log(deck.length % i !== 0, num, dict[num], dict[num] !== i);
      if (deck.length % i !== 0 || dict[num] % (deck.length / i) !== 0) {
        hit = true
        break
      }
    }
    if (!hit) {
      return true
    }
  }
  return false
};

var assert = require('assert');
assert.ok(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))
assert.ok(hasGroupsSizeX([2, 2, 2]))
assert.ok(!hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]))
assert.ok(!hasGroupsSizeX([1]))
assert.ok(hasGroupsSizeX([1, 1]))
assert.ok(hasGroupsSizeX([1, 1, 2, 2, 2, 2]))
assert.ok(hasGroupsSizeX([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]))