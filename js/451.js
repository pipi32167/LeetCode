
var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return nums
  }

  var t = nums[l].count, i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && nums[i].count < t)
    do { j-- } while(nums[j].count > t)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1)
  quickSort3(nums, j + 1, u)
  return nums
}

var map = function (collection, mapFn) {
  if (collection instanceof Array) {
    return collection.map(mapFn)
  } else if (collection instanceof Object) {
    return Object.keys(collection).map(function (key) {
      return collection[key]
    }).map(mapFn)
  }
}

var values = function (collection) {
  return map(collection, function (item) {
    return item
  })
}

var repeat = function (item, count) {
  var result = []
  for(var i = 0; i < count; i++) {
    result.push(item)
  }
  return result
}

var sort = function (items) {
  return quickSort3(items, 0, items.length - 1)
}

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  
  var charsCount = {}
  for(var i = 0; i < s.length; i++) {
    charsCount[s[i]] = charsCount[s[i]] || { char: s[i], count: 0 }
    charsCount[s[i]].count++
  }

  var result = values(charsCount)
  result = sort(result)
  return result.reverse().map(function (elem) {
    return repeat(elem.char, elem.count).join('')
  }).join('')
};

console.log(frequencySort('tree'), 'eert');
