var getCoodinate = function (param, pos) {
  if (param.isRow) {
    return {
      x: param.value,
      y: pos,
    }
  } else {
    return {
      x: pos,
      y: param.value,
    }
  }
}

var getValue = function (matrix, param, pos) {
  
  var m = matrix.length;
  var n = matrix[0].length;
  var co = getCoodinate(param, pos);
  return matrix[co.x][co.y];
}

var binarySearchX = function (matrix, target, param, pos) {
  
  var m = matrix.length;
  var n = matrix[0].length;
  var co = getCoodinate(param, pos)
  var isRow = !param.isRow
  var newParam = { 
    ...param, 
    isRow,
    value: isRow ? co.x : co.y,
  }

  // console.log('binarySearchX', newParam, co);

  if (newParam.isRow && newParam.searchRows[newParam.value] || 
    !newParam.isRow && newParam.searchCols[newParam.value]) {
    // console.log(param.isRow, param.searchRows[param.value], param.searchCols[param.value]);
    
    return false;
  }

  return binarySearch(matrix, target, newParam, 0, isRow ? n - 1 : m - 1);
}

var binarySearch = function (matrix, target, param, begin, end) {

  // console.log('binarySearch', param, begin, end);

  if (param.isRow) {
    param.searchRows[param.value] = true;
  } else {
    param.searchCols[param.value] = true;
  }
  
  var mid = Math.floor((begin + end) / 2);
  var midValue = getValue(matrix, param, mid);
  // console.log({begin, end, mid});
  
  if (midValue === target) {
    return true;
  }

  if (begin === end) {
    return binarySearchX(matrix, target, param, begin)
  }
  
  if (begin === mid) {
    var endValue = getValue(matrix, param, end);

    // console.log({ endValue });
    
    if (endValue === target) {
      return true;
    } else if (midValue > target) {
      return binarySearchX(matrix, target, param, begin);
    } else if (endValue < target) {
      return binarySearchX(matrix, target, param, end);
    } else {
      return binarySearchX(matrix, target, param, begin) || binarySearchX(matrix, target, param, end);
    }
  }


  if (midValue > target) {
    return binarySearch(matrix, target, param, begin, mid);
  }

  if (midValue < target) {
    return binarySearch(matrix, target, param, mid, end);
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
    return false
  }
  var n = matrix[0].length;
  if (n === 0) {
    return false
  } 
  var param = {
    searchRows: {},
    searchCols: {},
    value: 0,
    isRow: true,
  }

  return binarySearch(matrix, target, param, 0, n - 1);  
};

var matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(searchMatrix(matrix, 5));
console.log(searchMatrix(matrix, 20));
console.log(searchMatrix(matrix, -1));
console.log(searchMatrix(matrix, 500));

matrix = [
  [1,3,5,7,9],
  [2,4,6,8,10],
  [11,13,15,17,19],
  [12,14,16,18,20],
  [21,22,23,24,25],
]
console.log(searchMatrix(matrix, 13));
