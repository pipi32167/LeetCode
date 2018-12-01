var calcMax = function (map, num) {
  let begin = num
  while (map.has(begin - 1)) {
    begin--
    map.set(begin, true)
  }
  let end = num
  while (map.has(end + 1)) {
    end++
    map.set(end, true)
  }
  const len = end - begin + 1
  // console.log({ num, begin, end, len });
  return len
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

  const map = new Map
  for (const num of nums) {
    map.set(num, false)
  }
  let max = 0
  for (const num of nums) {
    if (map.get(num)) {
      continue
    }
    const res = calcMax(map, num)
    if (max < res) {
      max = res
    }
  }
  return max
};

var assert = require('assert');
assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4)