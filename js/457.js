/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {

  let memo = Array(nums.length).fill(false)
  for (let i = 0; i < nums.length; i++) {
    // if (memo[i]) {
    //   continue
    // }
    memo.fill(false)
    let pos = i
    let foreward
    let result = [pos]
    
    do {
      if (memo[pos]) {
        if (pos === i && new Set(result).size >= 2) {
          // console.log('success', result);
          // console.log(result.map(e => nums[e]));    
          return true
        } else {
          break
        }
      }

      if (foreward === undefined) {
        foreward = nums[pos] > 0
      } else if (nums[pos] > 0 && !foreward || nums[pos] < 0 && foreward) {
        break
      }

      memo[pos] = true
      pos += nums[pos]
      if (pos < 0) {
        pos += nums.length        
      } else {
        pos %= nums.length
      }
      result.push(pos)

    } while (true)
    // console.log('failed', result);
    // console.log(result.map(e => nums[e]));    
  }
  return false
};

var assert = require('assert');
assert.ok(circularArrayLoop([2, -1, 1, 2, 2]))
assert.ok(!circularArrayLoop([-1, 2]))
assert.ok(!circularArrayLoop([1, 2]))
assert.ok(circularArrayLoop([1, 1]))
assert.ok(circularArrayLoop([-1, -1]))
assert.ok(!circularArrayLoop([1, -1]))