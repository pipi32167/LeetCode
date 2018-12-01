var assert = require('assert');

var isTooFar = function (m, n, N, i, j) {
  const xLen = Math.min(i, m - 1 - i)
  const yLen = Math.min(j, n - 1 - j)
  return xLen > N && yLen > N
}

assert.ok(!isTooFar(1,1,0,0,0))
assert.ok(!isTooFar(3,3,0,0,0))
assert.ok(!isTooFar(3,3,0,0,1))
assert.ok(!isTooFar(3,3,0,0,2))
assert.ok(!isTooFar(3,3,0,1,0))
assert.ok(isTooFar(3,3,0,1,1))
assert.ok(!isTooFar(3,3,0,1,2))
assert.ok(!isTooFar(3,3,0,2,0))
assert.ok(!isTooFar(3,3,0,2,1))
assert.ok(!isTooFar(3,3,0,2,2))

var find = function (dp, m, n, N, i, j) {
  const isOut = i < 0 || i >= m || j < 0 || j >= n
  // console.log({ i,j,N });
  if (isOut || N < 0) {
    let ans
    if (N === -1 &&
      (((i === -1 || i === m) && (j >= 0 && j < n)) ||
        (i >= 0 && i < m && (j === -1 || j === n))
      )) {
      ans = 1
    } else {
      ans = 0
    }
    // console.log('exit1', { i,j,N,ans });
    return ans
  }
  if (dp[i][j][N] > 0) {
    return dp[i][j][N]
  }
  if (isTooFar(m, n, N, i, j)) {
    dp[i][j][N] = 0
    return 0
  }
  const poses = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ]
  let ans = 0
  // let result = []
  for (let k = 0; k < poses.length; k++) {
    const pos = poses[k];
    const i2 = i + pos[0]
    const j2 = j + pos[1]
    const count = find(dp, m, n, N - 1, i2, j2)
    ans += count
    // result.push({ i2, j2, N2: N-1, count })
  }
  // console.log('exit2', { i,j,N,ans });
  // console.log(result);
  ans %= 1000000007
  dp[i][j][N] = ans
  return ans
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function (m, n, N, i, j) {

  let dp = Array(m).fill(0)
    .map(() => Array(n).fill(0)
      .map(() => Array(N).fill(0)))

  let ans = 0
  for (let N2 = 0; N2 <= N; N2++) {
    ans += find(dp, m, n, N2 - 1, i, j)
  }
  // console.log(dp);
  return ans % 1000000007
};

var m = 1,
  n = 3,
  N = 1,
  i = 0,
  j = 1
assert.equal(findPaths(m, n, N, i, j), 2)
var m = 1,
  n = 3,
  N = 1,
  i = 0,
  j = 1
assert.equal(findPaths(m, n, N, i, j), 2)
var m = 1,
  n = 3,
  N = 3,
  i = 0,
  j = 1
assert.equal(findPaths(m, n, N, i, j), 12)
var m = 2,
  n = 2,
  N = 2,
  i = 0,
  j = 0
assert.equal(findPaths(m, n, N, i, j), 6)
var m = 8,
  n = 50,
  N = 23,
  i = 5,
  j = 26
assert.equal(findPaths(m, n, N, i, j), 914783380)
var m = 36,
  n = 5,
  N = 50,
  i = 15,
  j = 3
assert.equal(findPaths(m, n, N, i, j), 390153306)
var m = 45,
  n = 35,
  N = 47,
  i = 20,
  j = 31
assert.equal(findPaths(m, n, N, i, j), 951853874)