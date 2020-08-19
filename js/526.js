function doCountArrangement(N, tmp, result, results) {

  const len = result.length
  if (len >= N) {
    results.push(result.slice(0))
    return
  }

  for (let i = 0; i < N; i++) {
    if (tmp[i]) continue
    const i_num = i + 1
    const i_idx = len + 1
    // console.log({ i_num, i_idx, used: tmp[i] });
    if ((i_num % i_idx !== 0) && (i_idx % i_num !== 0)) {
      continue
    }
    tmp[i] = true
    result.push(i_num)
    doCountArrangement(N, tmp, result, results)
    tmp[i] = false
    result.pop()
  }
}

/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {

  const tmp = new Array(N).fill(false)
  const results = []
  doCountArrangement(N, tmp, [], results)
  // console.log(results);
  return results.length
};


console.log(countArrangement(2));
console.log(countArrangement(15));
const result = []
for (let i = 0; i < 15; i++) {
  result.push(countArrangement(i+1))
}
console.log(result);
