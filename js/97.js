/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {

  var ss = [s1, s2]
  var is = [0, 0]
  var idxList = []

  let i = 0
  while (i < s3.length) {
    let hit = false
    for (let j = 0; j < ss.length; j++) {
      const s = ss[j]
      if (s3[i] === s[is[j]]) {
        i++
        is[j]++
        hit = true
        idxList.push({
          sidx: j,
          idx: idx[j]
        })
        break
      }
    }
    if (!hit) {
      
    }
    i++
  }
};