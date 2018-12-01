/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const map = new Map
  for (let i = 0; i < times.length; i++) {
    const [fromId, toId, delay] = times[i]
    map.set(fromId, (map.get(fromId) || []).concat([[toId, delay]]))
  }
  // console.log(map);
  const delays = Array(N).fill(-1)
  const stack = [{
    id: K,
    delay: 0
  }]
  
  while (stack.length > 0) {
    
    const { id, delay } = stack.shift()
    if (delays[id - 1] !== -1) {
      continue
    }
    delays[id - 1] = delay
    const neighbors = map.get(id) || []
    for (let i = 0; i < neighbors.length; i++) {
      const [toId, nextDelay] = neighbors[i]
      stack.push({
        id: toId, 
        delay: delay + nextDelay,
      })
    }
    stack.sort((a, b) => a.delay - b.delay)
  }

  let maxDelay = 0
  for (let i = 0; i < delays.length; i++) {
    if (delays[i] === -1) {
      return -1
    }

    if (maxDelay < delays[i]) {
      maxDelay = delays[i]
    }
  }
  return maxDelay
};

var assert = require('assert');
assert.equal(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2), 2)
assert.equal(networkDelayTime([[2,1,1],[2,3,1]], 4, 2), -1)