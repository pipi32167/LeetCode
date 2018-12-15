const assert = require('assert');

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {

  logs = logs.map(e => {
    const [id, state, time] = e.split(':')
    return {
      id: Number(id),
      state,
      time: Number(time),
      innerTime: 0,
    }
  })

  const times = Array(n).fill(0)

  const stack = []
  while (logs.length > 0) {
    const log1 = logs.shift()
    switch (log1.state) {
      case 'start':
        stack.push(log1)
        break;
      case 'end':
        const log2 = stack.pop()
        const elapseTime = log1.time - log2.time + 1
        times[log2.id] += elapseTime - log2.innerTime
        // console.log({ times, log1, log2, elapseTime });
        if (stack.length > 0) {
          stack[stack.length - 1].innerTime += elapseTime
        }
        break;
    }
    // console.log({ stack, innerTime });
  }
  return times
};
var n = 3
var logs = [
  "0:start:0",
  "1:start:2",
  "1:end:3",
  "2:start:4",
  "2:end:5",
  "0:end:6"
]
var r = [3, 2, 2]
assert.deepEqual(exclusiveTime(n, logs), r)
var n = 3
var logs = [
  "0:start:0",
  "0:end:1",
  "1:start:2",
  "1:end:3",
  "2:start:4",
  "2:end:5",
]
var r = [2, 2, 2]
assert.deepEqual(exclusiveTime(n, logs), r)
var n = 2
var logs = [
  "0:start:0",
  "1:start:2",
  "1:end:5",
  "0:end:6"
]
var r = [3, 4]
assert.deepEqual(exclusiveTime(n, logs), r)
var n = 2
var logs = [
  "0:start:0",
  "1:start:2",
  "1:end:3",
  "1:start:4",
  "1:end:5",
  "0:end:6"
]
var r = [3, 4]
assert.deepEqual(exclusiveTime(n, logs), r)