var go = function (graph, idx, prefix, result) {
  if (idx === graph.length - 1) {
    result.push(prefix.slice(0))
    return
  }
  var targets = graph[idx]
  for(var i = 0; i < targets.length; i++) {
    prefix.push(targets[i])
    go(graph, targets[i], prefix, result)
    prefix.pop()
  }
}

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
  var result = []
  go(graph, 0, [0], result)
  return result
};

console.log(allPathsSourceTarget([[1,2], [3], [3], []]));
