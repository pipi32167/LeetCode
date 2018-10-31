/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  
  var count = 0
  for(var i = 0, j = 0; i < g.length && j < s.length; ) {
    
    if (g[i] <= s[j]) {
      i++
    }
    j++
  }
  return i
};

console.log(findContentChildren([1,2,3], [1,1]), 1);
console.log(findContentChildren([1,2], [1,2,3]), 2);
var { g, s } = require('./455_input')
console.log(findContentChildren(g, s), 70);
