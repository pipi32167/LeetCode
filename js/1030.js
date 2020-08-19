const { deepEqual } = require("assert");

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {

  let ret = []
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      ret.push([i, j]);
    }
  }
  // console.log(ret);
  ret.sort((a, b) => {
    let ret = (Math.abs(a[0] - r0) + Math.abs(a[1] - c0)) - 
              (Math.abs(b[0] - r0) + Math.abs(b[1] - c0)) 
    return ret
      
  })
  // console.log(ret);
  return ret
};

var R = 1, C = 2, r0 = 0, c0 = 0
var ret = [[0,0],[0,1]]
deepEqual(allCellsDistOrder(R, C, r0, c0), ret)
var R = R = 2, C = 2, r0 = 0, c0 = 1
var ret = [[0,1],[0,0],[1,1],[1,0]]
deepEqual(allCellsDistOrder(R, C, r0, c0), ret)
var R = 2, C = 3, r0 = 1, c0 = 2
var ret = [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
deepEqual(allCellsDistOrder(R, C, r0, c0), ret)