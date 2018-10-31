var check = function (result, k, numCourses, lv) {

  // console.log('check', {result, k, numCourses, lv});
  if (result[k] === undefined) {
    return true;
  }
  if (lv >= numCourses) {
    return false;
  }

  for(var i = 0; i < result[k].length; i++) {
    if (!check(result, result[k][i], numCourses, lv+1)) {
      return false
    }
  }

  return true
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  var result = {}

  for(var i = 0; i < prerequisites.length; i ++) {
    var elem = prerequisites[i];
    result[elem[0]] = result[elem[0]] || []
    result[elem[0]].push(elem[1]);
  }

  for(var k in result) {
    if (!check(result, k, numCourses, 0)) {
      return false;
    }
  }

  return true;
};

console.log(canFinish(2, [[1,0]]));
console.log(canFinish(2, [[1,0], [0,1]]));
console.log(canFinish(3, [[1,0],[1,2],[0,1]]));
