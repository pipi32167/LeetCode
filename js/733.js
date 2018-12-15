/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @param {number} newColor
 */
var fill = function (image, sr, sc, color, newColor) {

  const m = image.length
  const n = image[0].length
  if (sr < 0 || sr >= m || sc < 0 || sc >= n || image[sr][sc] !== color || image[sr][sc] === newColor) {
    return
  }

  image[sr][sc] = newColor

  const poses = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  for (let i = 0; i < poses.length; i++) {
    const pos = poses[i]
    const sr2 = sr + pos[0]
    const sc2 = sc + pos[1]
    fill(image, sr2, sc2, color, newColor)
  }
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  if (image.length === 0) {
    return image
  }

  const color = image[sr][sc]
  if (color === newColor) {
    return image
  }
  fill(image, sr, sc, color, newColor)
  return image
};

var assert = require('assert');
var image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
]
var sr = 1,
  sc = 1,
  newColor = 2
var r = [
  [2, 2, 2],
  [2, 2, 0],
  [2, 0, 1]
]

assert.deepEqual(floodFill(image, sr, sc, newColor), r)