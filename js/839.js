var isMatch = function (s1, s2) {
  let count = 0
  for (let i = 0; i < s1.length; i++) {

    if (s1[i] !== s2[i]) {
      count++
      if (count > 2) {
        return false
      }
    }
  }
  return count === 2 || count === 0
}

var Graph = function (val) {
  this.nodes = [val]
  this.set = new Set(val)
  this.usingSet = false
}

Graph.prototype.tryInsert = function (val) {
  if (this.usingSet && this.set.has(val)) {
    return true
  }

  for (let i = 0; i < this.nodes.length; i++) {
    if (isMatch(this.nodes[i], val)) {
      this.nodes.push(val)
      this.usingSet && this.set.add(val)
      return true
    }
  }
  return false
}

Graph.prototype.init = function (nodes) {
  let hit
  do {
    hit = false
    const remain = []
    while (nodes.length > 0) {
      const val = nodes.shift()
      if (this.tryInsert(val)) {
        hit = true
      } else {
        remain.push(val)
      }
    }
    nodes = remain
  } while (hit) return nodes
}

/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function (A) {

  // console.log(A.length, A[0].length);
  const gs = []

  let nodes = A
  while (nodes.length > 0) {
    const g = new Graph(nodes.shift())
    g.usingSet = A.length >= 1000
    const remain = []
    nodes = g.init(nodes, remain)
    gs.push(g)
  }

  // console.log(gs);
  return gs.length
};

var hasIntersection = function (set1, set2) {

  if (set2.size < set1.size) {
    [set1, set2] = [set2, set1]
  }
  for (const k of set1) {
    if (set2.has(k)) {
      return true
    }
  }
  return false
}

/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function (A) {

  const sets = Array(A.length).fill(0).map((e, idx) => new Set([idx]))
  for (let i = 0; i < A.length; i++) {
    const set = sets[i]
    for (let j = i + 1; j < A.length; j++) {
      if (isMatch(A[i], A[j])) {
        set.add(j)
      }
    }
  }
  // console.log(sets);

  do {
    hit = false
    for (let i = 0; i < sets.length; i++) {
      const set = sets[i]
      if (!set) {
        continue
      }
      const set2 = new Set(sets[i])
      for (const j of set) {
        if (i === j || !sets[j]) {
          continue
        }
        hit = true
        for (const k of sets[j]) {
          set2.add(k)
        }
        sets[j] = null
      }

      // console.log(set2);
      for (let j = i + 1; j < sets.length; j++) {
        if (!sets[j]) {
          continue
        }

        if (hasIntersection(set2, sets[j])) {
          hit = true
          for (const k of sets[j]) {
            set2.add(k)
          }
          sets[j] = null
        }
      }
      // console.log(set2);
      sets[i] = set2
    }

  } while (hit)
  // console.log(sets);
  return sets.filter(e => e).length
};

var assert = require('assert');
assert.equal(numSimilarGroups(["tars", "rats", "arts", "star"]), 2)
assert.equal(numSimilarGroups(["blw", "bwl", "wlb"]), 1)
assert.equal(numSimilarGroups(["blw", "lwb", "wbl"]), 3)
assert.equal(numSimilarGroups(require('./839_input').sample1), 11)
assert.equal(numSimilarGroups(require('./839_input').sample2), 1)
assert.equal(numSimilarGroups(require('./839_input').sample3), 1)
assert.equal(numSimilarGroups(require('./839_input').sample4), 2000)
// const sample5 = require('./839_input').sample4.slice(0, 200)
// assert.equal(numSimilarGroups(sample5.concat(sample5, sample5, sample5, sample5, sample5, sample5, sample5, sample5, sample5)), 200)
// assert.equal(numSimilarGroups(Array(2000).fill(Array(20000).fill('a').join(''))), 1)