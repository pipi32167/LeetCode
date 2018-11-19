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

var clone = function (board) {
  var result = [];

  for(var i = 0; i < 9; i++) {
    result[i] = result[i] || []
    for(var j = 0; j < 9; j++) {
      result[i][j] = board[i][j];
    }
  }
  return result;
}

var count = 0

// var solve = function (solution) {
//   // console.log('solve', level, solution, newValue);
//   count++
//   if (count % 1000 === 0) {
//     console.log(count);
//   }
  
//   var n = 9;
//   var isSolve = true;
//   for(var i = 0; i < n; i ++ ) {
//     for(var j = 0; j < n; j ++ ) {
//       if (solution[i][j] !== '.') {
//         continue;
//       }

//       isSolve = false;
      
//       for(var k = 1; k <= 9; k ++) {
//         var newSolution = clone(solution);
//         newSolution[i][j] = k.toString();
//         if (isValidSudoku(newSolution)) {
//           var res = solve(newSolution);
//           if (res.isSolve) {
//             return res;
//           }
//         }
//       }
//     }
//   }
//   return { isSolve, solution };
// }

Object.values = function (o) {
  return Object.keys(o).map(function (k) {
    return o[k];
  })
}

var getSolution = function (board) {
  // console.log('getSolution', board);
  
  var result = {};
  for(var i = 0; i < 9; i++) {
    for(var j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        continue;
      }
      for(var k = 1; k <= 9; k++) {
        var newBoard = clone(board);
        newBoard[i][j] = k.toString();
        if (isValidSudoku(newBoard)) {
          var key = i + ',' + j
          result[key] = result[key] || {
            x: i, 
            y: j,
            v: []
          }
          result[key].v.push(k.toString());
        }
      }
    }
  }

  result = Object.values(result);
  var newBoard = clone(board);
  var isFill = false;
  for(var i = 0; i < result.length; i++) {
    var tmp = result[i];
    if (tmp.v.length === 1) {
      newBoard[tmp.x][tmp.y] = tmp.v[0];
      isFill = true;
    }
  }
  if (isFill) {
    return getSolution(newBoard);
  }
  // console.log(result, Object.values(result));
  
  return {  
    board,
    solution: result,
  };
}

var isSolved = function (board) {
  
  for(var i = 0; i < 9; i++) {
    for(var j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        return false;
      }
    }
  }
  return true;
}


var solve = function (board) {
  
  var res = getSolution(board);
  console.log(res.solution);
  
  board = res.board;
  var solution = res.solution;
  
  if (solution.length === 0 && isSolved(board)) {
    // console.log(board);
    return board;
  }

  for(var i = 0; i < solution.length; i++) {
    var tmp = solution[i]
    for(var j = 0; j < tmp.v.length; j++) {
      var newBoard = clone(board);
      newBoard[tmp.x][tmp.y] = tmp.v[j].toString();
      var res = solve(newBoard);
      if(res) {
        // console.log(res);
        return res;
      }
    }
  }

  return false;
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  var res = solve(board)
  if (res) {
    for(var i = 0; i < 9; i++) {
      for(var j = 0; j < 9; j++) {
        board[i][j] = res[i][j];
      }
    }
  }
  // console.log(board);
  
};


// console.log(solveSudoku([
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]));

console.log(solveSudoku([
  [".",".",".","2",".",".",".","6","3"],
  ["3",".",".",".",".","5","4",".","1"],
  [".",".","1",".",".","3","9","8","."],
  [".",".",".",".",".",".",".","9","."],
  [".",".",".","5","3","8",".",".","."],
  [".","3",".",".",".",".",".",".","."],
  [".","2","6","3",".",".","5",".","."],
  ["5",".","3","7",".",".",".",".","8"],
  ["4","7",".",".",".","1",".",".","."]]
));
