var calcIncomingCount = function (node, edges) {
  var count = 0
  for(var i = 0; i < edges.length; i++) {
    if (edges[i][0] === node) {
      count++
    }
  }
  return count
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function(numCourses, prerequisites) {

  var result = []
  var noIncomingSet = []
  for(var i = 0; i < numCourses; i++) {
    if (calcIncomingCount(i, prerequisites) === 0) {
      noIncomingSet.push(i)
    }
  }
  while (noIncomingSet.length > 0) {
    // console.log({ noIncomingSet });
    var node = noIncomingSet.shift()
    result.push(node)
    var outNodes = []
    var i = 0
    while (i < prerequisites.length) {
      if (prerequisites[i][1] === node) {
        outNodes.push(prerequisites[i][0])
        prerequisites.splice(i, 1)
        continue
      }
      i++
    }
    // console.log({ outNodes });
    for(var i = 0; i < outNodes.length; i++) {
      if (calcIncomingCount(outNodes[i], prerequisites) === 0) {
        noIncomingSet.push(outNodes[i])
      }
    }
  }

  // console.log(result);
  return result.length === numCourses ? result : []
};

// [ in, out ]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]), [0,1,2,3]);
console.log(findOrder(2, [[1,0], [0,1]]), []);
console.log(findOrder(3, [[1,0],[1,2],[0,1]]), []);
console.log(findOrder(3, [[0,2],[1,2],[2,0]]), []);
console.log(findOrder(4, [[0,2],[1,2],[2,3],[3,0]]), []);
