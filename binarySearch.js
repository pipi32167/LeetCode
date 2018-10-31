var debug = console.log

var binarySearch = function (nums, num, posMin, posMax) {

  if (nums.length === 0) {
    debug('return 0.1');
    return 0;
  }

  if (posMin === undefined) {
    posMin = 0;
  }

  if (posMax === undefined) {
    posMax = nums.length - 1;
  }

  var posMid = Math.floor((posMax + posMin) / 2)
  
  if (nums[posMid] === num) {
    debug('return 1');
    return posMid + 1;
  } else if (posMid === posMin) {
    if (num < nums[posMin]) {
      debug('return 2');
      return posMin;
    } if(num > nums[posMax]) {
      debug('return 3');
      return posMax + 1;
    } else {
      debug('return 4')
      return posMax;
    }
  } else {
    if (nums[posMid] < num) {
      return binarySearch(nums, num, posMid, posMax);
    } {
      return binarySearch(nums, num, posMin, posMid);
    }
  }
} 

console.log(binarySearch([], 1), 0);
console.log(binarySearch([1], 2), 1);
console.log(binarySearch([1,2,3,4,5], 1), 1);
console.log(binarySearch([1,2,3,4,5], 5), 5);
console.log(binarySearch([1,2,3,4,5], 3), 3);
console.log(binarySearch([1,2,3,4,5], 0), 0);
console.log(binarySearch([1,2,3,4,5], 6), 5);
console.log(binarySearch([ 4, 7, 13, 19 ], 14), 3);



var sortedPush = function (arr, elem) {
  
  var idx = binarySearch(arr, elem);
  arr.splice(idx, 0, elem);
  return arr;
}

// console.log(sortedPush([], 1));
// console.log(sortedPush([1,2,3,4,5], 1));
// console.log(sortedPush([1,2,3,4,5], 5));
// console.log(sortedPush([1,2,3,4,5], 3));
// console.log(sortedPush([1,2,3,4,5], 0));
// console.log(sortedPush([1,2,3,4,5], 6));
