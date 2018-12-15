const isNeighbor = function (a, b) {
  let count = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++
      if (count > 1) {
        return false
      }
    }
  }
  return true
}

var go = function (map, start, end, set, result) {

  if (start === end) {
    // console.log('hit', set);
    result.min = Math.min(result.min, set.size)
    return
  }

  if (set.size >= result.min) {
    return
  }

  const v = map.get(start) || []
  for (let i = 0; i < v.length; i++) {
    if (set.has(v[i])) {
      continue
    }
    set.add(v[i])
    go(map, v[i], end, set, result)
    set.delete(v[i])
  }
}

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {

  const map = new Map
  bank.push(start)
  for (let i = 0; i < bank.length; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      if (isNeighbor(bank[i], bank[j])) {
        map.set(bank[i], (map.get(bank[i]) || []).concat(bank[j]))
        map.set(bank[j], (map.get(bank[j]) || []).concat(bank[i]))
      }
    }
  }

  // console.log(map);
  const result = {
    min: bank.length + 1
  }
  go(map, start, end, new Set(), result)
  return result.min === bank.length + 1 ? -1 : result.min
};

// var distance = function (a, b) {
//   let count = 0
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       count++
//     }
//   }
//   return count
// }

// /**
//  * @param {string} start
//  * @param {string} end
//  * @param {string[]} bank
//  * @return {number}
//  */
// var minMutation = function (start, end, bank) {

//   const map = new Map
//   bank.push(start)
//   const layers = []
//   for (let i = 0; i < bank.length; i++) {
//     const dist = distance(start, bank[i])
//     layers[dist] = layers[dist] || []
//     layers[dist].push(bank[i])
//     for (let j = i + 1; j < bank.length; j++) {
//       if (isNeighbor(bank[i], bank[j])) {
//         map.set(bank[i], (map.get(bank[i]) || []).concat(bank[j]))
//         map.set(bank[j], (map.get(bank[j]) || []).concat(bank[i]))
//       }
//     }
//   }

//   const dp = Array(bank.length).fill(0).map(() => Array(bank.length).fill(-1))

//   for (let i = 0; i < bank.length; i++) {
//     for (let j = i + 1; j < bank.length; j++) {


//     }
//   }
// };




var assert = require('assert');
var start = "AACCGGTT"
var end = "AACCGGTA"
var bank = ["AACCGGTA"]
assert.equal(minMutation(start, end, bank), 1)
var start = "AACCGGTT"
var end = "AAACGGTA"
var bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
assert.equal(minMutation(start, end, bank), 2)
var start = "AAAAACCC"
var end = "AACCCCCC"
var bank = ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
assert.equal(minMutation(start, end, bank), 3)