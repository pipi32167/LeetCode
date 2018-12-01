var calcArea = function (p1, p2) {

  const w = Math.abs(p1[0] - p2[0])
  const h = Math.abs(p1[1] - p2[1])
  return w * h
}

var isRect = function (map, p1, p2) {
  
  return map.has([p1[0], p2[1]].join()) && map.has([p2[0], p1[1]].join())
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  let minArea = 40001 * 40000
  let map = new Map()
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    map.set(point.join(), true) 
  }
  let hit = false
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const area = calcArea(points[i], points[j])
      // console.log('area', points[i], points[j], area, minArea > area, isRect(map, points[i], points[j]));
      if (area > 0 && minArea > area && isRect(map, points[i], points[j])) {
        minArea = area
        hit = true
        // console.log('hit', points[i], points[j], area);
      }
    }
  }
  return hit ? minArea : 0
};

var assert = require('assert');
assert.equal(minAreaRect([
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [2, 2]
]), 4)
assert.equal(minAreaRect([
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [4, 1],
  [4, 3]
]), 2)

const random = (n) => Math.floor(Math.random() * n)
var points = new Array(5000).fill(0).map(() => [random(40000), random(40000)])
assert.equal(minAreaRect(points), 2)