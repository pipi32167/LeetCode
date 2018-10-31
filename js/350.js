/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var nums1Count = {}, nums2Count = {}
  for(var i = 0; i < nums1.length; i++) {
    nums1Count[nums1[i]] = nums1Count[nums1[i]] || 0
    nums1Count[nums1[i]] ++;
  }
  for(var i = 0; i < nums2.length; i++) {
    nums2Count[nums2[i]] = nums2Count[nums2[i]] || 0
    nums2Count[nums2[i]] ++;
  }
  var result = []
  for(var num in nums1Count) {
    var count1 = nums1Count[num]
    var count2 = nums2Count[num] || 0
    var count = Math.min(count1, count2)
    num = Number(num)
    for(var i = 0; i < count; i++) {
      result.push(num)
    }
  }
  return result;
};

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([1,2,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));
