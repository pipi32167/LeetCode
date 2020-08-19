const { equal } = require("assert");

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  
  const map = new Map()
  for (let i = 1; i <= n; i++) {
    let num = i
    let sum = 0
    while(num > 0) {
      sum += num % 10
      num = Math.floor(num / 10)
    }
    if (map.has(sum)) {
      map.get(sum).push(i)
    } else {
      map.set(sum, [i])
    }
  }
  const map2 = new Map()
  let max = 0
  for(const [k, v] of map.entries()) {
    // console.log({k,v});
    if (map2.has(v.length)) {
      map2.set(v.length, map2.get(v.length) + 1)
    } else {
      map2.set(v.length, 1)
    }
    max = Math.max(v.length, max) 
  }
  // console.log({map, map2});
  return map2.get(max)
};

equal(countLargestGroup(13), 4)
equal(countLargestGroup(2), 2)
equal(countLargestGroup(15), 6)
equal(countLargestGroup(24), 5)
equal(countLargestGroup(10 ** 4), 1)