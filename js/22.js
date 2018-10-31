var brackets = {
  '(': ')',
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var results = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (brackets[char]) {
      results.push(char)
    } else if(brackets[results[results.length - 1]] === char) {
      results.pop();
    } else {
      return false;
    }
  }

  // console.log(results);
  
  return results.length === 0;
};


var buildTree = function (n, char) {
  if (n === 0) {
    return null;
  }

  char = char || '(';

  var root = {
    val: char,
    left: buildTree(n - 1, '('),
    right: buildTree(n - 1, ')'),
  }
  return root;
}

var collectPaths = function (root, path) {
  path = path || ''

  path += root.val;

  if (!root.left || !root.right) {
    return path;
  }

  return [
    collectPaths(root.left, path),
    collectPaths(root.right, path),
  ];
}

var flatten = function (arr) {
  var results = [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      results = results.concat(flatten(arr[i]))
    } else {
      results.push(arr[i])
    }
  }
  return results;
}

// console.log(buildTree(4));

// console.log('%j', collectPaths(buildTree(4)));


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  
  var results = buildTree(2 * n);
  results = collectPaths(results);
  results = flatten(results);
  return results.filter(isValid);
};

console.log(generateParenthesis(2));
