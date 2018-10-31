var isMatchImpl = function (s, i, p, j, cache = {}) {
  // console.log({ i, j, si: s[i], pj: p[j] });
  var key = [i, j].join(',')
  if (cache[key] !== undefined) {
    return cache[key]
  }
  
  if (s.length === i) {
    for(var k = j; k < p.length; k++) {
      if (p[k].length === 1) {
        cache[key] = false
        return false
      }
    }
    cache[key] = true
    return true
  }
  if (i >= s.length || j >= p.length) {
    if (i >= s.length && j < p.length) {
      for(var k = j; k < p.length; k++) {
        if (p[k].length === 1) {
          cache[key] = false
          return false
        } else if (p[k][0] !== '.' && s[i-1] !== p[k][0]) {
          cache[key] = false
          return false
        }
      }
      cache[key] = true
      return true
    }
    return i === s.length && j === p.length
  }
  if (p[j] === '.') {
    return isMatchImpl(s, i+1, p, j+1, cache)
  } 
  if (p[j].length === 1) {
    if (s[i] !== p[j]) {
      cache[key] = false
      return false
    }
    return isMatchImpl(s, i+1, p, j+1, cache)
  }

  if (p[j] === '.*') {
    for(var step = 0; step <= s.length; step++) { 
      if (isMatchImpl(s, i+step, p, j+1, cache)) {
        return true
      }
    }
  } else {
    if (isMatchImpl(s, i, p, j+1, cache)) {
      return true
    }
    for(var step = 1; step <= s.length; step++) { 
      if (s[i+step-1] !== p[j][0]) {
        break
      }
      if (isMatchImpl(s, i+step, p, j+1, cache)) {
        return true
      }
    }
  }

  cache[key] = false
  return false
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var pGroups = []
  for(var i = p.length - 1; i >= 0; i --) {
    if (p[i] === '*') {
      pGroups.unshift(p[i-1]+p[i])
      i--
    } else {
      pGroups.unshift(p[i])
    }
  }
  // console.log(pGroups);
  return isMatchImpl(s, 0, pGroups, 0)
};

console.log(isMatch('a', 'aa'), false);
console.log(isMatch('aa', 'a*'), true);
console.log(isMatch('a', 'ab*'), true);
console.log(isMatch('', 'a*ca*a*a'), false);
console.log(isMatch('', '.*'), true);
console.log(isMatch('a', '.*'), true);
console.log(isMatch('ab', '.*'), true);
console.log(isMatch('aba', '.*'), true);
console.log(isMatch('', 'a*'), true);
console.log(isMatch('a', 'a*'), true);
console.log(isMatch('ab', 'a*'), false);
console.log(isMatch('aa', 'a*'), true);
console.log(isMatch('aba', 'a*'), false);
console.log(isMatch('aaa', 'a*'), true);
console.log(isMatch('aab', 'c*a*b'), true);
console.log(isMatch('mississippi', 'mis*is*p*.'), false);
