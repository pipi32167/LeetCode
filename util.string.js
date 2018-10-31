
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

var compare = function (s, i, j) {
  // var s1 = s.substring(i), s2 = s.substring(j);
  while(i < s.length && j < s.length) {
    var char1 = s[i], char2 = s[j]
    if (char1 === char2) {
      i++, j++
    } else if (char1 < char2) {
      // console.log('compare', {i, j, s1, s2, res:-1});
      return -1
    } else if (char1 > char2) {
      // console.log('compare', {i, j, s1, s2, res:1});
      return 1
    }
  }

  if (i === s.length && j === s.length) {
    // console.log('compare', {i, j, s1, s2, res:0});
    return 0
  } else if (i === s.length) {
    // console.log('compare', {i, j, s1, s2, res:-1});
    return -1
  } else {
    // console.log('compare', {i, j, s1, s2, res:1});
    return 1
  }
}

// console.log(compare('01234567890123456789', 0, 0), 0);
// console.log(compare('01234567890123456789', 0, 10), 1);
// console.log(compare('01234567890123456789', 10, 0), -1);
// console.log(compare('banana', 1, 3), 1);
// console.log(compare('banana', 3, 1), -1);
// console.log(compare('banana', 0, 1), 1);

var calcMaxLen = function (s, i, j) {
  var k = 0
  while(i < s.length && j < s.length) {
    if (s[i++] !== s[j++]) {
      break
    }
    k++
  }
  return k
}

// console.log(calcMaxLen('banana', 1, 3));

/**
 * 
 * @param {String} s 
 */
var longestPhrase = function (s) {
  
  var suffixes = new Array(s.length).fill(0).map(function (elem, idx) {
    return idx
  })

  // to be fixed
  quickSort3(suffixes, 0, suffixes.length - 1, function (i, j) {
    return compare(s, i, j)
  })
  
  var maxLen = 0, maxi
  for(var i = 1; i < suffixes.length; i++) {
    var len = calcMaxLen(s, suffixes[i-1], suffixes[i])
    if (maxLen < len) {
      maxLen = len
      maxi = i-1
    }
  }

  return s.substring(suffixes[maxi], suffixes[maxi] + maxLen)
}

// console.log(longestPhrase('banana'));

