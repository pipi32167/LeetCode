var isSame = function (grid, x, y, len) {

  const v = grid[x][y]
  for (let i = x; i < x + len; i++) {
    for (let j = y; j < y + len; j++) {
      if (v !== grid[i][j]) {
        return false
      }
    }
  }
  return true
}

var doConstruct = function (grid, x, y, len) {

  const node = new Node(grid[x][y], false, null, null, null, null)
  const res = isSame(grid, x, y, len)
  // console.log('isSame', { x, y, len, res });
  if (res) {
    node.isLeaf = true
    return node
  }

  const mid = (len / 2)
  node.topLeft = doConstruct(grid, x, y, mid)
  node.topRight = doConstruct(grid, x, y + mid, mid)
  node.bottomLeft = doConstruct(grid, x + mid, y, mid)
  node.bottomRight = doConstruct(grid, x + mid, y + mid, mid)
  return node
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  const n = grid.length
  return doConstruct(grid, 0, 0, n)
};

function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
};

console.log('%o', construct([
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0]
]));
