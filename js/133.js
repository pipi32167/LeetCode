/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  if (!graph) {
    return null
  }

  const map = new Map
  let nodes = [graph]
  const result = []
  while (nodes.length > 0) {
    const node = nodes.shift()
    if (map.has(node.label)) {
      continue
    }
    const gnode = new UndirectedGraphNode(node.label)
    map.set(gnode.label, gnode)
    gnode.neighbors = node.neighbors.map(e => e.label)
    result.push(gnode)
    nodes = nodes.concat(node.neighbors)
  }
  for (let i = 0; i < result.length; i++) {
    const gnode = result[i];
    for (let j = 0; j < gnode.neighbors.length; j++) {
      gnode.neighbors[j] = map.get(gnode.neighbors[j]);
    }
  }
  // console.log(result);
  return result[0]
};

function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = []; // Array of UndirectedGraphNode
}

var assert = require('assert');
assert.deepEqual(cloneGraph(null), null)
var gnode = new UndirectedGraphNode(0)
gnode.neighbors = [gnode, gnode]
assert.deepEqual(cloneGraph(gnode), null)