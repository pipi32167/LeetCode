
var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var quickSort3 = function (nums, l, u, compFn) {
  if (l >= u) {
    return nums
  }

  var t = l, i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && compFn(i, t) < 0)
    do { j-- } while(compFn(j, t) > 0)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1, compFn)
  quickSort3(nums, j + 1, u, compFn)
  return nums
}

var compare = function (s, i1, i2, j1, j2) {
  // var s1 = s.substring(i), s2 = s.substring(j);
  while(i1 < i2 && j1 < j2) {
    var char1 = s[i1], char2 = s[j1]
    if (char1 === char2) {
      i1++, j1++
    } else if (char1 < char2) {
      // console.log('compare', {i1, j1, s1, s2, res:-1});
      return -1
    } else if (char1 > char2) {
      // console.log('compare', {i1, j1, s1, s2, res:1});
      return 1
    }
  }

  if (i1 === i2 && j1 === j2) {
    // console.log('compare', {i1, j1, s1, s2, res:0});
    return 0
  } else if (i1 === i2) {
    // console.log('compare', {i1, j1, s1, s2, res:-1});
    return -1
  } else {
    // console.log('compare', {i1, j1, s1, s2, res:1});
    return 1
  }
}

// console.log(compare('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', 20, 30, 11, 21), 1);
// console.log(compare('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', 11, 21, 15, 25), -1);
// console.log(compare('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', 0, 10, 10, 20), 0);

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {

  if (s.length <= 10) {
    return []
  }
  
  var suffixes = new Array(s.length-10+1).fill(0).map(function (elem, idx) {
    return idx
  })

  quickSort3(suffixes, 0, suffixes.length-1, (i, j) => compare(s, suffixes[i], suffixes[i]+10, suffixes[j], suffixes[j]+10))
  
  var result = []
  for(var i = 0; i < suffixes.length; i++) {
    // console.log(suffixes[i], s.substr(suffixes[i], 10));
    if (compare(s, suffixes[i], suffixes[i]+10, suffixes[i+1], suffixes[i+1]+10) === 0) {
      var repeatStr = s.substr(suffixes[i], 10)
      if (result.indexOf(repeatStr) < 0) {
        result.push(repeatStr)
      }
    }
  }
  return result
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
console.log(findRepeatedDnaSequences(''));
console.log(findRepeatedDnaSequences('AAAAAAAAAAA'));
