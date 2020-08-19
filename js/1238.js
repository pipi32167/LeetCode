function flip(num, i) {

  const bit = 1 << i
  if ((num & bit) === bit) {
    num -= bit
  } else {
    num |= bit
  }
  return num
}

function doCircularPermutation0(n, start, tmp1, tmp2, result) {

  tmp1[start] = true
  tmp2.push(start)
  if ((1 << n) === tmp2.length) {
    result["result"] = tmp2.slice(0)
    return
  }

  for (let i = 0; i < n; i++) {
    let start2 = flip(start, i)
    // console.log({start2});

    if (tmp1[start2]) {
      continue
    }
    doCircularPermutation(n, start2, tmp1, tmp2, result)
  }
  tmp1[start] = false
  tmp2.pop()
}

function doCircularPermutation1(n, start, result) {

  let tmp1 = {}, tmp2 = [], stack = []
  let i = 0
  while (true) {
    // console.log(tmp2);
    tmp1[start] = true
    tmp2.push(start)
    if ((1 << n) === tmp2.length) {
      result["result"] = tmp2.slice(0)
      return
    }

    let hit = false
    
    for (; i < n; i++) {
      let start2 = flip(start, i)
      // console.log({start2});
      if (tmp1[start2]) {
        continue
      }

      hit = true
      stack.push([i+1, start])
      i = 0
      start = start2
      break
    }
    if (!hit) {
      tmp1[tmp2.pop()] = false
      const frame = stack.pop() 
      i = frame[0]
      start = frame[1]
    }
  }
}

function doCircularPermutation (n, start, result) {
  
  const ret = []
  const N = 1 << n
  for (let i = 0; i < N; i++) {
    ret.push(i ^ (i>>1))
  }

  const idx = ret.indexOf(start)
  result["result"] = ret.slice(idx).concat(ret.slice(0, idx))
}

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {

  const result = {}
  doCircularPermutation(n, start, result)
  return result["result"]
};

let n = 2,
  start = 3
console.log(circularPermutation(n, start));
n = 3, start = 2
console.log(circularPermutation(n, start));
n = 16, start = 2
console.log(circularPermutation(n, start));