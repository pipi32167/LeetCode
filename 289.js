var isAlive = function (board, i, j) {
  return board[i][j] === 1;
}

var isValid = function (board, i, j) {
  var m = board.length;
  var n = board[0].length;
  return  i >= 0 && i < m && 
          j >= 0 && j < n;
}

var getAliveCountAround = function (board, i, j) {
  var m = board.length;
  var n = board[0].length;
  
  var poses = [
    [i-1, j-1],
    [i,   j-1],
    [i+1, j-1],
    [i-1, j],
    // [i,   j],
    [i+1, j],
    [i-1, j+1],
    [i,   j+1],
    [i+1, j+1],
  ];

  var count = 0;
  for (var k = 0; k < poses.length; k++) {
    var pos = poses[k]
    // console.log({ pos, isValid: isValid(board, pos[0], pos[1]), isAlive: isValid(board, pos[0], pos[1]) && isAlive(board, pos[0], pos[1]) });
    if (isValid(board, pos[0], pos[1]) && isAlive(board, pos[0], pos[1])) {
      count++;
    }
  }
  return count;
}

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    
  var m = board.length;
  var n = board[0].length;
  var changePoses = [];
  
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      var count = getAliveCountAround(board, i, j);
      // console.log({ i, j, isAlive: isAlive(board, i, j), count });
      
      if (isAlive(board, i, j)) {
        if (count < 2 || count > 3) {
          changePoses.push([i, j])
        }
      } else {
        if (count === 3) {
          changePoses.push([i, j])
        }
      }
    }
  }

  // console.log(changePoses);

  for(var i = 0; i < changePoses.length; i ++) {
    var pos = changePoses[i];
    board[pos[0]][pos[1]] = 1 - board[pos[0]][pos[1]];
  }

  // console.log(board);
};

gameOfLife([
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]);
