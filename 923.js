let unique = function (nums) {
  
  let results = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (results.indexOf(num) < 0) {
      results.push(num)
    }
  }
  return results
}

let count = function (nums) {
  let results = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    results[num] = results[num] || 0
    results[num] ++
  }
  return results
  // return nums.reduce((r, e) => {
  //   r[e] = r[e] || 0
  //   r[e]++
  //   return r
  // }, {})
}

let go = function (uA, dA, target, idx, sum, prefix, result) {
  if (idx > uA.length || prefix.length > 3) {
    return 
  }
  // console.log({sum, target, idx, prefix});
  if (sum === target && prefix.length === 3) {
    // console.log('result', prefix);
    // result.count += prefix.reduce((r, e) => r * dA[e], 1)
    result.count++
    return
  }

  for (let i = idx; i < uA.length; i++) {
    const num = uA[i];
    if (sum + num > target) {
      break
    } 
    // console.log({prefix, num});
    prefix.push(num)
    go(uA, dA, target, i+1, sum + num, prefix, result)
    prefix.pop()
  }
}
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
  A = A.sort((a, b) => a-b)
  let uA = A, dA = A
  // let uA = unique(A)
  // let dA = count(A)
  // console.log({ uA, dA });
  let result = { count: 0 }
  go(uA, dA, target, 0, 0, [], result)
  return result.count
};


/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
  
  let count = 0
  for (let i = 0; i < A.length; i++) {
    const a = A[i];
    for (let j = i+1; j < A.length; j++) {
      const b = A[j];
      for (let k = j+1; k < A.length; k++) {
        const c = A[k];
        const sum = a + b + c
        if (sum < target) {
          continue
        } else if (sum > target) {
          break
        } else {
          count++
        }
      }
    }
  }
  return count % (Math.pow(10, 9) + 7)
};


/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
  A = A.sort((a, b) => a - b)

  const dp = new Array(A.length+1).fill(() => {})
  dp[A.length] = {}
  for (let i = A.length - 1; i >= 0; i--) {
    const e = A[i]
    dp[i] = Object.assign({}, dp[i+1])
    dp[i][e] = dp[i][e] || 0
    dp[i][e] ++
  }
  // console.log(dp);
  let count = 0
  for (let i = 0; i < A.length; i++) {
    const a = A[i];
    for (let j = i+1; j < A.length; j++) {
      const b = A[j];
      const sum = a + b
      if (sum > target) {
        break
      }
      // if ((dp[j+1][target - sum] || 0) > 0) {
      //   console.log({ i: A[i], j: A[j], k: target - A[i] - A[j] });
      // }
      count += dp[j+1][target - sum] || 0
    }
  }
  return count % (Math.pow(10, 9) + 7)
};

console.log(threeSumMulti([1,1,2,2,3,3,4,4,5,5], 8) === 20);
console.log(threeSumMulti([1,1,2,2,2,2], 5) === 12);
console.log(threeSumMulti([1,3,3,0,1],4) === 4);
let { A, target } = require('./923_input')
console.log(threeSumMulti(A, target) === 495500972);
