// var assert = require('assert');

var buildMatrix = function (s, numRows) {

  if (s.length === 1) {
    return [s];
  }
  if (numRows === 1) {
    return s.split('');
  }

  var divideNum = numRows * 2 - 2;
  var pos = 0;
  var result = [];
  while(pos < s.length) {
    
    var row = pos % divideNum;
    var col = Math.floor(pos / divideNum) * (numRows - 1);   
    if (row >= numRows) {
      col = col + row % numRows + 1;
      row = numRows - row % numRows - 2;
    }

    // console.log(row, col, pos, s[pos]);
    result[row] = result[row] || [];
    // assert.ok(result[row][col] == null)
    result[row][col] = s[pos];
    pos++;
  }
  return result;
}

// console.log('%j', buildMatrix('PAYPALISHIRING', 3));

var readMatrix = function (matrix) {
  
  var res = '';
  for(var i = 0; i < matrix.length; i ++) {
    for(var j = 0; j < matrix[i].length; j ++) {
      if (matrix[i][j]) {
        res += matrix[i][j];
      }
    }
  }

  return res;
}

// console.log(readMatrix([
//   ['P',    , 'A',    , 'H',    , 'N',],
//   ['A', 'P', 'L', 'S', 'I', 'I', 'G',],
//   ['Y',    , 'I',    , 'R',]   
// ]));


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var matrix = buildMatrix(s, numRows);
  var result = readMatrix(matrix);
  return result;
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));
console.log(convert('AAAA', 1));
console.log(convert('AAAA', 2));

