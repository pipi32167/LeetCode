var go = function (nums, map, remain, idx, memo) {
  if (remain === 0) {
    return true
  }

  if (remain < 0 || idx >= nums.length || memo[idx].has(remain)) {
    return false
  }

  if ((map.get(remain) || 0) > 0) {
    return true
  }

  // console.log({remain, idx});

  for (let i = idx; i < nums.length; i++) {
    const num = nums[i]
    const count = map.get(num)
    for (let j = count; j >= 0; j--) {
      if (remain < j * num) {
        continue
      }

      map.set(num, count - j)
      if (go(nums, map, remain - j * num, idx + 1, memo)) {
        return true
      }
      map.set(num, count)
    }
  }
  memo[idx].add(remain)
  return false
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {

  let sum = 0
  let max = 0
  const map = new Map
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (max < nums[i]) {
      max = nums[i]
    }
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  const remain = sum / 2
  if (remain !== parseInt(remain) || max > remain) {
    return false
  }
  if (max === remain) {
    return true
  }

  const nums2 = Array.from(map.keys()).sort((a, b) => b - a)
  const memo = Array(nums.length).fill(0).map(() => new Set)
  // console.log({ nums2, map, remain });
  return go(nums2, map, remain, 0, memo)
};

const assert = require('assert');
assert.ok(canPartition([1, 5, 11, 5]))
assert.ok(!canPartition([1, 2, 3, 5]))
assert.ok(canPartition([1, 2, 3, 5, 5]))
assert.ok(!canPartition([1, 2, 3, 4, 5]))
assert.ok(!canPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]))
assert.ok(canPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 97, 95]))

assert.ok(canPartition([71,70,66,54,32,63,38,98,4,22,61,40,6,8,6,21,71,36,30,34,44,60,89,53,60,56,73,14,63,37,15,58,51,88,88,32,80,32,10,89,67,29,68,65,34,15,88,8,57,78,37,63,73,65,47,39,32,74,31,44,43,4,10,8,96,22,58,87,29,99,79,13,96,21,62,71,34,55,72,3,96,7,36,64,30,6,14,87,12,90,40,13,29,21,94,33,99,86,4,100]))