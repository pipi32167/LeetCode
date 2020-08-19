function doSumSubseqWidths (A, i, j, cache) {
  
}

function getPermutations (A, i, j, n, tmp, results) {
  if (i >= j) {
    return
  }
  if (n === 0) {
    results.push(tmp.slice(0))
    return
  }

  for (let k = i; k <= j; k++) {
    tmp.push(A[i])    
    getPermutations(A, k + 1, j, n - 1)
    
  }
}

/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubseqWidths = function(A) {

  return doSumSubseqWidths(A, 0, A.length, )
};

console.log(sumSubseqWidths([2,1,3]), 6);
