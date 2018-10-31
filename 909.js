var getPos = function (N, idx) {

  var i = Math.floor(idx / N)
  var j = idx % N
  return {
    i,
    j
  }
}

var go = function (board, idx, move, prefix, result) {

  var N = board.length
  if (idx >= N * N - 1) {
    if (idx === N * N - 1 && result.minMove > move) {
      // console.log('end');
      // console.log(prefix);
      // console.log(prefix.map(idx => {
      //   var { i, j } = getPos(N, idx)
      //   // console.log({ idx, i, j });
      //   return board[i][j]
      // }));
      result.minMove = move
    }
    return
  }

  if (result.minMove < move) {
    return
  }

  var hit = false
  for (var i = 6; i >= 1; i--) {
    var nextIdx = idx + i
    if (nextIdx >= N * N) {
      continue
    }
    var nextPos = getPos(N, nextIdx)
    var val = board[nextPos.i][nextPos.j]
    if (val !== -1) {
      nextIdx = val - 1
    } else if (hit) {
      // continue
    }
    hit = true
    if (prefix.indexOf(nextIdx) < 0) {
      prefix.push(nextIdx)
      go(board, nextIdx, move + 1, prefix, result)
      prefix.pop()
    }
  }
}

// /**
//  * @param {number[][]} board
//  * @return {number}
//  */
// var snakesAndLadders = function (board) {
//   board = board.reverse()
//   var N = board.length
//   for (var i = 0; i < N; i++) {
//     if (i % 2 === 1) {
//       board[i] = board[i].reverse()
//     }
//   }
//   // console.log(board);
//   var result = {
//     minMove: N * N + 1
//   }
//   go(board, 0, 0, [], result)
//   return result.minMove === N * N + 1 ? -1 : result.minMove
// };

var getMinMove = function (board, idx, prefix, cache = []) {
  
  // console.log({ idx });
  if (cache[idx] !== undefined) {
    return cache[idx]
  }

  var N = board.length
  var maxIdx = N * N - 1
  if (idx >= maxIdx) {
    cache[idx] = 0
    return 0
  }

  var minMove = N * N
  for (var i = 6; i > 0; i--) {
    var nextIdx = idx + i
    // console.log({ idx, i, nextIdx, res: nextIdx > maxIdx });
    if (nextIdx > maxIdx) {
      continue
    }
    // var oldNxIdx = nextIdx
    var nextPos = getPos(N, nextIdx)
    var val = board[nextPos.i][nextPos.j]
    if (val !== -1) {
      nextIdx = val - 1
    }
    if (prefix.indexOf(nextIdx) < 0) {
      prefix.push(nextIdx)
      minMove = Math.min(minMove, 1 + getMinMove(board, nextIdx, prefix, cache))
      prefix.pop()
      // if (val !== -1) {
      //   cache[oldNxIdx] = cache[nextIdx]
      // }
    }
  }
  cache[idx] = minMove
  return minMove
}

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  board = board.reverse()
  var N = board.length
  for (var i = 0; i < N; i++) {
    if (i % 2 === 1) {
      board[i] = board[i].reverse()
    }
  }
  // console.log(board);
  var cache = {}
  var minMove = getMinMove(board, 0, [], cache)
  // console.log(cache);
  
  return minMove >= N * N ? -1 : minMove
};

var board = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1]
]
console.log(snakesAndLadders(board), 4);
var board = [
  [-1, -1],
  [-1, 3]
]
console.log(snakesAndLadders(board), 1);
var board = [
  [-1, 4, -1],
  [6, 2, 6],
  [-1, 3, -1]
]
// 7 8 9
// 6 5 4
// 1 2 3 
console.log(snakesAndLadders(board), 2);
var board = [
  [1, 1, -1],
  [1, 1, 1],
  [-1, 1, 1]
]
console.log(snakesAndLadders(board), -1);
var board = [
  [-1, -1, 30, 14, 15, -1],
  [23, 9, -1, -1, -1, 9],
  [12, 5, 7, 24, -1, 30],
  [10, -1, -1, -1, 25, 17],
  [32, -1, 28, -1, -1, 32],
  [-1, -1, 23, -1, 13, 19]
]

// 36 35 34 33 32 31
// 25 26 27 28 29 30
// 24 23 22 21 20 19
// 13 14 15 16 17 18
// 12 11 10 09 08 07
// 01 02 03 04 05 06

//3
// 1->3>>23>>5>>13>>10>>28,28->31,31->36
// 1->5>>13>>10>>28,28->31,31->36
// 1->6>>19>>30>>9,9->
console.log(snakesAndLadders(board), 2);
var board = [
  [-1, -1, 27, 13, -1, 25, -1],
  [-1, -1, -1, -1, -1, -1, -1],
  [44, -1, 8, -1, -1, 2, -1],
  [-1, 30, -1, -1, -1, -1, -1],
  [3, -1, 20, -1, 46, 6, -1],
  [-1, -1, -1, -1, -1, -1, 29],
  [-1, 29, 21, 33, -1, -1, -1]
]
// [ [ 43, 44, 45, 46, 47, 48, 49 ],
//   [ 42, 41, 40, 39, 38, 37, 36 ],
//   [ 29, 30, 31, 32, 33, 34, 35 ],
//   [ 28, 27, 26, 25, 24, 23, 22 ],
//   [ 15, 16, 17, 18, 19, 20, 21 ],
//   [ 14, 13, 12, 11, 10,  9,  8 ],
//   [  1,  2,  3,  4,  5,  6,  7 ] ]
console.log(snakesAndLadders(board), 4);
var board = [
  [-1, -1, 128, -1, -1, -1, 136, -1, -1, -1, 109, -1],
  [-1, -1, -1, -1, -1, 103, -1, -1, 56, 10, -1, -1],
  [-1, -1, -1, -1, -1, -1, 116, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, 50, -1, 67, 107],
  [-1, 40, -1, -1, -1, 20, -1, 59, -1, 67, -1, -1],
  [-1, -1, -1, -1, -1, -1, 112, 133, 111, -1, -1, -1],
  [-1, -1, 112, -1, 74, -1, -1, -1, -1, -1, -1, -1],
  [23, -1, 115, -1, 129, 126, -1, -1, -1, -1, -1, -1],
  [106, 143, 81, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, 26, 102, 1, 29],
  [26, -1, -1, -1, -1, -1, -1, -1, 27, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
]
console.log(snakesAndLadders(board), 9);
var board = [
  [-1, 10, -1, 15, -1],
  [-1, -1, 18, 2, 20],
  [-1, -1, 12, -1, -1],
  [2, 4, 11, 18, 8],
  [-1, -1, -1, -1, -1]
]
console.log(snakesAndLadders(board), 3);
var board = [
  [-1, 46, -1, 73, 54, 8, 36, -1, -1],
  [-1, -1, 10, -1, 15, -1, 15, -1, -1],
  [-1, 68, -1, -1, 19, -1, -1, 71, -1],
  [-1, -1, -1, -1, 5, -1, 10, -1, 53],
  [-1, -1, -1, -1, 4, 50, -1, -1, 18],
  [-1, -1, 41, -1, 48, 24, -1, 45, -1],
  [43, -1, 18, -1, -1, 57, 55, 29, 20],
  [60, -1, -1, -1, -1, 52, -1, 26, -1],
  [-1, -1, -1, -1, 65, -1, -1, -1, -1]
]
// [ [ 73, 74, 75, 76, 77, 78, 79, 80, 81 ],
//   [ 72, 71, 70, 69, 68, 67, 66, 65, 64 ],
//   [ 55, 56, 57, 58, 59, 60, 61, 62, 63 ],
//   [ 54, 53, 52, 51, 50, 49, 48, 47, 46 ],
//   [ 37, 38, 39, 40, 41, 42, 43, 44, 45 ],
//   [ 36, 35, 34, 33, 32, 31, 30, 29, 28 ],
//   [ 19, 20, 21, 22, 23, 24, 25, 26, 27 ],
//   [ 18, 17, 16, 15, 14, 13, 12, 11, 10 ],
//   [  1,  2,  3,  4,  5,  6,  7,  8,  9 ] ]
console.log(snakesAndLadders(board), 4);

// var genNo = function (N) {
//   var result = [], idx = 1
//   for(var i = 0; i < N; i++) {
//     var res = []
//     for(var j = 0; j < N; j++) {
//       if (i % 2 === 0) {
//         res.push(idx)
//       } else {
//         res.unshift(idx)
//       }
//       idx ++
//     }
//     result.unshift(res)
//   }
//   return result
// }
// console.log(genNo(9));