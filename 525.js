

var getLen = function (res, i, j) {
  
  let count0 = res[j][0] - res[i][0]
  let count1 = res[j][1] - res[i][1]
  return count0 === count1 ? j - i : 0
}

var getMaxLen = function (res, i, j) {

  let count0 = res[j][0] - res[i][0]
  let count1 = res[j][1] - res[i][1]
  return Math.min(count0, count1) * 2
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let count0 = 0, count1 = 0
  let res = [[0,0]]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count0 ++
    } else {
      count1 ++
    }
    res.push([count0, count1])
  }

  if (count0 === 0 || count1 === 0) {
    return 0
  }

  // console.log(res);
  let maxLen = 0
  for (let i = 0; i < res.length; i++) {
    
    if ((res.length - i) < maxLen) {
      break
    }
    for (let j = res.length - 1; j >= 0; j--) {
      let maxLen2 = getMaxLen(res, i, j)
      // console.log({i, j, len: (res.length - i), maxLen, maxLen2 });
      if (maxLen2 <= maxLen) {
        break
      }
      let len = getLen(res, i, j)
      // console.log({i, j});
      if (maxLen < len) {
        maxLen = len
      } 
    }
  }
  // console.log(maxLen);
  return maxLen
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxLength = function(nums) {
//   let count0 = 0, count1 = 0
//   let res = [[0,0]]
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count0 ++
//     } else {
//       count1 ++
//     }
//     res.push([count0, count1])
//   }

//   let i = 0, j = res.length - 1, len = 0
//   while(i < j) {
//     len = getLen(res, i, j)
//     // console.log(len);
//     if (len > 0) {
//       break
//     }
//     if (getMaxLen(res, i, j) === getMaxLen(res, i+1, j)) {
//       i++
//     } else {
//       j--
//     }
//   }

//   return len
// };


console.log(findMaxLength([]) === 0);
console.log(findMaxLength([1]) === 0);
console.log(findMaxLength([1,1]) === 0);
console.log(findMaxLength([1,0]) === 2);
console.log(findMaxLength([0,1,0]) === 2);
console.log(findMaxLength([0,1,1,1,0]) === 2);
console.log(findMaxLength([0,1,1,1,0,1]) === 2);
console.log(findMaxLength([0,1,1,1,0,1,0]) === 4);
console.log(findMaxLength(new Array(50000).fill(0)) === 0);
console.log(findMaxLength(new Array(49999).fill(0).concat(1)) === 2);
// console.log(new Array(9).fill(0).concat(1));

