var getCoordinate = function (pos, n) {
  var x = Math.floor(pos / n);
  var y = pos % n;
  return { x: x, y: y }
}

var getValue = function (matrix, pos) {
  var m = matrix.length;
  var n = matrix[0].length;
  var coordinate = getCoordinate(pos, n)
  
  return matrix[coordinate.x][coordinate.y]
}

var binarySearch = function (matrix, target, begin, end) {
  
  var mid = Math.floor((begin + end) / 2);
  var midValue = getValue(matrix, mid);
  // console.log({begin, end, mid});
  
  if (midValue === target) {
    return true;
  }

  if (begin === end) {
    return false;
  }
  
  if (begin === mid) {
    if (getValue(matrix, end) === target) {
      return true;
    } else {
      return false;
    }
  }


  if (midValue > target) {
    return binarySearch(matrix, target, begin, mid - 1);
  }

  if (midValue < target) {
    return binarySearch(matrix, target, mid + 1, end);
  }
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var m = matrix.length;
  if (m === 0) {
    return false;
  }
  var n = matrix[0].length;
  if (n === 0) {
    return false;
  }
  return binarySearch(matrix, target, 0, m * n - 1);
}; 

console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 3));

console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], -1));


console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 2));

console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 100));

console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 13));
console.log(searchMatrix([], 0));
console.log(searchMatrix([[]], 0));

