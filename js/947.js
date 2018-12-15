Set.prototype.hasIntersection = function (set) {
  for (const e of set) {
    if (this.has(e)) {
      return true
    }
  }
  return false
}

Set.prototype.addMany = function (iterable) {
  for (const e of iterable) {
    this.add(e)
  }
}

var hasIntersection = function (group1, group2) {

  return group1.set0.hasIntersection(group2.set0) ||
    group1.set1.hasIntersection(group2.set1)
}

var merge = function (groups) {
  let hit, hit2
  do {
    hit = false
    const result = [groups.shift()]
    while (groups.length > 0) {
      hit2 = false
      const group = groups.shift()
      // console.log({group});
      for (let i = 0; i < result.length; i++) {
        if (hasIntersection(result[i], group)) {
          result[i].set0.addMany(group.set0)
          result[i].set1.addMany(group.set1)
          result[i].stones = result[i].stones.concat(group.stones)
          hit = true
          hit2 = true
          break
        }
      }
      if (!hit2) {
        result.push(group)
      }
    }
    groups = result

  } while (hit);

  return groups
}

var createGroup = function (stone) {
  return {
    set0: new Set([stone[0]]),
    set1: new Set([stone[1]]),
    stones: [stone],
  }
}

var split = function (stones) {

  const groups = stones.map(createGroup)

  return merge(groups)
}


// console.log(split([
//   [0, 0],
//   [0, 1],
//   [1, 0],
//   [1, 2],
//   [2, 1],
//   [2, 2]
// ]));
// console.log(split([
//   [0, 0],
//   [0, 2],
//   [1, 1],
//   [2, 0],
//   [2, 2]
// ]));


/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {

  const groups = split(stones)
  return groups.reduce((s, e) => s + e.stones.length - 1, 0)
};

var isNeighbor = function (s1, s2) {
  return s1[0] === s2[0] || s1[1] === s2[1]
}

var createGraph = function (stones) {
  const graph = stones.map(stone => {
    return {
      stone,
      neighbors: []
    }
  })

  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      if (isNeighbor(stones[i], stones[j])) {
        graph[i].neighbors.push(j)
        graph[j].neighbors.push(i)
      }
    }
  }
  return graph
}

var DFS = function (graph, idx, memo) {
  
  if (memo[idx]) {
    return 0
  }

  memo[idx] = true
  const nodes = graph[idx].neighbors
  let res = 1
  for (let i = 0; i < nodes.length; i++) {
    if (!memo[nodes[i]]) {
      res += DFS(graph, nodes[i], memo)
    }
  }
  return res
}

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const graph = createGraph(stones)
  // console.log(graph);
  const memo = Array(stones.length).fill(false)
  let count = 0
  for (let i = 0; i < stones.length; i++) {
    if (!memo[i]) {
      const res = DFS(graph, i, memo) - 1
      // console.log({ i, res });
      count += res
    }
  }
  return count
};

var assert = require('assert');
assert.equal(removeStones([
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2]
]), 5)
assert.equal(removeStones([
  [0, 0],
  [0, 2],
  [1, 1],
  [2, 0],
  [2, 2]
]), 3)
assert.equal(removeStones([
  [0, 0]
]), 0)