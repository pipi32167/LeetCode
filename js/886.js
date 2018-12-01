const SUCCESS = 0
const FAIL = 1
const NOT_DONE_YET = 2

const handle = function (set1, set2, x, y) {
  if (set1.has(x)) {
    if (set1.has(y)) {
      // console.log({ set1, set2, x, y });
      return FAIL
    } else {
      set2.add(y)
      return SUCCESS
    }
  } else if (set1.has(y)) {
    if (set1.has(x)) {
      // console.log({ set1, set2, x, y });
      return FAIL
    } else {
      set2.add(x)
      return SUCCESS
    }
  } else if (set2.has(x)) {
    if (set2.has(y)) {
      // console.log({ set1, set2, x, y });
      return FAIL
    } else {
      set1.add(y)
      return SUCCESS
    }
  } else if (set2.has(y)) {
    if (set2.has(x)) {
      // console.log({ set1, set2, x, y });
      return FAIL
    } else {
      set1.add(x)
      return SUCCESS
    }
  }
  return NOT_DONE_YET
}

var solve = function (set1, set2, dislikes) {

  const [x, y] = dislikes.shift()
  set1.add(x)
  set2.add(y)

  const remain = []
  while (dislikes.length > 0) {
    const [x, y] = dislikes.shift()
    const ret = handle(set1, set2, x, y)
    if (ret === FAIL) {
      return false
    } else if (ret === NOT_DONE_YET) {
      remain.push([x, y])
    }
  }
  
  if (remain.length === 0) {
    return true
  }

  if (solve(new Set(set1), new Set(set2), remain.slice(0))) {
    return true
  }
  const [x2, y2] = remain[0]
  remain[0] = [y2, x2]
  return solve(new Set(set1), new Set(set2), remain.slice(0))
}

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {
  if (N <= 2) {
    return true
  }
  let set1 = new Set(), set2 = new Set()
  return solve(set1, set2, dislikes)
};

var assert = require('assert');
var { N, dislikes } = require('./886_input').sample4;
assert.ok(possibleBipartition(N, dislikes))
var { N, dislikes } = require('./886_input').sample3;
assert.ok(possibleBipartition(N, dislikes))
var { N, dislikes } = require('./886_input').sample1;
assert.ok(possibleBipartition(N, dislikes))
var { N, dislikes } = require('./886_input').sample2;
assert.ok(possibleBipartition(N, dislikes))
var N = 1, dislikes = []
assert.ok(possibleBipartition(N, dislikes))
var N = 10, dislikes = [[1,2],[1,3],[4,5]]
assert.ok(possibleBipartition(N, dislikes))
var N = 10, dislikes = [[4,7],[4,8],[2,8],[8,9],[1,6],[5,8],[1,2],[6,7],[3,10],[8,10],[1,5],[7,10],[1,10],[3,5],[3,6],[1,4],[3,9],[2,3],[1,9],[7,9],[2,7],[6,8],[5,7],[3,4]]
assert.ok(possibleBipartition(N, dislikes))
var N = 4, dislikes = [[1,2],[1,3],[2,4]]
assert.ok(possibleBipartition(N, dislikes))
var N = 3, dislikes = [[1,2],[1,3],[2,3]]
assert.ok(!possibleBipartition(N, dislikes))
var N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
assert.ok(!possibleBipartition(N, dislikes))

