/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var paths = path.split('/');
  var result = [];
  // console.log(paths);
  
  for(var i = 0; i < paths.length; i++) {
    if (paths[i] === '' || paths[i] === '.') {
      continue;
    } else if (paths[i] === '..') {
      result.pop();
    } else {
      result.push(paths[i])
    }
  }
  return '/' + result.join('/')
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/a/./b/../../c/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/..."));