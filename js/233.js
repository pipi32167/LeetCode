var counting = function (num) {
  var count = 0
  while(num > 0) {
    if (num % 10 === 1) {
      count++
    }
    num = Math.floor(num / 10)
  }

  return count
}

var countDigitOne = function (n) {
  var count = 0
  for(var i = 1; i <= n; i++) {
    count += counting(i)
  }
  return count
}


// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countDigitOne = function(n) {
//   if (n === 0) {
//     return 0
//   }
//   var nums = [], num = n
//   while(num > 0) {
//     nums.unshift(num % 10)
//     num = Math.floor(num / 10)
//   }

//   var count = 0
//   for(var i = 0; i < nums[0]; i++) {
//     if (i === 1) {
//       count += Math.pow(10, nums.length - 1)
//     } else {
//       count += Math.pow(10, nums.length - 1) - Math.pow(9, nums.length - 1)
//     }
//   }

//   var remainNum = Number(nums.slice(1).join(''))
//   console.log({ remainNum, count });
  
//   if (i === 1) {
//     count += remainNum
//   } else {
//     count += countDigitOne(remainNum)
//   }

//   return count
// };

console.log(countDigitOne(0), 0);
console.log(countDigitOne(9), 1);
console.log(countDigitOne(13), 6);
console.log(countDigitOne(99), 20);
// console.log(countDigitOne(123), 19);
console.log(countDigitOne(999), 300);
