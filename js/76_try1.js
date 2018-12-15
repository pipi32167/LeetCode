let add = function (dict, char, count = 1) {
  if (dict[char]) {
    dict[char] += count
  } else {
    dict[char] = count
  }
  // dict[char] = dict[char] || 0
  // dict[char] += count
}

let counting = function (s, i = 0, j = s.length - 1) {

  let dict = {}
  for (let k = i; k <= j; k++) {
    add(dict, s[k], 1)
  }
  return dict
}

// console.log(counting('abcdefg'));
// console.log(counting('abcdefg', 1, 2));
let contains = function (dict1, dict2) {
  // console.log(dict1, dict2);

  for (const c in dict2) {
    let count = dict1[c] || 0
    if (count <= 0) {
      return false
    }
    if (count < dict2[c]) {
      // console.log(c);
      return false
    }
  }
  return true
}

// console.log(contains(counting('abc'), counting('ab')) === true);
// console.log(contains(counting('ab'), counting('ab')) === true);
// console.log(contains(counting('ac'), counting('ab')) === false);


let clone = function (dict) {
  return Object.assign({}, dict)
}

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   let charsOfT = counting(t)
//   let minLen = s.length + 1
//   let minRes = ''
//   for (let i = 0; i < s.length; i++) {
//     let dict = counting(s, i, i + minLen - 2)
//     let dict2 = clone(dict)
//     let hit = false
//     for (let j = minLen - 1; j >= t.length; j--) {
//       if (!contains(dict2, charsOfT)) {
//         break
//       }
//       hit = true
//       minLen = j
//       minRes = s.slice(i, i + j)
//       // console.log('hit', i, i+j);
//       add(dict2, s[i + j - 1], -1)
//     }
//     if (!hit) {
//       continue
//     }
//     // console.log(minRes);
//     add(dict2, s[i], -1)
//     // console.log(dict2);
//     for (let k = i + 1; k < i + minLen; k++) {
//       if (!contains(dict2, charsOfT)) {
//         break
//       }
//       minLen = i + minLen - k
//       minRes = s.slice(k, k + minLen)
//       add(dict2, s[k], -1)
//     }
//   }
//   // console.log(minRes);
//   return minRes
// };


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let charsOfT = counting(t)
  let charsOfS = counting(s)
  for (const c in charsOfT) {
    if (charsOfS[c] === undefined) {
      charsOfS[c] = 0
    }
  }
  for (const c in charsOfS) {
    if (charsOfT[c] === undefined) {
      charsOfT[c] = 0
    }
  }
  // console.log({charsOfS, charsOfT});
  let dict = charsOfS
  if (!contains(dict, charsOfT)) {
    return ''
  }
  let minLen = s.length + 1
  let minRes = [0, s.length]
  let i = 0
  let j = s.length - 1
  while (j < s.length) {

    if (dict[s[i]] < charsOfT[s[i]] || dict[s[j]] < charsOfT[s[j]]) {
      dict[s[i]]--
      i++, j++
      dict[s[j]]++
      continue
    }
    let hit = false
    while (i < j) {
      const c = s[i]
      i++, dict[c]--
      if (dict[c] < charsOfT[c]) {
        break
      }
      hit = true
    }
    i--, dict[s[i]]++
    console.log('log1', i, j, s.slice(i, j + 1), hit);
    if (hit && minLen > j - i + 1) {
      minLen = j - i + 1
      minRes = [i, j + 1]
    }
    hit = false
    while (i < j) {
      const c = s[j]
      j--, dict[c]--
      if (dict[c] < charsOfT[c]) {
        break
      }
      hit = true
    }
    j++, dict[s[j]]++
    console.log('log2', i, j, s.slice(i, j + 1), hit);
    if (hit && minLen > j - i + 1) {
      minLen = j - i + 1
      minRes = [i, j + 1]
    }
    dict[s[i]]--
    i++, j++
    dict[s[j]]++
    // console.log('log3', i, j, s.slice(i, j + 1), hit, dict);
  }
  console.log(minRes, s, t, s.slice(minRes[0], minRes[1]));
  return s.slice(minRes[0], minRes[1])
};

// const START_CODE = 'A'.charCodeAt(0)
// const END_CODE = 'z'.charCodeAt(0)

// const fromString = function (s) {
//   return s.split('').map(e => e.charCodeAt(0) - START_CODE)
// }

// // console.log(fromString('abcdefghjiklmnoprstuvwxyzABCDEFGHJIKLMNOPRSTUVWXYZ'));


// let add = function (dict, char, count = 1) {
//   dict[char] += count
// }

// let counting = function (s, i = 0, j = s.length - 1) {
//   // console.log(END_CODE-START_CODE+1);
//   let dict = new Array(END_CODE-START_CODE+1).fill(0)
//   for (let k = i; k <= j; k++) {
//     dict[s[k]] ++
//   }
//   return dict
// }

// // console.log(counting(fromString('abcdefg')));
// // console.log(counting(fromString('abcdefg'), 1, 2));
// // console.log(counting(fromString('abcdefghjiklmnoprstuvwxyzABCDEFGHJIKLMNOPRSTUVWXYZ')));

// let contains = function (dict1, dict2) {
//   // console.log(dict1, dict2);
//   for (let i = 0; i < dict2.length; i++) {
//     if (dict1[i] < dict2[i]) {
//       return false
//     }
//   }
//   return true
// }

// // console.log(contains(counting(fromString('abc')), counting(fromString('ab'))) === true);
// // console.log(contains(counting(fromString('ab')), counting(fromString('ab'))) === true);
// // console.log(contains(counting(fromString('ac')), counting(fromString('ab'))) === false);


// let clone = function (dict) {
//   return dict.slice(0)
//   // return Object.assign({}, dict)
// }

// let COUNT = 0

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   // console.log(s.length, t.length);
//   if (s.length < t.length) {
//     return ''
//   }
//   if (s.length === t.length) {
//     return s === t ? s : ''
//   }

//   s = fromString(s)
//   t = fromString(t)

//   let charsOfT = counting(t)
//   let minLen = s.length + 1
//   let minRes = ''
//   for (let i = 0; i < s.length; i++) {
//     let dict = counting(s, i, i + minLen - 2)
//     let dict2 = clone(dict)
//     let hit = false
//     for (let j = minLen - 1; j >= t.length; j--) {
//       const char = s[i + j - 1]

//       if (hit && dict2[char] < charsOfT[char]) {
//         break
//       }
//       if (!contains(dict2, charsOfT)) {
//         break
//       }
//       hit = true
//       minLen = j
//       // minRes = s.slice(i, i + j)
//       minRes = [i, i + j]
//       // console.log('hit1', i, i+j);
//       dict2[char] -= 1
//     }
//     if (!hit) {
//       continue
//     }
//     dict2[s[i]] -= 1
//     for (let k = i + 1; k < i + minLen; k++) {
//       const char = s[k-1]
//       if (dict2[char] < charsOfT[char]) {
//         break
//       }
//       minLen = i + minLen - k
//       // minRes = s.slice(k, k + minLen)
//       minRes = [k, k + minLen]
//       // console.log('hit2', k, k + minLen);
//       dict2[s[k]] -= 1
//     }
//   }
//   if (minRes) {
//     // const res = minRes.map(e => String.fromCharCode(e + START_CODE)).join('')
//     const res = s.slice(minRes[0], minRes[1]).map(e => String.fromCharCode(e + START_CODE)).join('')
//     // console.log(res);
//     return res
//   }

//   return ''
//   // return minRes
// };

// console.log(minWindow('ADOBECODEBANC', 'ABC') === 'BANC');
// console.log(minWindow('A', 'ABC') === '');
// console.log(minWindow('ABC', 'ABC') === 'ABC');
// console.log(minWindow('ABDASHALSH', 'ABC') === '');

var { s, t, r } = require('./76_input').sample5
console.log(minWindow(s, t) === r);
// var { s, t, r } = require('./76_input').sample1
// console.log(minWindow(s, t) === r);
// var { s, t, r } = require('./76_input').sample2
// console.log(minWindow(s, t) === r);
// var { s, t, r } = require('./76_input').sample3
// console.log(minWindow(s, t) === r);
// var { s, t, r } = require('./76_input').sample4
// console.log(minWindow(s, t) === r);
// var { s, t, r } = require('./76_input').sample5
// console.log(minWindow(s, t) , r);