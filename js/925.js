var stat = function (str) {
  const result = []
  let char = str[0],
    count = 1
  for (let i = 1; i < str.length; i++) {
    if (char === str[i]) {
      count++
    } else {
      result.push([char, count])
      char = str[i]
      count = 1
    }
  }
  result.push([char, count])
  return result
}

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {

  const result1 = stat(name)
  const result2 = stat(typed)
  if (result1.length !== result2.length) {
    return false
  }
  for (let i = 0; i < result1.length; i++) {
    if (result1[i][0] !== result2[i][0] || result1[i][1] > result2[i][1]) {
      return false
    }
  }
  return true
};

var assert = require('assert');
var name = "alex",
  typed = "aaleex"
assert.ok(isLongPressedName(name, typed))
var name = "saeed",
  typed = "ssaaedd"
assert.ok(!isLongPressedName(name, typed))