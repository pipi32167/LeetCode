const COUNT = {
  "isMatch": 0,
  "findWordNode": 0,
}

function isMatch(big, small, i, j) {
  COUNT.isMatch ++
  // console.log(big, small, i, j);
  for (let k = 0; j + k < small.length; k++) {
    if (big[i + k] !== small[j + k]) {
      return false
    }
  }
  return true
}

class WordTreeNode {
  constructor(val, parent = null) {
    this.val = val
    this.parent = parent
    this.isLeaf = false
    this.nodes = {}
    this.genWord()
  }

  genWord() {
    this.word = this.parent && (this.parent.getWord() + this.val) || this.val
  }

  getWord() {
    return this.word
  }
}

function insertWord(parent, node, word, i = 0) {

  const w = word[i]

  if (!node) {
    node = new WordTreeNode(w, parent)
  }

  if (i >= word.length - 1) {
    node.isLeaf = true
    return node
  }

  const w2 = word[i + 1]
  node.nodes[w2] = insertWord(node, node.nodes[w2], word, i + 1)
  return node
}


function findWordNode(root, word, i = 0) {
  COUNT.findWordNode ++

  if (!root) {
    return null
  }

  if (i >= word.length) {
    return root.isLeaf ? root : null
  }

  return findWordNode(root.nodes[word[i]], word, i + 1)
}

function existsWord(root, word, i = 0) {
  return !!findWordNode(root, word, i)
}

function mkWordTree(words) {
  const root = new WordTreeNode('')
  words.forEach(word => {
    const w = word[0]
    root.nodes[w] = insertWord(root, root.nodes[w], word, 0)
    // console.log(root);
  })
  return root
}


// words = ['a', 'aa', 'aaa', 'aaaaa', 'b', 'bc', 'bcd']
// const root = mkWordTree(words)
// // console.log(root);
// words.forEach(e => console.log(existsWord(root, e)));
// console.log(existsWord(root, 'aaaa'))
// console.log(existsWord(root, 'aba'))
// console.log(existsWord(root, 'aab'))
// console.log(existsWord(root, 'aab'))
// console.log(existsWord(root, 'c'))
// console.log(existsWord(root, 'bcde'))


function findSubstr(wt, results, small) {

  let node = findWordNode(wt, small)
  if (!node) {
    return null
  }

  do {
    node = node.parent
  } while (node && !node.isLeaf)

  return node && node.getWord() || null
}
/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
var multiSearch = function (big, smalls) {
  // console.log({ big, smalls });
  const smalls2 = smalls.slice(0)
  smalls.sort()
  const results = {}
  const wt = mkWordTree(smalls)
  for (let i = 0; i < smalls.length; i++) {
    const small = smalls[i];
    const result = results[small] = []
    if (small.length <= 0) {
      continue
    }
    const sub = findSubstr(wt, results, small)
    const pos = results[sub]
    // console.log({ small, sub, pos });
    if (pos) {
      for (let p of pos) {
        if (isMatch(big, small, p + sub.length, sub.length)) {
          result.push(p)
        }
      }
    } else {
      const len = big.length - small.length + 1
      for (let j = 0; j < len; j++) {
        if (isMatch(big, small, j, 0)) {
          result.push(j)
        }
      }
    }
  }
  return smalls2.map(e => results[e])
};

let big = "mississippi",
  smalls = ["is", "ppi", "hi", "sis", "i", "ssippi"]
console.log(multiSearch(big, smalls));
big = "", smalls = ["a", "b", "c"]
console.log(multiSearch(big, smalls));
big = "abc", smalls = [""]
console.log(multiSearch(big, smalls));
big = "aaabaaa", smalls = ["aaa", 'aba', 'aaaa']
console.log(multiSearch(big, smalls));
big = new Array(10).fill('a').join('')
smalls = new Array(5).fill(0).map((e, i) => big.slice(0, i + 1))
console.log(multiSearch(big, smalls))
big = new Array(1000).fill('a').join('')
smalls = new Array(500).fill(0).map((e, i) => big.slice(0, i + 1))
multiSearch(big, smalls)
// for (let i = 0; i < 100; i++) multiSearch(big, smalls)
smalls = smalls.reverse()
multiSearch(big, smalls)

console.log(COUNT);
