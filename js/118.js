/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  
  if (numRows === 0) {
    return []
  }

  var result = [[1]]
  for(var i = 1; i < numRows; i++) {
    result[i] = new Array(i+1).fill(0)
    result[i][0] = 1
    result[i][i] = 1
    for(var j = 1; j < i; j++) {
      result[i][j] = result[i-1][j-1] + result[i-1][j]
    }
  }
  return result
};

console.log(generate(6));
