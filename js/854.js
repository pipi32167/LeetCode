var swap = function (s, i, j) {
  const c = s[i]
  s[i] = s[j]
  s[j] = c
}

var distance = function (s1, s2) {
  let res = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      res++
    }
  }
  return res
}

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function (A, B) {
  // console.log(A, B);
  if (A === B) {
    return 0
  }

  A = Array.from(A).map(e => e.charCodeAt(0))
  B = Array.from(B).map(e => e.charCodeAt(0))
  const set = new Set()
  const stack = [{
    s: A,
    step: 0
  }]

  while (stack.length > 0) {
    const {
      s,
      step
    } = stack.shift()
    // console.log({ str });
    let minDist = A.length,
      result
    for (let i = 0; i < s.length; i++) {
      if (s[i] === B[i]) {
        continue
      }
      for (let j = i + 1; j < s.length; j++) {
        if (s[i] !== B[j]) {
          continue
        }

        swap(s, i, j)
        const dist = distance(s, B)
        if (dist === 0) {
          // console.log(set.size);
          return step + 1
        }

        if (minDist > dist) {
          minDist = dist
          result = [s.slice(0)]
        } else if (minDist === dist) {
          result.push(s.slice(0))
        }
        swap(s, i, j)
      }
    }

    for (let i = 0; i < result.length; i++) {
      const s = result[i];
      const s2 = String.fromCharCode(...s)
      // console.log({ s2 });
      if (!set.has(s2)) {
        set.add(s2)
        stack.push({
          s: s.slice(0),
          step: step + 1
        })
      }
    }
  }

  return -1
};

var assert = require('assert');
assert.equal(kSimilarity('ab', 'ba'), 1)
assert.equal(kSimilarity('ab', 'ab'), 0)
assert.equal(kSimilarity('abc', 'bca'), 2)
assert.equal(kSimilarity('abc', 'cab'), 2)
assert.equal(kSimilarity('abac', 'baca'), 2)
assert.equal(kSimilarity('aabc', 'abca'), 2)
assert.equal(kSimilarity('abccaacceecdeea', 'bcaacceeccdeaae'), 9)
assert.equal(kSimilarity('abcdeabcdeabcdeabcde', 'aaaabbbbccccddddeeee'), 8)
assert.equal(kSimilarity('cdebcdeadedaaaebfbcf', 'baaddacfedebefdabecc'), 12)
