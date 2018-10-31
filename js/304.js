/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix
  this.m = matrix.length
  this.n = this.m > 0 ? matrix[0].length : 0
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  
  var iStart = Math.max(0, row1), iEnd = Math.min(row2, this.m-1)
  var jStart = Math.max(0, col1), jEnd = Math.min(col2, this.n-1)
  var res = 0
  for(var i = iStart; i <= iEnd; i++) {
    for(var j = jStart; j <= jEnd; j++) {
      res += this.matrix[i][j]
    }
  }
  return res
};

var matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]
var obj = new NumMatrix(matrix)
console.log(obj.sumRegion(2, 1, 4, 3), 8)
console.log(obj.sumRegion(1, 1, 2, 2), 11)
console.log(obj.sumRegion(1, 2, 2, 4), 12)

var obj = new NumMatrix([[]])
console.log(obj.sumRegion(2, 1, 4, 3), 8)
console.log(obj.sumRegion(1, 1, 2, 2), 11)
console.log(obj.sumRegion(1, 2, 2, 4), 12)

var params = require('./304_input')
var obj = new NumMatrix(params[0])
console.log(params.length);
console.log(params[107]);
// console.log(obj.sumRegion.apply(obj, params[107]));
// for(var i = 100; i < 108; i++) {
//   console.log(params[i]);
//   console.log(obj.sumRegion.apply(obj, params[i]));
  
// }