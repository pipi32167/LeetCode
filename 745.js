var SuffixDictNode = function (label) {
  this.label = label
  this.isWord = false
  this.children = []
  this.weight = -1
  this.minWeight = Math.pow(2, 31)
  this.maxWeight = -1
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

var add = function (node, word, i, weight) {
  
  if(i >= word.length) {
    return 
  }

  var res = node.children.find(elem => elem.label === word[i])
  if (!res) {
    res = new SuffixDictNode(word[i])
    node.children.push(res)
  }
  if (res.minWeight > weight) {
    res.minWeight = weight
  }
  if (res.maxWeight < weight) {
    res.maxWeight = weight
  }
  if (i === word.length - 1) {
    res.isWord = true
    res.weight = weight
  } else {
    add(res, word, i+1, weight)
  }
}

/**
 * 
 * @param {DictNode} node 
 * @param {string} word 
 * @param {number} i 
 */
var searchPrefix = function (node, prefix, i) {
  // console.log('search', node.label, prefix, prefix[i]);
  
  if (prefix.length === 0) {
    return node
  }

  if(i >= prefix.length) {
    return null
  }

  if (prefix[i] === '.') {
    if (i === prefix.length - 1) {
      return some(node.children, (elem) => elem.isprefix)
    }
    return some(node.children, (elem) => search(elem, prefix, i+1))
  } 
  var res = node.children.find(elem => elem.label === prefix[i])
  if (!res) {
    return null
  }
  if (i === prefix.length - 1) {
    return res
  } 
  return searchPrefix(res, prefix, i+1)
}

var endsWith = function (word, suffix) {
  if (suffix.length === 0) {
    return true
  }
  
  var len = suffix.length
  for(var i = 0; i < len; i++) {
    if (word[word.length-len+i] !== suffix[i]) {
      return false
    }
  }
  return true
}

// console.log(endsWith('abcd', 'cd'), true);
// console.log(endsWith('abcd', 'bcd'), true);
// console.log(endsWith('abcde', 'cda'), false);

var searchSuffix = function (node, word, suffix, result) {

  // console.log('searchSuffix', node, result.maxWeight, word, suffix);
  if (result.maxWeight >= node.maxWeight) {
    return
  }

  if (node.isWord) {
    if (result.maxWeight < node.weight && endsWith(word, suffix)) {
      result.maxWeight = node.weight
    }
  }
  
  for(var i = 0; i < node.children.length; i++) {
    var elem = node.children[i]
    word.push(elem.label)
    searchSuffix(elem, word, suffix, result)
    word.pop()
  }
}

/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    
  this.dict = new SuffixDict()
  for(var i = 0; i < words.length; i++) {
    add(this.dict, words[i], 0, i)
  }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
  
  var res = searchPrefix(this.dict, prefix, 0)
  if (!res) {
    return -1
  }
  var result = { maxWeight: -1 }
  searchSuffix(res, prefix.split(''), suffix, result)
  return result.maxWeight
};

var wf = new WordFilter(['apple', 'appll'])
console.log(wf.f('a', 'e'), 0);
console.log(wf.f('apple', 'apple'), 0);
console.log(wf.f('b', ''), -1);
console.log(wf.f('a', ''), 1);
console.log(wf.f('', 'e'), 0);
console.log(wf.f('', 'a'), -1);
console.log(wf.f('', ''), 1);