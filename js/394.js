var assert = require('assert');


const CODE_0 = '0'.codePointAt(0)
const CODE_9 = '9'.codePointAt(0)
var isNum = function (char) {
  // console.log(char, typeof char);
  
  const code = char.codePointAt(0)
  return code >= CODE_0 && code <= CODE_9
}

var findStart = function (s, i) {
  while(i > 0 && isNum(s[i - 1])) {
    i --
  }
  return i
}

var convert = function (nums, chars) {
  
  const num = Number(nums.join(''))
  return Array(num).fill(0).reduce((s) => s.concat(chars), [])
}
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var decodeString = function (s) {

//   s = Array.from(s)
//   // console.log(s);

//   let hit
//   do {
//     hit = false
//     let brackets = 0
//     let start1, start2, end1, end2
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === '[') {
//         brackets ++
//         if (brackets === 1) {
//           start1 = findStart(s, i)
//           end1 = i
//           start2 = i+1
//         }
        
//       } else if (s[i] === ']') {
//         brackets --
//         if (brackets === 0) {
//           end2 = i
//           s.splice(start1, end2 + 1 - start1, ...convert(s.slice(start1, end1), s.slice(start2, end2)))
//           hit = true
//           break
//         }
//       }
//     }
//   } while(hit)

//   return s.join('')
// };
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

  s = Array.from(s)
  // console.log(s);

  let brackets = 0
  let start1, start2, end1, end2
  let i = 0
  while (i < s.length) {
    if (s[i] === '[') {
      brackets ++
      if (brackets === 1) {
        start1 = findStart(s, i)
        end1 = i
        start2 = i+1
      }
    } else if (s[i] === ']') {
      brackets --
      if (brackets === 0) {
        end2 = i
        s.splice(start1, end2 + 1 - start1, ...convert(s.slice(start1, end1), s.slice(start2, end2)))
        i = start1
      }
    }

    i++
  }

  // console.log(s.length);
  return s.join('')
};


assert.equal(decodeString("3[a]2[bc]"), "aaabcbc")
assert.equal(decodeString("3[a2[c]]"), "accaccacc")
assert.equal(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"), "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef")
assert.equal(decodeString("3[a]2[b4[F]c]"), "aaabFFFFcbFFFFc")
assert.equal(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef")
assert.equal(decodeString("3[3[3[3[3[3[3[3[3[z]]]]]]]]]"), Array(19683).fill('z').join(''))