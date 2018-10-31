/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var pos = 1;
  while(pos < nums.length) {
    for(var i = 0; i < pos; i++) {
      if (nums[i] === nums[pos]) {
        break;
      }
    }

    if (i !== pos) {
      nums.splice(pos, 1);
    } else {
      pos ++;
    }
  }

  return nums.length;
  // return nums;
};

console.log(removeDuplicates([]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

