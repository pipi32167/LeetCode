var go = function (R, C, r0, c0, rbegin, rend, cbegin, cend, result) {

  let r = r0, c = c0
  
  //east
  for(; c <= cend; c++) {
    // console.log({ r, c });
    
    if (r >= 0 && r < R && c >= 0 && c < C) {
      result.push([r, c])
    }
  }
  c--, r++
  // console.log('east', {r, c, result})

  //south
  for(; r <= rend; r++) {
    if (r >= 0 && r < R && c >= 0 && c < C) {
      result.push([r, c])
    }
  }
  r--, c--
  // console.log('south', {r, c, result})

  //west
  for(; c >= cbegin; c--) {
    if (r >= 0 && r < R && c >= 0 && c < C) {
      result.push([r, c])
    }
  }
  c++, r--
  // console.log('west', {r, c, result})
  
  //north
  for(; r >= rbegin; r--) {
    if (r >= 0 && r < R && c >= 0 && c < C) {
      result.push([r, c])
    }
  }
  r++, c++
  // console.log('north', {r, c, result})

  return { r0: r, c0: c }
}

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
  
  let result = [], len = 0, res = { r0, c0 }
  while (true) {
    let rbegin = r0 - len, rend = r0 + len
    let cbegin = c0 - len, cend = c0 + len    
    if (rbegin < -1 && rend >= R + 1 && cbegin < -1 && cend >= C + 1) {
      break
    }
    // console.log({...res, rbegin, rend, cbegin, cend});
    res = go(R, C, res.r0, res.c0, rbegin, rend, cbegin, cend, result)
    len ++
  }
  return result
};

var R = 1, C = 4, r0 = 0, c0 = 0
console.log(spiralMatrixIII(R, C, r0, c0).join() === [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 0, 3 ] ].join());
var R = 5, C = 6, r0 = 1, c0 = 4
console.log(spiralMatrixIII(R, C, r0, c0).join() === [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]].join());
var R = 2, C = 1, r0 = 1, c0 = 0
console.log(spiralMatrixIII(R, C, r0, c0).join() === [[1,0],[0,0]].join());