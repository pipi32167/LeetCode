var add = function (a, b) {
  return [a[0] + b[0], a[1] + b[1]]
}

var include = function (poses, pos) {
  
  for(var i = 0; i < poses.length; i++) {
    var elem = poses[i]
    if (elem[0] === pos[0] && elem[1] === pos[1]) {
      return true
    }
  }
  return false
}

// console.log(include([[0,0],[0,1]], [0,1]), true);
// console.log(include([[0,0],[0,1]], [1,1]), false);


var check = function (board, i, j, word, i2, prefix) {
  
  // console.log(i, j, i2, board[i][j], word[i2], board[i][j] !== word[i2]);
  if (i2 >= word.length) {
    return true
  }
  
  var m = board.length
  var n = board[0].length
  if (
    i < 0 || 
    i >= m || 
    j < 0 || 
    j >= n
  ) {
    return false
  }
  if (board[i][j] !== word[i2]) {
    return false
  } 
  prefix = prefix.concat([[i, j]])
  
  var nexts = [[0,1],[1,0],[0,-1],[-1,0]]
  for(var k = 0; k < nexts.length; k++) {
    var next = add([i,j], nexts[k])
    // console.log({ next });
    if (
      !include(prefix, next) &&
      check(board, next[0], next[1], word, i2+1, prefix)
    ) {
      return true
    }
  }
  return false
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length === 0 || word.length === 0) {
    return false
  }
  
  var m = board.length
  var n = board[0].length
  var count = 0
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if (check(board, i, j, word, 0, [])) {
        return true
      }
    }
  }
  return false
};

var board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exist(board, 'ABCCED'), true);
console.log(exist(board, 'SEE'), true);
console.log(exist(board, 'ABCB'), false);
var board = [["a"]]
console.log(exist(board, 'a'), true);