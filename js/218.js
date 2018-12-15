var hasIntersection = function (group1, group2) {

  for (let i = 0; i < group1.length; i++) {
    for (let j = 0; j < group2.length; j++) {
      if (
        group1[i][0] <= group2[j][0] && group2[j][0] <= group1[i][1] ||
        group2[j][0] <= group1[i][0] && group1[i][0] <= group2[j][1]
      ) {
        return true
      }
    }
  }
  return false
}

var split = function (buildings) {
  let groups = buildings.map(e => [e])
  let hit
  do {
    hit = false
    for (let i = 0; i < groups.length; i++) {
      if (!groups[i]) {
        continue
      }
      for (let j = i + 1; j < groups.length; j++) {
        if (!groups[j]) {
          continue
        }
        if (hasIntersection(groups[i], groups[j])) {
          groups[i] = groups[i].concat(groups[j])
          groups[j] = null
          hit = true
        }
      }
    }

    groups = groups.filter(e => !!e)

  } while (hit)
  // console.log(groups);
  return groups
}


var merge = function (buildings) {
  let hit

  do {
    hit = false
    for (let i = 0; i < buildings.length; i++) {
      if (!buildings[i]) {
        continue
      }
      for (let j = 0; j < buildings.length; j++) {
        if (i === j || !buildings[j]) {
          continue
        }

        if (
          buildings[i][0] <= buildings[j][0] &&
          buildings[i][1] >= buildings[j][1] &&
          buildings[i][2] >= buildings[j][2]
        ) {
          buildings[j] = null
          hit = true
        } else if (
          buildings[i][1] === buildings[j][0] &&
          buildings[i][2] === buildings[j][2]
        ) {
          buildings[i][1] = Math.max(buildings[i][1], buildings[j][1])
          buildings[j] = null
          hit = true
        }
      }

      if (hit) {
        buildings = buildings.filter(e => !!e)
      }
    }
  } while (hit);
  return buildings
}

var solve = function (buildings) {

  // console.log('before', buildings);
  buildings = merge(buildings)
  // console.log('after ', buildings);

  let result = []
  for (let i = 0; i < buildings.length; i++) {
    result.push({
      i,
      x: buildings[i][0],
      h: buildings[i][2],
      type: 'start',
    })
    result.push({
      i,
      x: buildings[i][1],
      h: buildings[i][2],
      type: 'end',
    })
  }
  result.sort((a, b) => a.x - b.x)
  console.log(result);

  let hit
  do {

    hit = false
    for (let i = 1; i < result.length; i++) {
      const before = result[i - 1],
        now = result[i]
      if (!before) {
        continue
      }
      if (
        before.type === 'start' &&
        now.type === 'start'
      ) {
        if (before.h >= now.h) {
          result[i] = null
          hit = true
        } else if (before.x === now.x) {
          if (before.h > now.h) {
            result[i] = null
          } else {
            result[i - 1] = null
          }
          hit = true
        }
      } else if (
        before.type === 'end' &&
        now.type === 'end'
      ) {
        if (before.h <= now.h) {
          result[i - 1] = null
          hit = true
        } else if (before.x === now.x) {
          if (before.h > now.h) {
            result[i] = null
          } else {
            result[i - 1] = null
          }
          hit = true
        }
      } else if (
        before.type === 'start' &&
        now.type === 'end' &&
        before.i !== now.i &&
        before.h >= now.h &&
        i < result.length - 1
      ) {
        result[i] = null
        hit = true
        // } else if (
        //   before.type === 'end' &&
        //   now.type === 'start' &&
        //   before.x === now.x &&
        //   before.h === now.h
        // ) {
        //   result[i] = null
        //   hit = true
      }
      if (hit) {
        console.log(result);
      }
    }

    result = result.filter(e => !!e)

  } while (hit);

  // console.log(result);

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    if (result[i].type === 'start') {
      result2.push([result[i].x, result[i].h])
    } else if (result[i].type === 'end' && result[i - 1].type === 'end') {
      result2.push([result[i - 1].x, result[i].h])
    }
  }
  result2.push([result[result.length - 1].x, 0])
  // console.log(result2);
  return result2
}

var separate = function (buildings, b) {

  const result = []
  for (let i = 0; i < buildings.length; i++) {
    const bi = buildings[i]
    if (bi[0] <= b[0] && bi[1] < b[1]) {
      if (bi[2] > b[2]) {
        b[0] = bi[1]
      } else {
        bi[1] = b[0]
      }
    } else if (bi[0] <= b[0] && bi[1] >= b[1] && bi[2] < b[2]) {

      bi[i]
    }

  }
}

var solve = function (buildings) {

  // console.log('before', buildings);
  buildings = merge(buildings).sort((a, b) => a[0] - b[0])
  // console.log('after ', buildings);

  let result = [buildings[0]]
  while (buildings.length > 0) {
    const building = buildings.shift()
    result = separate(result, building)
  }

  return result
}


Array.prototype.flatten = function () {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result = result.concat(this[i])
  }
  return result
}

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const group = split(buildings)
  return group.map(solve).flatten().sort((a, b) => a[0] - b[0])
};

var assert = require('assert');
assert.deepEqual(getSkyline([
  [0, 5, 7],
  [5, 10, 7],
  [5, 10, 12],
  [10, 15, 7],
  [15, 20, 7],
  [15, 20, 12],
  [20, 25, 7]
]), [
  [0, 7],
  [5, 12],
  [10, 7],
  [15, 12],
  [20, 7],
  [25, 0]
])

assert.deepEqual(getSkyline([
  [3, 7, 8],
  [3, 8, 7],
  [3, 9, 6],
  [3, 10, 5],
  [3, 11, 4],
  [3, 12, 3],
  [3, 13, 2],
  [3, 14, 1]
]), [
  [3, 8],
  [7, 7],
  [8, 6],
  [9, 5],
  [10, 4],
  [11, 3],
  [12, 2],
  [13, 1],
  [14, 0]
])
assert.deepEqual(getSkyline([
  [1, 2, 1],
  [1, 2, 2],
  [1, 2, 3]
]), [
  [1, 3],
  [2, 0]
])

assert.deepEqual(getSkyline([
  [0, 2, 3],
  [2, 5, 3]
]), [
  [0, 3],
  [5, 0]
])
assert.deepEqual(getSkyline([
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8],
]), [
  [2, 10],
  [3, 15],
  [7, 12],
  [12, 0],
  [15, 10],
  [20, 8],
  [24, 0]
])