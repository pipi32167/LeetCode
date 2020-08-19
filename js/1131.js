const { equal } = require("assert");

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
  const MAX = 2 ** 31 - 1, MIN = - (2 ** 32)
  const maxs = [MIN, MIN, MIN, MIN], mins = [MAX, MAX, MAX, MAX]
  for (let i = 0; i < arr1.length; i++) {
    let ret = arr1[i] + arr2[i] + i
    maxs[0] = Math.max(maxs[0], ret)
    mins[0] = Math.min(mins[0], ret)
    ret = arr1[i] + arr2[i] - i
    maxs[1] = Math.max(maxs[1], ret)
    mins[1] = Math.min(mins[1], ret)
    ret = arr1[i] - arr2[i] + i
    maxs[2] = Math.max(maxs[2], ret)
    mins[2] = Math.min(mins[2], ret)
    ret = arr1[i] - arr2[i] - i
    maxs[3] = Math.max(maxs[3], ret)
    mins[3] = Math.min(mins[3], ret)
  }

  return Math.max(
    maxs[0] - mins[0],
    maxs[1] - mins[1],
    maxs[2] - mins[2],
    maxs[3] - mins[3]
  )
};

var arr1 = [1,2,3,4], arr2 = [-1,4,5,6], ret = 13
equal(maxAbsValExpr(arr1, arr2), ret)
var arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4], ret = 20
equal(maxAbsValExpr(arr1, arr2), ret)
var arr1 = new Array(40000).fill(0), arr2 = new Array(40000).fill(1), ret = 39999
equal(maxAbsValExpr(arr1, arr2), ret)
var arr1 = [-9,0,-5,-7,10,6,1,-8,-4], arr2 = [7,0,-5,4,7,8,1,-7,6], ret = 35
equal(maxAbsValExpr(arr1, arr2), ret)