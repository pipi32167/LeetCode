
var getObjectFromGraph = function (graph) {
  
  var result = {}
  graph
    .slice(1, graph.length - 1)
    .split('#')
    .forEach(function (elem) {
      if (elem === '') {
        return;
      }
      var nodes = elem.split(',')
      var label = nodes[0]
      var neighbors = nodes.slice(1)
      result[label] = new UndirectedGraphNode(label, neighbors)
    })
    
  for(var label in result) {
    var elem = result[label]
    for(var i = 0; i < elem.neighbors.length; i++) {
      elem.neighbors[i] = result[elem.neighbors[i]];
    }
  }
  return result[Object.keys(result)[0]] || {};
}

// console.log(getObjectFromGraph('{0,1,2#1,2#2,2}'));
// console.log(getObjectFromGraph('{}'));


var getGraphFromObjectImpl = function (obj, result) {
  
  if (!obj || !obj.label || result[obj.label]) {
    return
  }

  // console.log(obj);
  result[obj.label] = obj.neighbors.map(function (elem) {
    return elem.label
  })

  obj.neighbors.forEach(function (elem) {
    getGraphFromObjectImpl(elem, result)
  })
}

var getGraphFromObject = function (obj) {

  var result = {}
  getGraphFromObjectImpl(obj, result)
  var result2 = []
  for(var label in result) {
    var gNode = [label].concat(result[label]).join(',')
    result2.push(gNode)
  }
  return '{' + result2.join('#') + '}'
}

// console.log(getGraphFromObject(getObjectFromGraph('{0,1,2#1,2#2,2}')));
function UndirectedGraphNode(label, neighbors) {
  this.label = label;
  this.neighbors = neighbors;   // Array of UndirectedGraphNode
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  
  return getObjectFromGraph(getGraphFromObject(graph))
};

console.log(getGraphFromObject(cloneGraph(getObjectFromGraph('{0,1,2#1,2#2,2}'))));
console.log(cloneGraph(getObjectFromGraph('{}')));
// console.log(cloneGraph(getObjectFromGraph('{0,0,0}')));
var res = cloneGraph(getObjectFromGraph('{0,0,0}'))
// console.log(getObjectFromGraph('{0,0,0}'));
// res.neighbors.forEach(function  (elem) {
//   elem.neighbors.forEach(function (elem) {
//     elem.neighbors.forEach(function (elem) {
//       console.log(elem.label);
      
//     })
//   })
// })
