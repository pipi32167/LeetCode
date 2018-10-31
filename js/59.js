var setCircle = function (matrix, nums) {
  if (nums.length === 0) {
    return matrix;
  }

  var n = matrix.length + 2;
  var newMatrix = [];
  for(var i = 1; i < n - 1; i++) {
    for(var j = 1; j < n - 1; j++) {
      newMatrix[i] = newMatrix[i] || [];
      newMatrix[i][j] = matrix[i - 1][j - 1];
    }
  }

  // console.log({newMatrix});

  for(var i = 1; i < n; i ++) {
    var num = nums[0]
    newMatrix[i] = newMatrix[i] || []
    newMatrix[i][0] = num;
    nums.shift();
    // result.push(newMatrix[i][0]);
  }
  for(var i = 1; i < n; i ++) {
    var num = nums[0]
    newMatrix[n-1] = newMatrix[n-1] || []
    newMatrix[n-1][i] = num;
    nums.shift();
    // result.push(newMatrix[n-1][i]);
  }

  for(var i = n - 2; i >= 0; i --) {
    var num = nums[0]
    newMatrix[i] = newMatrix[i] || []
    newMatrix[i][n-1] = num;
    nums.shift();
    // result.push(newMatrix[i][n-1]);
  }
  
  for(var i = n - 2; i >= 0; i --) {
    var num = nums[0]
    newMatrix[0] = newMatrix[0] || []
    newMatrix[0][i] = num;
    nums.shift();
    // result.push(newMatrix[0][i]);
  }

  return setCircle(newMatrix, nums);
}

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  var nums = [];
  for(var i = n * n; i >= 1; i--) {
    nums.push(i);
  }

  var matrix
  if (n === 0) {
    return [];
  }

  if (n % 2 === 0) {
    matrix = [ 
      [nums[3], nums[2]],
      [nums[0], nums[1]],
    ];
    nums.splice(0, 4);
  } else {
    matrix = [ [nums[0]] ];
    nums.shift();
  }

  return setCircle(matrix, nums)
};

console.log(generateMatrix(0));
console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
