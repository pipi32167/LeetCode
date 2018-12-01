var countTabs = function (path) {
  let count = 0
  for (let i = 0; i < path.length; i++) {
    if (path[i] !== '\t') {
      break
    }
    count++
  }
  return count
}

var isFile = function (path) {
  return path.indexOf('.') >= 0
}

var trim = function (path) {
  let count = 0
  for (let i = 0; i < path.length; i++) {
    if (path[i] !== '\t') {
      break
    }
    count++
  }
  return path.slice(count)
}

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {

  const paths = input.split('\n')
  let stack = [paths[0]]
  const files = []
  let maxLen = 0,
    maxFile
  while (paths.length > 0) {
    const prePath = stack[stack.length - 1]
    const path = paths.shift()
    const preTabs = countTabs(prePath)
    const tabs = countTabs(path)
    if (preTabs === tabs) {
      stack.pop()
    } else if (preTabs > tabs) {
      stack = stack.slice(0, tabs)
    }
    if (isFile(path)) {
      const file = stack.concat([path]).map(e => trim(e)).join('/')
      files.push(file)
      if (maxLen < file.length) {
        maxLen = file.length
        maxFile = file
      }
    } else {
      stack.push(path)
    }
  }
  // console.log(files);

  return maxFile
};

var assert = require('assert');

assert.equal(lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'), 'dir/subdir2/file.ext')
assert.equal(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"), 'dir/subdir2/subsubdir2/file2.ext')