/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  let max = 0
  for (let i = 0; i < tree.length; i++) {
    if (max >= tree.length - i) {
      break
    }
    let sum = new Map()
    for (let j = i; j < tree.length; j++) {
      sum.set(tree[j], (sum.get(tree[j]) || 0) + 1)
      if (sum.size > 2) {
        break
      }
      if (max < j - i + 1) {
        max = j - i + 1
      }
    }
  }
  // console.log(dp);
  return max
};

// var difference = function (map1, map2) {
//   let result = new Map(map1)
//   for (const [k, v] of map2) {
//     const res = result.get(k) - v
//     if (res === 0) {
//       result.delete(k)
//     } else {
//       result.set(k, res)
//     }
//   }
//   return result
// }

// /**
//  * @param {number[]} tree
//  * @return {number}
//  */
// var totalFruit = function (tree) {

//   let dp = new Array(tree.length + 1).fill(0)
//   dp[0] = new Map()
//   let map = new Map()
//   for (let i = 0; i < tree.length; i++) {
//     map.set(tree[i], (map.get(tree[i]) || 0) + 1)
//     dp[i + 1] = new Map(map)
//   }

//   let max = 0
//   for (let i = 0; i < dp.length; i++) {
//     if (max >= dp.length - 1 - i) {
//       break
//     }
//     const diff = difference(dp[i + max], dp[i])
//     for (let j = i + max + 1; j < dp.length; j++) {
//       diff.set(tree[j - 1], (diff.get(tree[j - 1]) || 0) + 1)
//       if (diff.size > 2) {
//         break
//       }
//       if (max < j - i) {
//         max = j - i
//       }
//     }
//   }
//   // console.log(dp);
//   return max
// };


var assert = require('assert');
// assert.equal(totalFruit(Array(20000).fill(0).concat(Array(10000).fill(1)).concat(Array(10000).fill(2))), 30000)
assert.equal(totalFruit(require('./904_input').sample3), 40000)
assert.equal(totalFruit(require('./904_input').sample2), 24)
assert.equal(totalFruit(require('./904_input').sample1), 12)
assert.equal(totalFruit([0]), 1)
assert.equal(totalFruit([1, 2, 1]), 3)
assert.equal(totalFruit([0, 1, 2, 2]), 3)
assert.equal(totalFruit([1, 2, 3, 2, 2]), 4)
assert.equal(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]), 5)