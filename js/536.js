const {
  TreeNode
} = require("./util.tree")

function findStart(s, start, end) {

  for (let j = start; j <= end; j++) {
    if (s[j] === '(') {
      return j
    }
  }
  return -1
}

function findEnd(s, start, end) {

  let cnt = 0;
  for (let j = start; j <= end; j++) {
    if (s[j] === '(') {
      cnt++
    } else if (s[j] === ')') {
      cnt--
      if (cnt === 0) {
        return j
      }
    }
  }
  return -1
}

function solve(s, start, end) {
  // console.log("solve", s.slice(start, end + 1));
  if (start > end) {
    return null
  }
  let i = start
  while (s[i] !== '(' && s[i] !== ')' && i <= end) i++
  let node = new TreeNode(parseInt(s.slice(start, i)))
  let left_start = findStart(s, i, end)
  // console.log({ left_start });
  if (left_start < 0) {
    return node
  }
  let left_end = findEnd(s, left_start, end)
  // console.log({ left_end });
  node.left = solve(s, left_start + 1, left_end - 1)
  let right_start = findStart(s, left_end + 1, end)
  // console.log({ right_start });
  if (right_start < 0) {
    return node
  }
  let right_end = findEnd(s, right_start, end)
  // console.log({ right_end });
  node.right = solve(s, right_start + 1, right_end - 1)
  return node
}

/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  if (s.length === 0) {
    return null
  }
  return solve(s, 0, s.length - 1)
};


// console.log(str2tree("4(2(3)(1))(6(5))"));
// console.log(str2tree("2(3)(1)"));
console.log(str2tree("2"));