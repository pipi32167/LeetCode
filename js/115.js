var findAllIndex = function (s, c) {
  let res = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      res.push(i)
    }
  }
  return res
}

var calcPoss = function (appear, lastAppear, lastPoss) {
  let res = []
  for (let j = 0; j < appear.length; j++) {
    let pos
    let hit = false
    for (let k = 0; k < lastAppear.length; k++) {
      if (appear[j] < lastAppear[k]) {
        pos = k
        hit = true
        break
      }
    }
    if (hit) {
      let count = 0
      for (let l = pos; l < lastPoss.length; l++) {
        count += lastPoss[l]
      }
      res.push(count)
    } else {
      res.push(0)
    }
  }
  return res
}


/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  // console.log({ dpS, dpT });
  let appear = []
  for (let i = 0; i < t.length; i++) {
    appear.push(findAllIndex(s, t[i]))
  }
  let poss = new Array(appear.length).fill(0).map(() => [])
  poss[appear.length - 1] = appear[appear.length - 1].map(() => 1)
  for (let i = appear.length - 2; i >= 0; i--) {
    poss[i] = calcPoss(appear[i], appear[i + 1], poss[i + 1])
  }
  // console.log(poss);
  return poss[0].reduce((sum, e) => sum + e, 0)
};


var assert = require('assert')
var S = "abab"
var T = "ab"
assert.equal(numDistinct(S, T), 3);
var S = "rabbbit"
var T = "rabbit"
assert.equal(numDistinct(S, T), 3);
var S = "babgbag"
var T = "bag"
assert.equal(numDistinct(S, T), 5);
var S = "bagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbag"
var T = "bag"
assert.equal(numDistinct(S, T), 5410240);
var S = "adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc"
var T = "bcddceeeebecbc"
assert.equal(numDistinct(S, T), 700531452);