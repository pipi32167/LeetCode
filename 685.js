var GraphNode = function (val) {
  this.val = val
  this.children = []
  this.parent = null
}

var Graph = function () {
  this.nodes = []
}

/**
 * @param {Graph} graph 
 * @param {number} val 
 * @return {GraphNode}
 */
var search = function (graph, val) {
  
  for(var i = 0; i < graph.nodes.length; i++) {
    var node = graph.nodes[i]
    if (node.val === val) {
      return node
    }
  }
}

var insert = function (graph, edge) {
  
  var nodes = []
  for(var i = 0; i < edge.length; i++) {
    var node = search(graph, edge[i])
    if (!node) {
      node = new GraphNode(edge[i])
      graph.nodes.push(node)
    }
    nodes.push(node)
  }
  nodes[0].children.push(nodes[1])
  nodes[1].parent = nodes[0]
}

var isValid = function (edges, removeEdgeIdx) {
  var graph = new Graph()
  for(var i = 0; i < edges.length; i++) {
    if (i !== removeEdgeIdx) {
      insert(graph, edges[i])
    }
  }

  var root = graph.nodes.filter(elem => !elem.parent)
  if (root.length !== 1) {
    return false
  }
  var nodeCount = graph.nodes.length
  root = root[0]
  var nodes = [root]
  var iterated = {}
  while(nodes.length > 0) {
    var node = nodes.shift()
    if (iterated[node.val]) {
      return false
    }
    
    iterated[node.val] = true
    nodes = nodes.concat(node.children)
  }
  // console.log(Object.keys(iterated).length, nodeCount);
  
  return Object.keys(iterated).length === nodeCount
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
    
  var invalidEdgeIdx = []
  for(var i = 0; i < edges.length; i++) {
    for(var j = i+1; j < edges.length; j++) {
      if (edges[i][1] === edges[j][1]) {
        if (invalidEdgeIdx.indexOf(i) < 0) {
          invalidEdgeIdx.push(i)
        }
        if (invalidEdgeIdx.indexOf(j) < 0) {
          invalidEdgeIdx.push(j)
        }
      }
    }
  }

  for(var i = invalidEdgeIdx.length - 1; i >= 0; i--) {
    if (isValid(edges, invalidEdgeIdx[i])) {
      return edges[invalidEdgeIdx[i]]
    }
  }

  for(var i = edges.length - 1; i >= 0; i--) {
    if (isValid(edges, i)) {
      return edges[i]
    }
  }

  return []
};

var edges = [[1,2], [1,3], [2,3]]
console.log(findRedundantDirectedConnection(edges), [2,3]);
var edges = [[1,2], [2,3], [3,4], [4,1], [1,5]]
console.log(findRedundantDirectedConnection(edges), [4,1]);
var edges = [[2,1],[3,1],[4,2],[1,4]]
console.log(findRedundantDirectedConnection(edges), [2,1]);
var edges = [[4,2],[1,5],[5,2],[5,3],[2,4]]
console.log(findRedundantDirectedConnection(edges), [4,2]);