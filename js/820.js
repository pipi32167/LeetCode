var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var quickSort3 = function (nums, l, u, cmpFn = (a, b) => a - b) {
  if (l >= u) {
    return nums
  }

  var t = nums[l], i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && cmpFn(nums[i], t) < 0)
    do { j-- } while(cmpFn(nums[j], t) > 0)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1, cmpFn)
  quickSort3(nums, j + 1, u, cmpFn)
  return nums
}

var endsWith = function (w1, w2) {
  
  if (w1.length < w2.length) {
    return false
  }
  for (let i = 0; i < w2.length; i++) {
    if (w1[w1.length - 1 - i] !== w2[w2.length - 1 - i]) {
      return false
    }
  }
  return true
}

// /**
//  * @param {string[]} words
//  * @return {number}
//  */
// var minimumLengthEncoding = function (words) {

//   quickSort3(words, 0, words.length-1, (a, b) => b.length - a.length)

//   let len = 0
//   for (let i = 0; i < words.length; i++) {
//     if (!words[i]) {
//       continue
//     }

//     len += words[i].length + 1
//     for (let j = i + 1; j < words.length; j++) {
//       if (!words[j]) {
//         continue
//       }
//       if(endsWith(words[i], words[j])) {
//         words[j] = null
//       }
//     }
//   }
//   return len
// };

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {

  quickSort3(words, 0, words.length-1, (a, b) => {

    const len = Math.min(a.length, b.length) 
    for (let i = 0; i < len; i++) {
      const res = a.codePointAt(a.length - 1 - i) - b.codePointAt(b.length - 1 - i)
      if (res !== 0) {
        return res
      }
    }
    return b.length - a.length
  })

  // console.log(words);

  let len = 0
  for (let i = 0; i < words.length; i++) {
    if (!words[i]) {
      continue
    }

    len += words[i].length + 1
    for (let j = i + 1; j < words.length; j++) {
      if (!words[j]) {
        continue
      }
      if(endsWith(words[i], words[j])) {
        words[j] = null
      } else {
        break
      }
    }
  }
  return len
};


var assert = require('assert');
for (let i = 0; i < 100; i++) {
  var words = require('./820_input').sample1.slice(0);
  assert.equal(minimumLengthEncoding(words), 13964)
}
var words = require('./820_input').sample1.slice(0);
assert.equal(minimumLengthEncoding(words), 13964)
var words = ["time", "me", "bell"]
assert.equal(minimumLengthEncoding(words), 10)
var words = ["me", "time"]
assert.equal(minimumLengthEncoding(words), 5)