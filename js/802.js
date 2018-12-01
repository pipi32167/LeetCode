/**
 * @param {number[]} node
 * @param {bool[]} isSafe
 * @return {bool}
 */
var checkIsSafe = function (node, isSafe) {
  return node.every(e => isSafe[e])
}

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {

  const isSafe = Array(graph.length).fill(false)
  const safeNodes = []

  let hit
  do {
    hit = false
    for (let i = 0; i < graph.length; i++) {
      if (isSafe[i]) {
        continue
      }
      if (checkIsSafe(graph[i], isSafe)) {
        isSafe[i] = true
        hit = true
        safeNodes.push(i)
      }
    }
  } while (hit)

  return safeNodes.sort((a, b) => a - b)
};

var assert = require('assert');
assert.deepEqual(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]), [2,4,5,6])