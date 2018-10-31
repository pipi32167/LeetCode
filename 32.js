var findSections = function (s) {
  var l = 0, u = s.length - 1, stack = [], stackIdx = [], sections = []
  for (var i = l; i <= u; i++) {
    switch (s[i]) {
      case '(':
        stack.push('(')
        stackIdx.push(i)
        break
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop()
          var start = stackIdx.pop()
          var end = i
          // console.log({ start, end });
          sections.push([start, end]) 
        }
        break
    }
    // console.log({stack, stackIdx});
  }
  return sections
}

var doMerge = function (sec1, sec2) {
  
  if(sec1[0] <= sec2[0] && sec1[1] >= sec2[1]) {
    sec2[0] = -1
    sec2[1] = -1
    return sec1
  }

  if(sec1[1] <= sec2[1] && sec1[0] >= sec2[0]) {
    sec1[0] = sec2[0]
    sec1[1] = sec2[1]
    sec2[0] = -1
    sec2[1] = -1
    return sec1
  }
  
  if (sec1[1] + 1 >= sec2[0] && sec1[0] <= sec2[0]) {
    sec1[1] = sec2[1]
    sec2[0] = -1
    sec2[1] = -1
    return sec1
  }

  if (sec2[1] + 1 >= sec1[0] && sec2[0] <= sec1[0]) {
    sec1[0] = sec2[0]
    sec2[0] = -1
    sec2[1] = -1
    return sec1
  }

  return sec1
}

// console.log(doMerge([1,2],[3,4]), [1,4]);
// console.log(doMerge([1,3],[3,4]), [1,4]);
// console.log(doMerge([3,4],[1,3]), [1,4]);
// console.log(doMerge([1,4],[2,3]), [1,4]);
// console.log(doMerge([2,3],[1,4]), [1,4]);
// console.log(doMerge([4,5],[1,2]), [4,5]);
// console.log(doMerge([1,2],[4,5]), [1,2]);


var merge = function (sections) {
  for(var i = 0; i < sections.length; i++) {
    var sec1 = sections[i]
    for(var j = i+1; j < sections.length; j++) {
      if (i === j) {
        continue
      }
      var sec2 = sections[j]
      doMerge(sec1, sec2)
    }      
  }

  return sections
}

// console.log(merge([[0,1],[2,3],[4,5]]), [[0,5]]);
// console.log(merge([[0,1],[2,3],[5,6]]), [[0,3],[5,6]]);


var calcMaxLen = function (sections) {
  var maxLen = 0
  for(var i = 0; i < sections.length; i++) {
    var sec = sections[i]
    var len = sec[1] - sec[0] + 1
    if (maxLen < len) {
      maxLen = len
    }
  }
  return maxLen
}

// console.log(calcMaxLen([[0,5]]), 6);
// console.log(calcMaxLen([[0,3],[5,6]]), 4);


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  
  var sections = findSections(s)
  // console.log(sections);
  sections = merge(sections)
  // console.log(sections);
  return calcMaxLen(sections)
}

console.log(longestValidParentheses('(()'), 2);
console.log(longestValidParentheses(')()())'), 4);
console.log(longestValidParentheses('()(()'), 2);
console.log(longestValidParentheses("(()())"), 6);
console.log(longestValidParentheses(")()())"), 4);
console.log(longestValidParentheses("()(())"), 6);