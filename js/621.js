var find = function (now, tasks, ends) {

  const result = tasks.filter(e => ends.get(e[0]) < now)

  let max = 0,
    minEnd, maxRes
  for (let i = 0; i < result.length; i++) {
    const [id, count] = result[i]
    if (max < count) {
      max = count
      minEnd = ends.get(id)
      maxRes = result[i]
    } else if (max === count) {
      if (minEnd > ends.get(id)) {
        minEnd = ends.get(id)
        maxRes = result[i]
      }
    }
  }
  return maxRes
}

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {

  const tasks2 = new Map
  const starts = new Map
  const ends = new Map

  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i]
    tasks2.set(t, (tasks2.get(t) || 0) + 1)
    ends.set(t, -1)
  }

  const tasks3 = Array.from(tasks2.entries())

  let now = 0,
    lastTask
  // const result = []
  while (tasks3.length > 0) {
    const task = find(now, tasks3, ends)
    if (task) {
      lastTask = task
      task[1]--
      if (task[1] === 0) {
        const idx = tasks3.findIndex(e => e[0] === task[0])
        tasks3.splice(idx, 1)
      }
      starts.set(task[0], now)
      ends.set(task[0], now + n)
      // result.push(task[0])
    }
    // console.log(ends);
    now = Math.max(now, Math.min(...Array.from(ends.values()))) + 1
  }
  // console.log(result);
  return starts.get(lastTask[0]) + 1
};

var assert = require('assert');
var tasks = ["A", "A", "A", "B", "B", "B"],
  n = 2
assert.equal(leastInterval(tasks, n), 8)
var tasks = ["A", "A", "A"],
  n = 2
assert.equal(leastInterval(tasks, n), 7)
var tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"]
var n = 2
assert.equal(leastInterval(tasks, n), 16)