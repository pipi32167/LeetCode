function mkGraph(n, relation) {

  const g = {}
  for (let i = 0; i < n; i++) g[i] = []
  for (let i = 0; i < relation.length; i++) g[relation[i][0]].push(relation[i][1])
  return g
}

function dfs(g, k, i, n, t, r) {

  // console.log("dfs", {i, n, t, r});
  if (t.length > k) {
    return
  }

  for (let j = 0; j < g[i].length; j++) {
    let e = g[i][j]
    if(e === n - 1 && t.length == k) {
      r.push(t.slice(0).concat(n - 1))
      break
    }
    dfs(g, k, e, n, t.concat(e), r)
  }
}


/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {

  const g = mkGraph(n, relation)
  // console.log(g);
  const r = []
  dfs(g, k, 0, n, [0], r);
  // console.log(r);
  return r.length
};

let n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3
console.log(numWays(n, relation, k));
n = 3, relation = [[0,2],[2,1]], k = 2
console.log(numWays(n, relation, k));