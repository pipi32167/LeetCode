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
  
  var node = this.startsWithImpl(word)
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


var trie = new Trie();
console.log(trie.startsWith("a"), false); // 返回 false
trie.insert("apple");
console.log(trie.search("apple"), true);   // 返回 true
console.log(trie.search("app"), false);     // 返回 false
console.log(trie.startsWith("app"), true); // 返回 true
trie.insert("app");   
console.log(trie.search("app"), true);     // 返回 true

var trie = new Trie();
trie.insert('hello')
console.log(trie.search('hell'), false)
console.log(trie.search('helloa'), false)
console.log(trie.search('hello'), true)
console.log(trie.startsWith('hell'), true)
console.log(trie.startsWith('helloa'), false)
console.log(trie.startsWith('hello'), true)
