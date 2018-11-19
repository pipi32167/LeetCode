var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return nums
  }

  var t = nums[l],
    i = l,
    j = u + 1
  while (true) {
    do {
      i++
    } while (i <= u && nums[i] < t)
    do {
      j--
    } while (nums[j] > t)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1)
  quickSort3(nums, j + 1, u)
  return nums
}

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {

  const map = new Map()
  for (let i = 0; i < wall.length; i++) {
    let sum = 0
    for (let j = 0; j < wall[i].length - 1; j++) {
      sum += wall[i][j]
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }
  if (map.size === 0) {
    return wall.length
  }
  const sums = Array.from(map.values())
  quickSort3(sums, 0, sums.length - 1)

  return wall.length - sums[sums.length - 1]
};

const assert = require('assert');
const _ = require('lodash');
assert.equal(leastBricks([
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1]
]), 2)
assert.equal(leastBricks([
  [1],
  [1],
  [1]
]), 3)
var wall = new Array(10000).fill(0).reduce((s, e) => s.concat([
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1]
]), [])
assert.equal(leastBricks(wall), 20000)