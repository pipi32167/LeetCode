exports.map = function (collection, mapFn) {
  if (collection instanceof Array) {
    return collection.map(mapFn)
  } else if (collection instanceof Object) {
    return Object.keys(collection).map(function (key) {
      return collection[key]
    }).map(mapFn)
  }
}

exports.range = function range(begin, end) {
  var result = []
  for (var i = begin; i < end; i++) {
    result.push(i)
  }
  return result;
}

exports.random = function random(l, u) {

  if (arguments.length === 0) {
    return Math.random();
  } else if (arguments.length === 1) {
    return Math.floor(Math.random() * l)
  } else {
    return Math.floor(Math.random() * (u - l)) + l
  }
}

// console.log(random(1, 3));
// console.log(random(1, 3));
// console.log(random(1, 3));
// console.log(random(1, 3));
// console.log(random(2));
// console.log(random(2));
// console.log(random(2));
// console.log(random(2));


var unique = exports.unique = function unique(nums) {

  var repeat = []
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && repeat.indexOf(j) < 0) {
        repeat.push(j)
      }
    }
  }

  repeat = repeat.sort(function (a, b) {
    return a - b
  })

  while (repeat.length > 0) {
    nums.splice(repeat.pop(), 1)
  }
  return nums
}

// console.log(unique([1,1,1,1,1,1,1]));
// console.log(unique([2,1,1,1,1,1,1]));
// console.log(unique([1,1,1,1,1,1,2]));
// console.log(unique([1,1,1,2,2,1,1]));

var swap = function (nums, i, j) {
  const t = nums[i]
  nums[i] = nums[j]
  nums[j] = t
}

var shuffle = function (nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const rand = Math.floor(Math.random() * len)
    swap(nums, i, rand)
  }
  return nums
}

console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));
var time = Date.now()
shuffle(new Array(1000000).fill(0).map((e, idx) => idx))
console.log('shuffle cost: %d ms', Date.now() - time)


var shuffle_fisher_yates = function (nums) {
  const len = nums.length
  for (let i = len - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    swap(nums, i, rand)
  }
  return nums
}

console.log(shuffle_fisher_yates([1, 2, 3, 4, 5]));
console.log(shuffle_fisher_yates([1, 2, 3, 4, 5]));
console.log(shuffle_fisher_yates([1, 2, 3, 4, 5]));
console.log(shuffle_fisher_yates([1, 2, 3, 4, 5]));
console.log(shuffle_fisher_yates([1, 2, 3, 4, 5]));
var time = Date.now()
shuffle_fisher_yates(new Array(1000000).fill(0).map((e, idx) => idx))
console.log('shuffle_fisher_yates cost: %d ms', Date.now() - time)
/**
 * Fisher–Yates shuffle
 */
Array.prototype.shuffle = function () {
  var input = this;

  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}
var time = Date.now()
new Array(1000000).fill(0).map((e, idx) => idx).shuffle()
console.log('Array.shuffle cost: %d ms', Date.now() - time)