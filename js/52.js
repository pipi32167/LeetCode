
var calcQCount = function (items) {
  var count = 0;
  for(var i = 0; i < items.length; i ++) {
    if (items[i] === 'Q') {
      count ++;
    }
  }
  return count;
}

var isValid = function (board) {
  // console.log(board);
  
  var n = board.length;
  //横线上是否合法
  for(var i = 0; i < n; i ++) {
    var count = 0;
    for(var j = 0; j < n; j ++) {
      if (board[i][j] === 'Q') {
        count ++;
      }
    }
    if (count > 1) {
      return false
    }
  }
  //竖线上是否合法
  for(var i = 0; i < n; i ++) {
    var count = 0;
    for(var j = 0; j < n; j ++) {
      if (board[j][i] === 'Q') {
        count ++;
      }
    }
    if (count > 1) {
      return false
    }
  }
  //对角线上是否合法
  var group1 = {}, group2 = {};
  for(var i = 0; i < n; i ++) {
    for(var j = 0; j < n; j++) {
      group1[i - j] = group1[i - j] || []
      group1[i - j].push(board[i][j]);

      group2[i + j] = group2[i + j] || []
      group2[i + j].push(board[i][j]);
    }
  }
  for(var k in group1) {
    var count = calcQCount(group1[k]);
    if (count > 1) {
      return false
    }
  }

  for(var k in group2) {
    var count = calcQCount(group2[k]);
    if (count > 1) {
      return false
    }
  }

  return true;
}

// var mkBoard = function (board) {
//   return board.map(function (elem) {
//     return elem.split('');
//   })
// }

// console.log(isValid(mkBoard(
// [".Q..",  // 解法 1
// "...Q",
// "Q...",
// "..Q."])))
// console.log(isValid(mkBoard(
// [ "Q...",  // 解法 1
//   "...Q",
//   "Q...",
//   "..Q."])))
// console.log(isValid(mkBoard(
// ["QQ..",  // 解法 1
//  "...Q",
//  "....",
//  "..Q."])))

//  console.log(isValid(mkBoard(
//   [".Q..",  // 解法 1
//    "..Q.",
//    "....",
//    "...."])))
// console.log(isValid(mkBoard(
// [ ".Q..",  // 解法 1
//   "Q...",
//   "....",
//   "...."])))

var fixBoardFormat = function (board) {
  return board.map(function (elem) {
    return elem.join('');
  })
}

var genBoards = function (nums, prefix, result) {
  if (nums.length === 0) {
    var board = genBoard(prefix);
    // if (isValid(board)) {
      result.push(fixBoardFormat(board));
    // }
    return
  }
  
  for(var i = 0; i < nums.length; i ++) {
    var newNums = nums.slice(0)
    newNums.splice(i, 1);
    var newPrefix = prefix.concat(nums[i]);
    var newBoard = genBoard(newPrefix);
    if (isValid(newBoard)) {
      genBoards(newNums, newPrefix, result);
    }
  }
}

var genBoard = function (nums) {
  
  var board = [];
  var n = nums.length;
  for(var i = 0; i < n; i ++) {
    board[i] = [];
    for(var j = 0; j < n; j ++) {
      if (j === nums[i]) {
        board[i][j] = 'Q'
      } else {
        board[i][j] = '.'
      }
    }
  }
  return board;
}

var range = function (begin, end) {
  var result = []
  for(var i = begin; i < end; i++) {
    result.push(i)
  }
  return result;
}

/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
  var boards = []
  genBoards(range(0, n), [], boards);
  return boards.length;
};

// console.log(totalNQueens(4));
// console.log(totalNQueens(8));
console.log(totalNQueens(9));