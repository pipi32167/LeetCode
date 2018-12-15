
// const CODE_START = 'A'.charCodeAt(0)
// const CODE_END = 'z'.charCodeAt(0)
// const CODES_LEN = CODE_END - CODE_START + 1
// var mkCharsArray = function () {
//   return Array(CODES_LEN).fill(0)
// }

// var toCode = function (c) {
//   return c.charCodeAt(0) - CODE_START
// }

// var calc = function (s, l, u) {
//   const map = new Map
//   for (let i = l; i <= u; i++) {
//     map.set(toCode(s[i]), (map.get(toCode(s[i])) || 0) + 1)
//   }
//   return map
// }

// var isMatch = function (smaps, i, j, tmap) {
  
//   for (const [k, v2] of tmap) {
//     const v1 = (smaps[j+1].get(k) || 0) - (smaps[i].get(k) || 0)
//     if (v1 < v2) {
//       // console.log('isMatch fail', { s: s.slice(i, j + 1), t });
//       return false
//     }
//   }
//   // console.log('isMatch success', { s: s.slice(i, j + 1), t });
//   return true
// }

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   let now = Date.now()
//   const tmap = calc(t, 0, t.length - 1)
//   const smaps = Array(s.length + 1).fill(0)
//   smaps[0] = new Map
//   let sum = new Map
//   for (let i = 0; i < s.length; i++) {
//     sum.set(toCode(s[i]), (sum.get(toCode(s[i])) || 0) + 1)
//     smaps[i+1] = new Map(sum)
//   }

//   console.log('cost 1', Date.now() - now);
//   now = Date.now()
  
//   let min = s.length + 1,
//     minRes
//   let i = 0,
//     j = t.length - 2
//   while (j < s.length) {
//     while (j + 1 < s.length && !isMatch(smaps, i, j, tmap)) {
//       j++
//     }
//     while (j - i + 2 >= t.length && isMatch(smaps, i + 1, j, tmap)) {
//       i++
//     }
//     if (isMatch(smaps, i, j, tmap) && min > j - i + 1) {
//       min = j - i + 1
//       minRes = [i, j]
//     }
//     i++
//     j++
//   }

//   console.log('cost 2', Date.now() - now);
//   now = Date.now()

//   if (!minRes) {
//     return ''
//   }
//   [i, j] = minRes
//   // console.log(s.slice(i, j + 1));
//   return s.slice(i, j + 1)
// };


// const CODE_START = 'A'.charCodeAt(0)
// const CODE_END = 'z'.charCodeAt(0)
// const CODES_LEN = CODE_END - CODE_START + 1
// var mkCharsArray = function () {
//   return Array(CODES_LEN).fill(0)
// }

// var toCode = function (c) {
//   return c.charCodeAt(0) - CODE_START
// }

// // var fromCode = function (c) {
// //   return String.fromCharCode(c + CODE_START)
// // }

// var calc = function (s, l, u) {
//   const map = mkCharsArray()
//   for (let i = l; i <= u; i++) {
//     map[toCode(s[i])] ++
//   }
//   return map
// }

// var isMatch = function (smaps, i, j, tmap) {
//   for (let k = 0; k < tmap.length; k++) {
//     const v2 = tmap[k];
//     const v1 = smaps[j+1][k] - smaps[i][k]
//     if (v1 < v2) {
//       // console.log('isMatch fail', { char: fromCode(k), v1, v2, i, j });
//       return false
//     }
//   }
//   // console.log('isMatch success', { char: fromCode(k), v1, v2, i, j });
//   return true
// }
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   let now = Date.now()
//   const tmap = calc(t, 0, t.length - 1)
//   const smaps = Array(s.length + 1).fill(0)
//   smaps[0] = mkCharsArray()
//   let sum = mkCharsArray()
//   for (let i = 0; i < s.length; i++) {
//     // console.log(toCode(s[i]), s[i]);
//     sum[toCode(s[i])] ++ 
//     smaps[i+1] = Array.from(sum)
//   }
//   // console.log(tmap, toCode('f'), tmap[toCode('f')]);
//   console.log('cost 1', Date.now() - now);
//   now = Date.now()
  
//   let min = s.length + 1,
//     minRes
//   let i = 0,
//     j = t.length - 2
//   while (j < s.length) {
//     while (j + 1 < s.length && !isMatch(smaps, i, j, tmap)) {
//       j++
//     }
//     while (j - i + 2 >= t.length && isMatch(smaps, i + 1, j, tmap)) {
//       i++
//     }
//     if (isMatch(smaps, i, j, tmap) && min > j - i + 1) {
//       min = j - i + 1
//       minRes = [i, j]
//     }
//     i++
//     j++
//   }

//   console.log('cost 2', Date.now() - now);
//   now = Date.now()

//   if (!minRes) {
//     return ''
//   }
//   [i, j] = minRes
//   // console.log(s.slice(i, j + 1));
//   return s.slice(i, j + 1)
// };

// var CHARS
// var mkCharsArray = function () {
//   return Array(CHARS.size).fill(0)
// }

// var toCode = function (c) {
//   return CHARS.get(c)
// }

// var calc = function (s, l, u) {
//   const map = mkCharsArray()
//   for (let i = l; i <= u; i++) {
//     map[toCode(s[i])] ++
//   }
//   return map
// }

// var isMatch = function (smaps, i, j, tmap) {
//   for (let k = 0; k < tmap.length; k++) {
//     const v2 = tmap[k];
//     const v1 = smaps[j+1][k] - smaps[i][k]
//     if (v1 < v2) {
//       // console.log('isMatch fail', { char: fromCode(k), v1, v2, i, j });
//       return false
//     }
//   }
//   // console.log('isMatch success', { char: fromCode(k), v1, v2, i, j });
//   return true
// }

// var mkChars = function (s, t) {
//   CHARS = new Map
//   for (let i = 0; i < s.length; i++) {
//     if (!CHARS.has(s[i])) {
//       CHARS.set(s[i], CHARS.size)
//     }
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (!CHARS.has(t[i])) {
//       CHARS.set(t[i], CHARS.size)
//     }
//   }
//   return CHARS
// }
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   let now = Date.now()
//   mkChars(s, t)
//   console.log(s.length, CHARS.size);
//   const tmap = calc(t, 0, t.length - 1)
//   const smaps = Array(s.length + 1).fill(0).map(() => mkCharsArray())
//   smaps[0] = mkCharsArray()
//   let sum = mkCharsArray()
//   console.log('cost 0', Date.now() - now);
//   now = Date.now()
//   for (let i = 0; i < s.length; i++) {
//     // console.log(toCode(s[i]), s[i]);
//     sum[toCode(s[i])] ++ 
//     // smaps[i+1] = Array.from(sum)
//     const smap = smaps[i+1]
//     for (let j = 0; j < sum.length; j++) {
//       smap[j] = sum[j]
//     }
//   }
//   // console.log(tmap, toCode('f'), tmap[toCode('f')]);
//   console.log('cost 1', Date.now() - now);
//   now = Date.now()
  
//   let min = s.length + 1,
//     minRes
//   let i = 0,
//     j = t.length - 2
//   while (j < s.length) {
//     while (j + 1 < s.length && !isMatch(smaps, i, j, tmap)) {
//       j++
//     }
//     while (j - i + 2 >= t.length && isMatch(smaps, i + 1, j, tmap)) {
//       i++
//     }
//     if (isMatch(smaps, i, j, tmap) && min > j - i + 1) {
//       min = j - i + 1
//       minRes = [i, j]
//     }
//     i++
//     j++
//   }

//   console.log('cost 2', Date.now() - now);
//   now = Date.now()

//   if (!minRes) {
//     return ''
//   }
//   [i, j] = minRes
//   // console.log(s.slice(i, j + 1));
//   return s.slice(i, j + 1)
// };


var CHARS
var mkCharsArray = function () {
  return Array(CHARS.size).fill(0)
}

var toCode = function (c) {
  return CHARS.get(c)
}

var calc = function (s, l, u) {
  const map = mkCharsArray()
  for (let i = l; i <= u; i++) {
    map[toCode(s[i])] ++
  }
  return map
}

var isMatch = function (smaps, i, j, tmap) {
  const jstart = (j+1) * CHARS.size
  const istart = i * CHARS.size
  for (let k = 0; k < tmap.length; k++) {
    const v2 = tmap[k];
    const v1 = smaps[jstart + k] - smaps[istart + k]
    if (v1 < v2) {
      // console.log('isMatch fail', { char: fromCode(k), v1, v2, i, j });
      return false
    }
  }
  // console.log('isMatch success', { char: fromCode(k), v1, v2, i, j });
  return true
}

var mkChars = function (s, t) {
  CHARS = new Map
  for (let i = 0; i < s.length; i++) {
    if (!CHARS.has(s[i])) {
      CHARS.set(s[i], CHARS.size)
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!CHARS.has(t[i])) {
      CHARS.set(t[i], CHARS.size)
    }
  }
  return CHARS
}
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let now = Date.now()
  mkChars(s, t)
  // console.log(s.length, CHARS.size);
  const tmap = calc(t, 0, t.length - 1)
  const smaps = Array((s.length + 1) * CHARS.size).fill(0)
  let sum = mkCharsArray()
  console.log('cost 0', Date.now() - now);
  now = Date.now()
  for (let i = 0; i < s.length; i++) {
    // console.log(toCode(s[i]), s[i]);
    sum[toCode(s[i])] ++ 
    // smaps[i+1] = Array.from(sum)
    const start = (i + 1) * CHARS.size
    for (let j = 0; j < sum.length; j++) {
      smaps[start + j] = sum[j]
    }
  }
  // console.log(tmap, toCode('f'), tmap[toCode('f')]);
  console.log('cost 1', Date.now() - now);
  now = Date.now()
  
  let min = s.length + 1,
    minRes
  let i = 0,
    j = t.length - 2
  while (j < s.length) {
    while (j + 1 < s.length && !isMatch(smaps, i, j, tmap)) {
      j++
    }
    while (j - i + 2 >= t.length && isMatch(smaps, i + 1, j, tmap)) {
      i++
    }
    if (isMatch(smaps, i, j, tmap) && min > j - i + 1) {
      min = j - i + 1
      minRes = [i, j]
    }
    i++
    j++
  }

  console.log('cost 2', Date.now() - now);
  now = Date.now()

  if (!minRes) {
    return ''
  }
  [i, j] = minRes
  // console.log(s.slice(i, j + 1));
  return s.slice(i, j + 1)
};

const assert = require('assert');
assert.equal(minWindow('ADOBECODEBANC', 'ABC'), 'BANC');
assert.equal(minWindow('A', 'ABC'), '');
assert.equal(minWindow('ABC', 'ABC'), 'ABC');
assert.equal(minWindow('ABDASHALSH', 'ABC'), '');
assert.equal(minWindow('ab', 'A'), '');

var { s, t, r } = require('./76_input').sample1
assert.equal(minWindow(s, t), r);
var { s, t, r } = require('./76_input').sample2
assert.equal(minWindow(s, t), r);
var { s, t, r } = require('./76_input').sample3
assert.equal(minWindow(s, t), r);
var { s, t, r } = require('./76_input').sample4
assert.equal(minWindow(s, t), r);
var { s, t, r } = require('./76_input').sample5
assert.equal(minWindow(s, t) , r);
var { s, t, r } = require('./76_input').sample6
assert.equal(minWindow(s, t) , r);
var { s, t, r } = require('./76_input').sample7
assert.equal(minWindow(s, t) , r);