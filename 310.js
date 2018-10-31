var buildTree = function (n, edges) {
  
  var nodes = new Array(n).fill(0).map(function (elem, idx) {
    return {
      val: idx,
      children: []
    }
  })

  for(var i = 0; i < nodes.length; i++) {

    var node = nodes[i]
    for(var j = 0; j < edges.length; j++) {
      var edge = edges[j]
      if (edge[0] === node.val) {
        node.children.push(nodes[edge[1]])
      } else if (edge[1] === node.val) {
        node.children.push(nodes[edge[0]])
      }
    }
  }
  return nodes
}

var cache = {}
var calcTreeHeight = function (node, parentVal) {
  var key = [node.val, parentVal].join(',')
  if (cache[key]) {
    return cache[key]
  }
  
  var children = node.children.filter(function (elem) {
    return elem.val !== parentVal
  })
  if (children.length === 0) {
    cache[key] = 1
    return 1
  }
  var height = 1 + Math.max.apply(null, children.map(function (elem) {
    return calcTreeHeight(elem, node.val)
  }))
  cache[key] = height
  return height
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {

  cache = {}
  var minHeight = n + 1, result = []
  var nodes = buildTree(n, edges)
  for(var i = 0; i < nodes.length; i++) {
    var node = nodes[i]
    var height = calcTreeHeight(node)
    // console.log({tree, tmp});
    if (minHeight > height) {
      minHeight = height
      result = [node.val]
    } else if (minHeight === height) {
      result.push(node.val)
    }
  }

  // console.log({ minHeight });
  return result
};

var n = 0, edges = []
console.log(findMinHeightTrees(n, edges), []);

var n = 2, edges = [[0,1]]
console.log(findMinHeightTrees(n, edges), [0,1]);

var n = 4, edges = [[1, 0], [1, 2], [1, 3]]
console.log(findMinHeightTrees(n, edges), [1]);

var n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
console.log(findMinHeightTrees(n, edges), [3,4]);

var { n, edges } = require('./310_input')
console.log(findMinHeightTrees(n, edges), [3,4]);