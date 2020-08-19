const { ok } = require("assert");

var isRowValid = function (board, row) {
  
  for(var i = 0; i < 9; i++) {
    var item = board[row][i];
    if (item === '.') {
      continue;
    }
    for(var j = i + 1; j < 9; j++) {
      if (item === board[row][j]) {
        return false;
      }
    }
  }
  return true;
}

var isColValid = function (board, col) {
  
  for(var i = 0; i < 9; i++) {
    var item = board[i][col];
    if (item === '.') {
      continue;
    }
    for(var j = i + 1; j < 9; j++) {
      if (item === board[j][col]) {
        return false;
      }
    }
  }
  return true;
}

var getSquareRowAndCol = function (square, i) {
  var baseRow = Math.floor(square / 3) * 3;
  var baseCol = square % 3 * 3;

  var row = Math.floor(i / 3);
  var col = i % 3;
  return {
    row: baseRow + row,
    col: baseCol + col,
  }
}

// console.log(getSquareRowAndCol(0, 0));
// console.log(getSquareRowAndCol(0, 1));
// console.log(getSquareRowAndCol(0, 2));
// console.log(getSquareRowAndCol(0, 3));
// console.log(getSquareRowAndCol(1, 0));
// console.log(getSquareRowAndCol(1, 3));
// console.log(getSquareRowAndCol(8, 8));
// console.log(getSquareRowAndCol(8, 8));


var isSquareValid = function (board, square) {
  
  for(var i = 0; i < 9; i++) {
    var idx = getSquareRowAndCol(square, i)
    var item = board[idx.row][idx.col];
    if (item === '.') {
      continue;
    }
    for(var j = i + 1; j < 9; j++) {
      var idx2 = getSquareRowAndCol(square, j)
      if (item === board[idx2.row][idx2.col]) {
        return false;
      }
    }
  }
  return true;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  for(var i = 0; i < 9; i++) {
    if (!isRowValid(board, i) || 
        !isColValid(board, i) || 
        !isSquareValid(board, i)) {
      return false
    }
  }
  return true;
};

ok(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]));

ok(!isValidSudoku([
  ["5","3",".",".","7",".",".","5","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]));

ok(!isValidSudoku([
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["5",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]));

ok(!isValidSudoku([
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","5",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]));