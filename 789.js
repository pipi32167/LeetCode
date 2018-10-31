/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    
  var myDistance = Math.abs(target[0]) + Math.abs(target[1])
  var ghostsDistance = ghosts.map(ghost => {
    return Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1])
  })

  // console.log(myDistance, ghostsDistance);
  var hit = false
  for(var i = 0; i < ghostsDistance.length; i++) {
    var res = ghostsDistance[i] - myDistance
    if (res > 0) {
      continue
    }
    hit = true
  }

  if (!hit) {
    return true
  }

  return false
};

// ghosts = [[1, 0], [0, 3]]
// target = [0, 1]
// console.log(escapeGhosts(ghosts, target), true);
// ghosts = [[1, 0]]
// target = [2, 0]
// console.log(escapeGhosts(ghosts, target), false);
// ghosts = [[2, 0]]
// target = [1, 0]
// console.log(escapeGhosts(ghosts, target), false);
ghosts = [[1,9],[2,-5],[3,8],[9,8],[-1,3]]
target = [8,-10]
console.log(escapeGhosts(ghosts, target), false);