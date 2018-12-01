const BIT_COUNT = 10

var gen = function (numOfOne, prefix, result) {

  if (prefix.length === BIT_COUNT) {
    result.push(prefix.slice(0))
    return
  }

  let poss
  if (numOfOne === 0) {
    poss = [0]
  } else if (prefix.length + numOfOne === BIT_COUNT) {
    poss = [1]
  } else {
    poss = [1, 0]
  }
  for (let i = 0; i < poss.length; i++) {
    prefix.push(poss[i])
    gen(poss[i] === 1 ? numOfOne - 1 : numOfOne, prefix, result)
    prefix.pop()
  }
}

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {

  const result = []
  gen(num, [], result)
  // console.log(result);
  return result
    .map(e => {
      const hour = Number('0b' + e.slice(0, 4).join(''))
      const minute = Number('0b' + e.slice(4).join(''))
      return [hour, minute]
    })
    .filter(e => e[0] < 12 && e[1] < 60)
    .map(e => {
      return [e[0], (e[1] < 10 ? '0' : '') + e[1]].join(':')
    })
    // .sort((a, b) => b.localeCompare(a))
};

var assert = require('assert');

// assert.deepEqual(readBinaryWatch(1), ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"])
assert.deepEqual(readBinaryWatch(2), ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"])