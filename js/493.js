var assert = require('assert');

let cntxxx = 0
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var reversePairs = function (nums) {
//   const memo = new Map()
//   let cnt = 0
//   for (let i = nums.length - 2; i >= 0; i--) {
//     let [endIdx, cnt2] = memo.get(nums[i]) || [nums.length, 0]
//     for (let j = i + 1; j < endIdx; j++) {
//       cntxxx ++
//       console.log({ i, j });
//       if (nums[i] > nums[j] * 2) {
//         // console.log({ i, j, num1: nums[i], num2: nums[j] });
//         cnt2++
//       }
//     };
//     // console.log({ i, endIdx, cnt2 });
//     cnt += cnt2
//     memo.set(nums[i], [i + 1, cnt2])
//   }
//   return cnt
// };

// function findPos (arr, num) {
//   let pos = arr.length
//   for (let i = 0; i < arr.length; i++) {
//     if (num <= arr[i]) {
//       pos = i
//       break
//     }
//   }
//   return pos
// }

function doFindPos (arr, num, i, j) {
  // cntxxx++
  // console.log('doFindPos', { arr: arr.slice(i, j+1), num, i, j });
  if(i >= j) return i
  const m = (i + j) >> 1
  if (num <= arr[m]) {
    return doFindPos(arr, num, i, m - 1)
  } else if (num > arr[m]) {
    return doFindPos(arr, num, m + 1, j)
  } 
}

function findPos (arr, num, memo) {
  if (num <= arr[0]) return 0
  if (num > arr[arr.length - 1]) return arr.length
  const start = memo.get(num) || 0
  let pos = doFindPos(arr, num, start, arr.length - 1)
  if (arr[pos] === num) {
    while (pos > 0 && arr[pos - 1] === num) {
      pos --
    }
  } else if (arr[pos] < num) {
    pos ++
  }
  memo.set(num, pos)
  return pos
}

function insertSort (arr, num, memo) {
  const idx = findPos(arr, num, memo)
  // console.log('insertSort', { arr, num, idx });
  arr.splice(idx, 0, num)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  const arr = []
  let cnt = 0
  const memo = new Map()
  for (let i = nums.length - 1; i >= 0; i--) {
    
    const pos = findPos(arr, nums[i], memo)
    // console.log({ i, num: nums[i], pos, arr });
    insertSort(arr, nums[i] * 2, memo)
    cnt += pos
  }
  // console.log(arr);
  return cnt
};

assert.equal(reversePairs([1, 3, 2, 3, 1]), 2)
assert.equal(reversePairs([2, 4, 3, 5, 1]), 3)
assert.equal(reversePairs([233, 2000000001, 234, 2000000006, 235, 2000000003, 236, 2000000007, 237, 2000000002, 2000000005, 233, 233, 233, 233, 233, 2000000004]), 40)
var nums = require('./493_input').nums
console.log(nums.length);
assert.equal(reversePairs(nums), 312836170)
assert.equal(reversePairs(require('./493_input2').nums), 0)
console.log(cntxxx);