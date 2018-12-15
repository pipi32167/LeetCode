var isNumber = function (num) {
  return !isNaN(Number(num))
}
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {

  const logs1 = []
  const logs2 = []

  for (let i = 0; i < logs.length; i++) {
    let [id, ...log] = logs[i].split(' ');
    log = log.join(' ')

    if (isNumber(log[0])) {
      logs1.push([id, log])
    } else {
      logs2.push([id, log])
    }
  }

  return logs2
    .sort((a, b) => a[1].localeCompare(b[1]))
    .concat(logs1)
    .map(e => e.join(' '))
};

var assert = require('assert');
assert.deepEqual(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]), ["g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"])