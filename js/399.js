var set = function (graph, e1, e2, v) {
  let map = graph.get(e1)
  if (!map) {
    map = new Map
    graph.set(e1, map)
  }
  map.set(e2, v)
}

var go = function (graph, end, result) {

  const start = result[result.length - 1]
  if (start === end) {
    return true
  }

  const map = graph.get(start)
  for (const [k, v] of map) {
    if (result.indexOf(k) >= 0) {
      continue
    }
    result.push(k)
    if (go(graph, end, result)) {
      return true
    }
    result.pop()
  }
  return false
}

var calc = function (graph, e1, e2) {

  if (!graph.has(e1) || !graph.has(e2)) {
    return -1
  }

  const result = [e1]
  if (!go(graph, e2, result)) {
    return -1
  }
  // const result2 = []

  let res = 1
  for (let i = 1; i < result.length; i++) {
    res *= graph.get(result[i - 1]).get(result[i])
    // result2.push(graph.get(result[i - 1]).get(result[i]))
  }
  // console.log({result, result2});
  return res
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {

  const graph = new Map
  for (let i = 0; i < equations.length; i++) {
    const [e1, e2] = equations[i]
    const v = values[i]
    set(graph, e1, e2, v)
    set(graph, e2, e1, 1 / v)
  }

  const result = []
  for (let i = 0; i < queries.length; i++) {
    const [e1, e2] = queries[i]
    const res = calc(graph, e1, e2)
    result.push(res)
  }
  return result
};


var assert = require('assert');
var equations = [
  ["a", "b"],
  ["b", "c"]
]
var values = [2.0, 3.0]
var queries = [
  ["a", "c"],
  ["b", "a"],
  ["a", "e"],
  ["a", "a"],
  ["x", "x"]
]
var result = [6.0, 0.5, -1.0, 1.0, -1.0]
assert.deepEqual(calcEquation(equations, values, queries), result)
var equations = [
  ["a", "b"],
  ["c", "d"]
]
var values = [1.0, 1.0]
var queries = [
  ["a", "c"],
  ["b", "d"],
  ["b", "a"],
  ["d", "c"]
]
var result = [-1.0, -1.0, 1.0, 1.0]
assert.deepEqual(calcEquation(equations, values, queries), result)