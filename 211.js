var SuffixDictNode = function (label) {
  this.label = label
  this.isWord = false
  this.children = []
}

var SuffixDict = function () {
  this.children = []
}

var some = function (coll, someFn) {
  for(var i = 0; i < coll.length; i++) {
    if (someFn(coll[i])) {
      return true
    }
  }
  return false
}

var add = function (node, word, i) {
  
  if(i >= word.length) {
    return 
  }

  var res = node.children.find(elem => elem.label === word[i])
  if (!res) {
    res = new SuffixDictNode(word[i])
    node.children.push(res)
  }
  if (i === word.length - 1) {
    res.isWord = true
  } else {
    add(res, word, i+1)
  }
}

var search = function (node, word, i) {
  // console.log('search', node.label, word, word[i]);
  if(i >= word.length) {
    return false
  }

  if (word[i] === '.') {
    if (i === word.length - 1) {
      return some(node.children, (elem) => elem.isWord)
    }
    return some(node.children, (elem) => search(elem, word, i+1))
  } 
  var res = node.children.find(elem => elem.label === word[i])
  if (!res) {
    return false
  }
  if (i === word.length - 1) {
    return res.isWord
  } 
  return search(res, word, i+1)
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  
  this.dict = new SuffixDict()
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  
  add(this.dict, word, 0)
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return search(this.dict, word, 0)
};

var dict = new WordDictionary()
dict.addWord("bad")
dict.addWord("dad")
dict.addWord("mad")
// console.log('%j', dict);

console.log(dict.search("pad"), false)
console.log(dict.search("bad"), true)
console.log(dict.search(".ad"), true)
console.log(dict.search("b.."), true)