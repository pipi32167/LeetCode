
var isBeautiful = function (nums, l, u) {
  let sum = nums[l] + nums[u]
  for(let i = l + 1; i < u; i++) {
    if (nums[i] * 2 === sum) {
      return false
    }
  }
  return true
}

var isBeautiful2 = function (nums) {
  
  for(var i = 3; i <= nums.length; i++) {
    for(var j = 0; j <= nums.length - i; j++) {
      // console.log({ i, j, res: isBeautiful(nums, j, j+i-1) });
      if (!isBeautiful(nums, j, j+i-1)) {
        return false
      }
    }
  }
  return true
}

// console.log(isBeautiful2([1,2,3]) === false);
// console.log(isBeautiful2([1,3,2]) === true);
// console.log(isBeautiful2([2,1,4,3]) === true);
// console.log(isBeautiful2([4,5,2,3,1]) === false);

/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray2 = function(N) {
  if (N === 1) {
    return [1]
  }
  var res = beautifulArray2(N-1)
  for(var i = 0; i < N; i++) {
    var res2 = res.slice(0, i).concat(N).concat(res.slice(i))
    if (isBeautiful2(res2)) {
      return res2
    }
  }
  return res
};

/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function(N) {
  let res = beautifulArray2(N)
  if (res.length === N) {
    return res
  }

  var remainNums = []
  for(var i = 1; i <= N; i++) {
    if (res.indexOf(i) < 0) {
      remainNums.push(i)
      if (remainNums.length + res.length === N) {
        break
      }
    }
  }
  console.log('hit1');
  
  while (remainNums.length > 0) {
    let num = remainNums[0]
    for(var i = 0; i <= res.length; i++) {
      var res2 = res.slice(0, i).concat(num).concat(res.slice(i))
      if (isBeautiful2(res2)) {
        res = res2
        remainNums.shift()
        break
      }
    } 
  }
};

// var random = function (n) {
//   return Math.floor(Math.random() * n)
// }

// var swap = function (arr, i, j) {
//   var tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
// }

// var shuffle = function (nums) {
//   for(var i = 0; i < nums.length; i++) {
//     swap(nums, i, random(nums.length))
//   }
// }

// /**
//  * @param {number} N
//  * @return {number[]}
//  */
// var beautifulArray = function(N) {
//   var res = new Array(N).fill(0).map((e, i) => i+1)
//   while(!isBeautiful2(res)) {
//     // shuffle(res)
//     swap(res, random(res.length), random(res.length))
//   }
//   return res
// };


console.log(isBeautiful2(beautifulArray(3)));
console.log(isBeautiful2(beautifulArray(4)));
console.log(isBeautiful2(beautifulArray(5)));
console.log(isBeautiful2(beautifulArray(1000)));
