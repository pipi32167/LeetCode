/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  while(data.length > 0) {

    // console.log(data);
    // console.log(data.map(e => e.toString(2)));
    let first = data[0]
    if ((first & 0b11000000) === 0b10000000) {
      return false
    }
    let count
    if ((first & 0b10000000) === 0) {
      count = 1
    } else {
      first &= 0b11111111
      count = 0
      for (let i = 0; i < 8; i++) {
        if (first & (0b10000000 >> i)) {
          count++
        } else {
          break
        }
      }
    }
    // console.log(data.length, count);

    if (count > 4 || data.length < count) {
      return false
    }
    for (let i = 1; i < count; i++) {
      if ((data[i] & 0b11000000) !== 0b10000000) {
        return false
      }
    }
    // if (data.length > count) {
      data = data.slice(count)
    // }
  }
  return true
};

var assert = require('assert');
assert.ok(validUtf8([228, 189, 160, 229, 165, 189, 13, 10]))
assert.ok(!validUtf8([250, 145, 145, 145, 145]))
assert.ok(validUtf8([0b00000000]))
assert.ok(!validUtf8([145]))
assert.ok(validUtf8([197, 130, 1]))
assert.ok(!validUtf8([235, 140, 4]))
assert.ok(validUtf8(require('./393_input').sample1))