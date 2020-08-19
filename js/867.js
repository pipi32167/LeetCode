/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  const m = A.length
  const n = A[0].length
  const B = Array(n).fill(0).map(() => Array(m).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      B[j][i] = A[i][j]
    }
  }
  return B
};