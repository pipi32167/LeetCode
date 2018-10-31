var create = function (m, n, val) {
  return new Array(m).fill(0).map(() => new Array(n).fill(val))
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    
  if (ops.length === 0) {
    return m * n
  }
  let matrix = create(m, n, 0)
  // console.log(matrix);
  
  let max = 0, count = 0
  for (let k = 0; k < ops.length; k++) {
    const op = ops[k];
    for (let i = 0; i < op[0]; i++) {
      for (let j = 0; j < op[1]; j++) {
        matrix[i][j]++
        if (max < matrix[i][j]) {
          max = matrix[i][j]
          count = 1
        } else if (max === matrix[i][j]) {
          count ++
        }
      }
    } 
  }

  // console.log(matrix, count);
  return count
};


/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  var opRes = [m, n]
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    opRes[0] = Math.min(opRes[0], op[0])
    opRes[1] = Math.min(opRes[1], op[1])
  }
  // console.log(matrix, count);
  return opRes[0] * opRes[1]
};


console.log(maxCount(3, 3, [[2,2],[3,3]]) === 4);
console.log(maxCount(3, 3, []) === 9);
console.log(maxCount(40000, 40000, []) === 40000 * 40000);
console.log(maxCount(39999, 39999, [[19999,19999]]) === 19999 * 19999);
