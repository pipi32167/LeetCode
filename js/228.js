/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) {
    return []
  }
  let result = []
  let count = 0
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i-1] + 1) {
      count++
    } else {
      result.push([nums[i-1-count], nums[i-1]])
      count = 0
    }
  }
  result.push([nums[i-1-count], nums[i-1]])
  result = result.map(e => e[0] === e[1] ? e[0].toString() : e[0]+'->'+e[1])
  // console.log(result);
  return result
};

console.log(summaryRanges([]).join() === [].join());
console.log(summaryRanges([1]).join() === ['1'].join());
console.log(summaryRanges([0,1,2,4,5,7]).join() === ["0->2","4->5","7"].join());
console.log(summaryRanges([0,2,3,4,6,8,9]).join() === ["0","2->4","6","8->9"].join());
