
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

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  
  var charCounts = {}
  for (var i = 0; i < s.length; i++) {
    charCounts[s[i]] = charCounts[s[i]] || { char: s[i], i: i, count: 0 }
    charCounts[s[i]].count ++
  }

  var result = values(charCounts).sort(function (a, b) {
    if (a.count === b.count) {
      return a.i - b.i
    }
    return a.count - b.count
  })

  return result[0] && result[0].count === 1 ? result[0].i : -1
};

console.log(firstUniqChar('leetcode'), 0);
console.log(firstUniqChar('loveleetcode'), 2);
console.log(firstUniqChar('cc'), -1);

