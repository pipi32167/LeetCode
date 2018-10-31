
var go = function (nums) {

  if (nums.length <= 1) {
    return nums
  }
  
  var num = nums[0]
  var result = go(nums.slice(1))
  var tmp = []
  for(var i = 0; i <= result.length; i++) {
    var arr = result.slice(0)
    arr.splice(i, 0, num)
    
    tmp.push({
      arr: arr,
      str: arr.join('')
    })
  }
  var maxResult = tmp.sort(function (a, b) {
    return -a.str.localeCompare(b.str)
  })[0]

  // console.log({maxResult});
  return maxResult.arr
}

var leftTrim = function (s, char) {
  while(s[0] === char && s.length > 1) {
    s = s.slice(1)
  }
  return s
}

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  
  var result = go(nums)
  return leftTrim(result.join(''), '0')
};

console.log(largestNumber([]));
console.log(largestNumber([10, 2]));
console.log(largestNumber([3,30,34,5,9]));
console.log(largestNumber([1,2,3,4,5,6,7,8,9,0]));
console.log(largestNumber([0, 0]));
console.log(largestNumber([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));

var _  = require('./util.underscore')

var genRandomNums = function (count) {
  return _.range(0, count).map(function () {
    return _.random(0, 10000)
  })
}
console.log(largestNumber(genRandomNums(500)));
