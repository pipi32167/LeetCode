function splitToGroup(arr, size) {

  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i+size))
  }
  return result
}

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {

  const d = []

  for (let i = 0; i < groupSizes.length; i++) {
    const gSize = groupSizes[i]
    d[gSize] = d[gSize] || []
    d[gSize].push(i)
  }
  let results = []
  for (let k in d) {
    [k, v] = [Number(k), d[k]]
    results = results.concat(splitToGroup(v, k))
  }
  return results
};

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {

  const d = []
  let results = []
  for (let i = 0; i < groupSizes.length; i++) {
    const gSize = groupSizes[i]
    let group = d[gSize] = d[gSize] || [[]]
    if (group[0].length >= gSize) {
      group.unshift([i])
    } else {
      group[0].push(i)
    }
    if (group[0].length === 1) {
      results.push(group[0])
    }
    // console.log(group);
  }
  return results
};

let groupSizes = [3, 3, 3, 3, 3, 1, 3]
console.log(groupThePeople(groupSizes));
groupSizes = [2, 1, 3, 3, 3, 2]
console.log(groupThePeople(groupSizes));
