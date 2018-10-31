// var Timer = {
//   timers: {},
//   time: {}
// }

// Timer.start = function (name) {
//   this.timers[name] = Date.now()
// }

// Timer.end = function (name) {
//   this.time[name] = this.time[name] || 0
//   this.time[name] += Date.now() - this.timers[name]
// }

var TrieNode = function (val) {
  this.val = val
  this.next = []
  this.isWord = false
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  
  this.head = new TrieNode(null)
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  // Timer.start('insert')

  var i = 0, now = this.head
  while(i < word.length) {
    var hit = false
    for(var j = 0; j < now.next.length; j++) {
      if (now.next[j].val === word[i]) {
        now = now.next[j]
        hit = true
        break
      }
    }
    if (!hit) {
      var node = new TrieNode(word[i])
      now.next.push(node)
      now = node
    }
    i++
  }
  now.isWord = true
  // Timer.end('insert')
};

Trie.prototype.startsWithImpl = function (prefix) {
  
  var i = 0, now = this.head
  while(i < prefix.length && now) {
    var hit = false
    for(var j = 0; j < now.next.length; j++) {
      if (now.next[j].val === prefix[i]) {
        now = now.next[j]
        hit = true
        break
      }
    }
    if (hit) {
      i++
    } else {
      break
    }
  }
  if (i === prefix.length) {
    return now
  }
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  // Timer.start('search')
  var node = this.startsWithImpl(word)
  // Timer.end('search')
  return !!node && node.isWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

  var node = this.startsWithImpl(prefix)
  return !!node
};

var add = function (a, b) {
  return [a[0] + b[0], a[1] + b[1]]
}

var include = function (poses, pos) {

  // Timer.start('include')
  // return binarySearch(poses, pos) >= 0
  for(var i = 0; i < poses.length; i++) {
    var elem = poses[i]
    if (elem[0] === pos[0] && elem[1] === pos[1]) {
      // Timer.end('include')
      return true
    }
  }
  // Timer.end('include')
  return false
}

// console.log(include([[0,0],[0,1]], [0,1]), true);
// console.log(include([[0,0],[0,1]], [1,1]), false);


var check = function (board, i, j, word, i2, prefix) {
  // if (board[i] !== undefined && board[i][j] !== undefined) console.log(i, j, i2, board[i][j], word[i2], board[i][j] === word[i2]);
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
  if (i2 === word.length - 1) {
    return true
  }
  
  prefix = prefix.concat([[i, j]])
  // quickSort3(prefix, 0, prefix.length - 1)
  
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
  // Timer.start('exist')
  if (board.length === 0 || word.length === 0) {
    return false
  }
  
  var m = board.length
  var n = board[0].length
  var count = 0
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      // Timer.start('check')
      var res = check(board, i, j, word, 0, [])
      // Timer.end('check')
      if (res) {
        // Timer.end('exist')
        return true
      }
    }
  }
  // Timer.end('exist')
  return false
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  var result = [], trie = new Trie()
  for(var i = 0; i < words.length; i++) {    
    var word = words[i].split('').reverse().join('')
    // var word = words[i]

    var hit = false
    for(var j = word.length; j > 0; j--) {
      var word2 = word.substr(0, j)
      // console.log('search', word2, trie.search(word2));
      if (trie.search(word2)) {
        hit = true
        break
      }
    }
    // console.log({word, hit});
    if (hit) {
      continue
    }

    // console.log('exist', word, exist(board, word));
    if (exist(board, word)) {
      if (result.indexOf(word) < 0) {
        result.push(word)
      }
    } else {
      // console.log('insert', word);
      trie.insert(word)
      if (word.length > 1) {

        for(var j = word.length - 1; j > 0; j--) {
          var word2 = word.substr(0, j)
          if (exist(board, word2)) {
            break
          }
          // console.log('insert', word2);
          trie.insert(word2)
        }
      }
    }
  }
  return result.map(function (elem) {
    return elem.split('').reverse().join('')
  })
};

words = ["oath","pea","eat","rain"]
board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
console.log(findWords(board, words));
board = [["a"]]
words = ["a","a"]
console.log(findWords(board, words));
board = [
["a","b","c"],
["a","e","d"],
["a","f","g"]
]
words = ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"]
// words = ["eaabcdgfa"]
console.log(findWords(board, words));
var { board, words } = require('./212_input')
console.log(findWords(board, words));
// console.log(Timer.time);
