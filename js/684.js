var GraphNode = function (val) {
  this.val = val
  this.neighbors = []
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
  nodes[0].neighbors.push(nodes[1])
  nodes[1].neighbors.push(nodes[0])
}

var isConnected2 = function (node1, node2) {
  var cache = {}
  var nodes = [node1]
  while (nodes.length > 0) {
    var node = nodes.shift()
    if (node.val === node2.val) {
      return true
    }
    cache[node.val] = true
    for(var i = 0; i < node.neighbors.length; i++) {
      var elem = node.neighbors[i]
      if (!cache[elem.val]) {
        nodes.push(elem)
      }
    }
  }
  return false
}

var isConnected = function (graph, edge) {
  var nodes = []
  for(var i = 0; i < edge.length; i++) {
    var node = search(graph, edge[i]) 
    if (!node) {
      return false
    }
    nodes.push(node)
  }
  return isConnected2(nodes[0], nodes[1])
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    
  var graph = new Graph()
  result = []
  for(var i = 0; i < edges.length; i++) {
    var edge = edges[i]
    if (!isConnected(graph, edge)) {
      insert(graph, edge)
    } else {
      result = edge
    }
  }
  
  return result
};


var edges = [[1,2], [1,3], [2,3]]
console.log(findRedundantConnection(edges), [2,3]);
var edges = [[1,2], [1,3], [1,4], [2,4], [1,5], [2,5]]
console.log(findRedundantConnection(edges), [2,5]);
var edges = [[1,2], [1,3]]
console.log(findRedundantConnection(edges), []);
var edges = [[3,4],[1,2],[2,4],[3,5],[2,5]]
console.log(findRedundantConnection(edges), [2,5]);