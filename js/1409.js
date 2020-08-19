/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {

  m = new Array(m).fill(0).map((e, i) => i + 1)
  const result = []
  while (queries.length > 0) {
    
    const q = queries.shift()
    const i = m.indexOf(q)
    // console.log({m, q, v: q, i});
    m.splice(i, 1)
    m.unshift(q)
    result.push(i)
  }
  return result
};

let queries, m
queries = [3, 1, 2, 1], m = 5
console.log(processQueries(queries, m));
queries = [4,1,2,2], m = 4
console.log(processQueries(queries, m));
queries = [7,5,5,8,3], m = 8
console.log(processQueries(queries, m));