
exports.map = function (collection, mapFn) {
  if (collection instanceof Array) {
    return collection.map(mapFn)
  } else if (collection instanceof Object) {
    return Object.keys(collection).map(function (key) {
      return collection[key]
    }).map(mapFn)
  }
}

exports.range = function range (begin, end) {
  var result = []
  for(var i = begin; i < end; i++) {
    result.push(i)
  }
  return result;
}

exports.random = function random (l, u) {

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


var unique = exports.unique = function unique (nums) {
  
  var repeat = []
  for(var i = 0; i < nums.length; i++) {
    for(var j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && repeat.indexOf(j) < 0) {
        repeat.push(j)
      }
    }
  }

  repeat = repeat.sort(function (a, b) {
    return a - b
  })

  while(repeat.length > 0) {
    nums.splice(repeat.pop(), 1)
  }
  return nums
}

// console.log(unique([1,1,1,1,1,1,1]));
// console.log(unique([2,1,1,1,1,1,1]));
// console.log(unique([1,1,1,1,1,1,2]));
// console.log(unique([1,1,1,2,2,1,1]));
