const { deepEqual } = require("assert");

function countBits (num) {
  let cnt = 0
  while(num > 0) {
    if (num & 1) cnt++
    num >>= 1
  }
  return cnt
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

  return arr.sort((a, b) => {
    const ret = countBits(a) - countBits(b)
    if (ret !== 0) return ret
    return a - b
  })
};

var arr = [0,1,2,3,4,5,6,7,8], ret = [0,1,2,4,8,3,5,6,7]
deepEqual(sortByBits(arr), ret)
var arr = [1024,512,256,128,64,32,16,8,4,2,1], ret = [1,2,4,8,16,32,64,128,256,512,1024]
deepEqual(sortByBits(arr), ret)