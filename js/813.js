const assert = require('assert');

var solve = function (A, l, u, K, memo) {
  // assert.ok(K > 0, `invalid K:${K} should not less equal than 0`)
  // assert.ok(K <= u - l + 1, `invalid K:${K} should not greater than ${u-l+1}`)
  if (memo[l][u][K - 1] > 0) {
    return memo[l][u][K - 1]
  }
  if (K === 1) {
    let ans = 0
    for (let i = l; i <= u; i++) {
      ans += A[i]
    }
    ans /= (u - l + 1)
    // console.log({ l, u, K, ans });
    memo[l][u][K - 1] = ans
    return ans
  }

  let ans = 0
  for (let i = l; i <= u - (K - 1); i++) {
    ans = Math.max(
      ans,
      solve(A, l, i, 1, memo) + solve(A, i + 1, u, K - 1, memo),
    )
  }
  // console.log({ l, u, K, ans });
  memo[l][u][K - 1] = ans
  return ans
}

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function (A, K) {

  const memo = new Array(A.length).fill(0)
    .map(() => new Array(A.length).fill(0).map(() => new Array(K).fill(0)));
  const res = solve(A, 0, A.length - 1, K, memo);
  // console.log(memo);
  return res;
};

var idx = function (m, n, i, j, k) {
  return (i * m + j) * n + k
}

var get = function (memo, m, n, i, j, k) {
  return memo[idx(m, n, i, j, k)]
}

var set = function (memo, m, n, i, j, k, v) {
  memo[idx(m, n, i, j, k)] = v
}

var solve = function (A, K, l, u, k, memo) {
  // assert.ok(K > 0, `invalid K:${K} should not less equal than 0`)
  // assert.ok(K <= u - l + 1, `invalid K:${K} should not greater than ${u-l+1}`)
  let ans = get(memo, A.length, K, l, u, k - 1)
  if (ans > 0) {
    return ans
  }
  // let ans
  if (k === 1) {
    ans = 0
    for (let i = l; i <= u; i++) {
      ans += A[i]
    }
    ans /= (u - l + 1)
    // console.log({ l, u, k, ans });
    set(memo, A.length, K, l, u, k - 1, ans)
    return ans
  }

  ans = 0
  for (let i = l; i <= u - (k - 1); i++) {
    ans = Math.max(
      ans,
      solve(A, K, l, i, 1, memo) + solve(A, K, i + 1, u, k - 1, memo),
    )
  }
  // console.log({ l, u, k, ans });
  set(memo, A.length, K, l, u, k - 1, ans)
  return ans
}

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function (A, K) {

  const memo = new Array(A.length * A.length * K).fill(0)
  return solve(A, K, 0, A.length - 1, K, memo);
};

var A = [9, 1, 2, 3, 9]
var K = 3
assert.equal(largestSumOfAverages(A, K), 20)
var A = [1, 2, 3, 4, 5, 6, 7]
var K = 4
assert.equal(largestSumOfAverages(A, K), 20.5)
var A = new Array(100).fill(0).map((e,idx) => (idx * 3954) % 10000)
var K = 20
assert.equal(largestSumOfAverages(A, K), 135980.5396825397)