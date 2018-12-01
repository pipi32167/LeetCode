const spread = function (graph, initial, excludeIdx) {
  // console.log({excludeIdx});
  let stack = initial.filter(e => e !== excludeIdx)
  const set = new Set
  while (stack.length > 0) {
    // console.log({stack});
    const idx = stack.shift()
    if (set.has(idx)) {
      continue
    }

    set.add(idx)
    for (let i = 0; i < graph[idx].length; i++) {
      if (graph[idx][i] === 1) {
        stack.push(i)
      }
    }
  }
  // console.log(Array.from(set).sort((a, b) => a-b));
  return set.size
}

/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function (graph, initial) {

  initial.sort((a, b) => a-b)
  // console.log(graph.length);
  
  // for (let i = 0; i < graph.length; i++) {
  //   for (let j = 0; j < graph[i].length; j++) {
  //     if (graph[i][j] === 1) {
  //       console.log({ i, j });
  //     }
  //   }
  // }

  // const affected = spread(clone(graph), initial.slice(0), -1)
  // console.log({ idx: -1, affected });
  let minAffected = graph.length + 1,
    minRes

  for (let i = 0; i < initial.length; i++) {
    const affected = spread(graph, initial, initial[i])
    // console.log({ idx: initial[i], affected });
    
    if (minAffected > affected) {
      minAffected = affected
      minRes = initial[i]
    }
  }
  // console.log({ minAffected, minRes });
  
  return minRes
};


var assert = require('assert');
var graph = [[1,0,0,0],[0,1,0,0],[0,0,1,1],[0,0,1,1]]
var initial = [3,1]
assert.equal(minMalwareSpread(graph, initial), 3)
var graph = [[1,1,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,1],[0,0,1,0,1,0,0,0,0,1],[0,0,0,1,0,0,0,0,0,1],[0,0,1,0,1,0,1,0,0,1],[0,0,0,0,0,1,1,0,0,0],[0,0,0,0,1,1,1,0,0,1],[0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,1,1,0],[0,1,1,1,1,0,1,0,0,1]]
var initial = [9,0,2]
assert.equal(minMalwareSpread(graph, initial), 0)
assert.equal(minMalwareSpread([[1,1,0],[1,1,0],[0,0,1]], [0,1]), 0)
assert.equal(minMalwareSpread([[1,0,0],[0,1,0],[0,0,1]], [0,2]), 0)
assert.equal(minMalwareSpread([[1,1,1],[1,1,1],[1,1,1]], [1,2]), 1)
assert.equal(minMalwareSpread([[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,1]], [5,0]), 0)
var count = 200
var initial = Array(count).fill(0).map((e, idx) => idx)
var graph = Array(count).fill(0).map(() => Array(count).fill(1))
assert.equal(minMalwareSpread(graph, initial), 0)
