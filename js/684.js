var isEqualEdge = function (edge1, edge2) {
  const [x1, y1] = edge1
  const [x2, y2] = edge2
  return x1 === x2 && y1 === y2 || x1 === y2 && y1 === x2
}

/**
 * @param {number[][]} edges
 * @return {number[][]}
 */
var genNodes = function (edges) {

  let maxNodeId = -1
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    edge[0] -= 1
    edge[1] -= 1
    maxNodeId = Math.max(maxNodeId, ...edge)
  }

  const nodes = Array(maxNodeId + 1).fill(0).map(() => [])
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i]
    nodes[edge[0]].push(edge[1])
    nodes[edge[1]].push(edge[0])
  }
  // console.log(nodes);

  return nodes
}

var go = function (nodes, excludeEdge, idx, beforeVisitId, isVisited) {

  if (isVisited[idx]) {
    return true
  }
  isVisited[idx] = true
  const node = nodes[idx]
  for (let i = 0; i < node.length; i++) {
    const destNodeId = node[i]
    if (beforeVisitId !== -1 && beforeVisitId === destNodeId || isEqualEdge([idx, destNodeId], excludeEdge)) {
      continue
    }
    if (go(nodes, excludeEdge, node[i], idx, isVisited)) {
      return true
    }
  }
  return false
}


var hasCircle = function (nodes, excludeEdge) {

  const isVisited = Array(nodes.length).fill(false)
  const idx = nodes.map((e, idx) => idx).filter(idx => excludeEdge[0] !== idx && excludeEdge[1] !== idx)[0]
  return go(nodes, excludeEdge, idx, -1, isVisited)
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const oldEdges = edges.map(e => e.slice(0))
  const nodes = genNodes(edges)

  const result = []
  for (let i = 0; i < edges.length; i++) {
    console.log(nodes, edges[i], oldEdges[i]);
    if (!hasCircle(nodes, edges[i])) {
      result.unshift(oldEdges[i])
    }
  }
  console.log(result);

  return result[0]
};

var assert = require('assert');

// assert.ok(!hasCircle([
//   [1, 2],
//   [0],
//   [0]
// ], [0, 1]))

// assert.ok(hasCircle([
//   [7],
//   [6, 4, 7],
//   [5, 8],
//   [7],
//   [1],
//   [2, 7],
//   [1, 7, 9],
//   [6, 5, 3, 1, 0],
//   [2],
//   [6]
// ], [0, 7]))

// assert.deepEqual(findRedundantConnection([
//   [1, 2],
//   [1, 3],
//   [2, 3]
// ]), [2, 3])
// assert.deepEqual(findRedundantConnection([
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 4],
//   [1, 5]
// ]), [1, 4])
// assert.deepEqual(findRedundantConnection([
//   [2, 7],
//   [7, 8],
//   [3, 6],
//   [2, 5],
//   [6, 8],
//   [4, 8],
//   [2, 8],
//   [1, 8],
//   [7, 10],
//   [3, 9]
// ]), [2, 8])

assert.deepEqual(findRedundantConnection([
  [20, 24],
  [3, 17],
  [17, 20],
  [8, 15],
  [14, 17],
  [6, 17],
  [15, 23],
  [6, 8],
  [15, 19],
  [16, 22],
  [7, 9],
  [8, 22],
  [2, 4],
  [4, 11],
  [22, 25],
  [6, 24],
  [13, 19],
  [15, 18],
  [1, 9],
  [4, 9],
  [4, 19],
  [5, 10],
  [4, 21],
  [4, 12],
  [5, 6]
]), [6, 24])