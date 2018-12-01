var canAdd = function (graph, set, nodes) {
  for (let i = 0; i < nodes.length; i++) {
    const nodes2 = graph[nodes[i]]
    for (let j = 0; j < nodes2.length; j++) {
      if (set.has(nodes2[i])) {
        return false
      }
    }
  }
  return true
}

var add = function (set, nodes) {
  for (let i = 0; i < nodes.length; i++) {
    set.add(nodes[i])
  }
  return set
}

var del = function (set, nodes) {
  for (let i = 0; i < nodes.length; i++) {
    set.delete(nodes[i])
  }
  return set
}

var has = function (set, nodes) {
  for (let i = 0; i < nodes.length; i++) {
    if (set.has(nodes[i])) {
      return true
    }
  }
  return false
}

var go = function (graph, idx, set1, set2) {
  if (idx >= graph.length) {
    return true
  }
  const node = graph[idx]
  // console.log({ set1, set2, idx, node });
  if (set1.has(idx) || has(set2, node)) {
    if (!canAdd(graph, set2, node)) {
      // console.log('fail1', { set1, set2, idx, node });
      return false
    }
    add(set2, node)
    // console.log('path1');
    return go(graph, idx + 1, set1, set2)
  } else if (set2.has(idx) || has(set1, node)) {
    if (!canAdd(graph, set1, node)) {
      // console.log('fail2', { set1, set2, idx, node });
      return false
    }
    add(set1, node)
    // console.log('path2');
    return go(graph, idx + 1, set1, set2)
  } else {
    // console.log('path3');
    add(set1, [idx])
    add(set2, node)
    if (go(graph, idx + 1, set1, set2)) {
      return true
    }
    del(set1, [idx])
    del(set2, node)
    // console.log('path4');
    add(set2, [idx])
    add(set1, node)
    return go(graph, idx + 1, set1, set2)
  }
}

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {

  const set1 = new Set,
    set2 = new Set
  return go(graph, 0, set1, set2)
};

var assert = require('assert');
assert.ok(isBipartite([[3],[2,4],[1],[0,4],[1,3]]))
assert.ok(isBipartite([
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2]
]))
assert.ok(!isBipartite([
  [1, 2, 3],
  [0, 2],
  [0, 1, 3],
  [0, 2]
]))

assert.ok(!isBipartite([
  [],
  [10, 44, 62],
  [98],
  [59],
  [90],
  [],
  [31, 59],
  [52, 58],
  [],
  [53],
  [1, 63],
  [51, 71],
  [18, 64],
  [24, 26, 45, 95],
  [61, 67, 96],
  [],
  [40],
  [39, 74, 79],
  [12, 21, 72],
  [35, 85],
  [86, 88],
  [18, 76],
  [71, 80],
  [27, 58, 85],
  [13, 26, 87],
  [75, 94],
  [13, 24, 68, 77, 82],
  [23],
  [56, 96],
  [67],
  [56, 73],
  [6],
  [41],
  [50, 88, 91, 94],
  [],
  [19, 72, 92],
  [59],
  [49],
  [49, 89],
  [17],
  [16],
  [32, 84, 86],
  [61, 73, 77],
  [94, 98],
  [1, 74],
  [13, 57, 90],
  [],
  [93],
  [],
  [37, 38, 54, 68],
  [33],
  [11],
  [7, 85],
  [9],
  [49],
  [61],
  [28, 30, 87, 93],
  [45, 69, 77],
  [7, 23, 76],
  [3, 6, 36, 62],
  [81],
  [14, 42, 55, 62],
  [1, 59, 61],
  [10],
  [12, 93],
  [],
  [96],
  [14, 29, 70, 73],
  [26, 49, 71, 76],
  [57, 83],
  [67],
  [11, 22, 68, 89],
  [18, 35],
  [30, 42, 67],
  [17, 44],
  [25],
  [21, 58, 68],
  [26, 42, 57, 95],
  [],
  [17],
  [22, 83],
  [60],
  [26, 83, 84, 94],
  [69, 80, 82],
  [41, 82],
  [19, 23, 52],
  [20, 41],
  [24, 56],
  [20, 33],
  [38, 71, 99],
  [4, 45],
  [33],
  [35],
  [47, 56, 64],
  [25, 33, 43, 82],
  [13, 77],
  [14, 28, 66],
  [],
  [2, 43],
  [89]
]))