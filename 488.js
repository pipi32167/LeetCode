var tryRemove = function (board, idx) {
  
  var c = board[idx]
  var count = 1
  for(var i = idx - 1; i >= 0; i--) {
    if (c !== board[i]) {
      break
    }
    count++
  }
  for(var j = idx + 1; j < board.length; j++) {
    if (c !== board[j]) {
      break
    }
    count++
  }
  if (count >= 3) {
    var continueToRemove = i >= 0 && j < board.length && board[i] === board[j]
    board.splice(i+1, count)
    if (continueToRemove) {
      return tryRemove(board, i)
    } 
  }
  return board
}

// console.log(tryRemove('AAAABBBCCC'.split(''), 0).join('') === 'BBBCCC');
// console.log(tryRemove('AAAABBBCCC'.split(''), 1).join('') === 'BBBCCC');
// console.log(tryRemove('AAAABBBCCC'.split(''), 3).join('') === 'BBBCCC');
// console.log(tryRemove('AAAABBBCCC'.split(''), 4).join('') === 'AAAACCC');
// console.log(tryRemove('AAAABBBCCC'.split(''), 6).join('') === 'AAAACCC');
// console.log(tryRemove('AAAABBBCCC'.split(''), 7).join('') === 'AAAABBB');
// console.log(tryRemove('AAAABBBCCC'.split(''), 9).join('') === 'AAAABBB');
// console.log(tryRemove('AAAABBBCC'.split(''), 8).join('') === 'AAAABBBCC');
// console.log(tryRemove('CBBBCC'.split(''), 1).join('') === '');
// console.log(tryRemove('CBBBC'.split(''), 1).join('') === 'CC');
// console.log(tryRemove('CBBC'.split(''), 1).join('') === 'CBBC');

/**
 * 判断hand的字符数量是否能够消除board
 * @param {string[]} board 
 * @param {string[]} hand 
 */
var canFinish = function (board, hand) {
  return true
}

var findFixLenPos = function (board, idx, len) {
  
  var nextPos = -1
  for(var i = idx; i < board.length; ) {
    var hit = false
    for(var j = i; j < board.length; j++) {
      if (board[j] === board[i]) {
        if ((j - i + 1) >= len) {
          hit = true
          nextPos = j
        }
      } else {
        break
      }
    }
    if (hit) {
      return nextPos
    } else {
      i = j
    }
  }
  return board.length
}

// console.log(findFixLenPos('AABBCC', 0, 2) === 1);
// console.log(findFixLenPos('AABBCC', 2, 2) === 3);
// console.log(findFixLenPos('AABBCC', 4, 2) === 5);
// console.log(findFixLenPos('AABBCC', 6, 2) === 6);
// console.log(findFixLenPos('AABBCC', 0, 3) === 6);
// console.log(findFixLenPos('ABC', 0, 2) === 3);
// console.log(findFixLenPos('ABC', 0, 1) === 0);
// console.log(findFixLenPos('ABC', 1, 1) === 1);
// console.log(findFixLenPos('ABC', 2, 1) === 2);
// console.log(findFixLenPos('ABC', 3, 1) === 3);
// console.log(findFixLenPos('AA', 0, 2) === 1);
// console.log(findFixLenPos('AA', 0, 1) === 1);


var go = function (board, hand, idx, result) {
  // console.log('go', board, hand);

  if (board.length === 0) {
    // console.log('end', idx);
    if (result.minStep > idx) {
      result.minStep = idx
    }
    return
  }
  
  if (idx >= result.minStep || !canFinish(board, hand)) {
    return
  }

  var nextPos = -1, len = 2
  while(len > 0) {
    var beforePos = nextPos + 1
    nextPos = findFixLenPos(board, nextPos + 1, len)
    // console.log('findFixLenPos', {board, beforePos, nextPos, len});
    
    if (nextPos >= board.length) {
      len--
      nextPos = -1
      continue
    }
    var handPos = hand.indexOf(board[nextPos])
    if (handPos >= 0) {
      var newBoard = board.slice(0, nextPos).concat([hand[handPos]]).concat(board.slice(nextPos))
      newBoard = tryRemove(newBoard, nextPos)
      var newHand = hand.slice(0)
      newHand.splice(handPos, 1)
      go(newBoard, newHand, idx + 1, result)     
    }
  }
}

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {

  board = board.split('')
  hand = hand.split('')

  var MAX = Math.pow(2, 31)
  var result = {
    minStep: MAX
  }

  go(board, hand, 0, result)
    
  return result.minStep === MAX ? -1 : result.minStep
};

console.log(findMinStep("R", "RR" ) === 2);
console.log(findMinStep("WRRBBW", "RB") === -1);
console.log(findMinStep("WWRRBBWW", "WRBRW" ) === 2);
console.log(findMinStep("WWRR", "WR" ) === 2);
console.log(findMinStep("WWRRGGRRWW", "WRBRWG" ) === 1); // 金字塔
console.log(findMinStep("WWRRGGRRWWRRGGRRWW", "WRBRWGG" ) === 1); // 双金字塔
