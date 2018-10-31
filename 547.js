var hasIntersection = function (e1, e2) {
  
  for (let i = 0; i < e1.length; i++) {
    if (e2.indexOf(e1[i]) >= 0) {
      return true
    }
  }
  return false
}

var makeUnion = function (e1, e2) {
  let result = []
  for (let i = 0; i < e1.length; i++) {
    if (result.indexOf(e1[i]) < 0) {
      result.push(e1[i])
    }
  }
  for (let i = 0; i < e2.length; i++) {
    if (result.indexOf(e2[i]) < 0) {
      result.push(e2[i])
    }
  }
  return result
}

var merge = function (circles) {
  
  let result, hit

  do {
    result = []
    let hits = new Array(circles.length).fill(false)
    for (let i = 0; i < circles.length; i++) {
      let e1 = circles[i].slice(0);
      if (hits[i]) {
        continue
      }
      for (let j = i+1; j < circles.length; j++) {
        const e2 = circles[j];
        if (hasIntersection(e1, e2)) {
          hits[j] = true
          e1 = makeUnion(e1, e2)
        }
      }
      result.push(e1)
    }
    hit = result.length !== circles.length
    circles = result
  } while(hit)

  return result
}

// console.log(merge([[1,2], [2,3]]).join() === [[1,2,3]].join());
// console.log(merge([[1,2], [3,4]]).join() === [[1,2], [3,4]].join());
// console.log(merge([[1,2], [2,3], [1,4]]).join() === [[1,2,3,4]].join());
// console.log(merge([[1,2], [2,3], [1,4], [5,6]]) , [[1,2,3,4],[5,6]]);


/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
  
  let m = M.length
  if (m === 0) {
    return 0
  }

  let circles = []
  for (let i = 0; i < m; i++) {
    for (let j = i; j < m; j++) {
      if (M[i][j]) {
        circles.push([i, j])
      }
    }
  }
  circles = merge(circles)
  // console.log(circles);
  
  return circles.length
};

var create = function (m, n, val) {
  return new Array(m).fill(0).map(() => new Array(n).fill(val))
}

var makeFriendships = function (m, ops) {
  var M = create(m, m, 0)
  for (let i = 0; i < m; i++) {
    M[i][i] = 1
  }
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    M[op[0]][op[1]] = 1
    M[op[1]][op[0]] = 1
  }
  return M
}

// console.log(makeFriendships(5, [[0,1],[0,4]]));

console.log(findCircleNum(makeFriendships(5, [[0,1],[0,4]])) === 3);
