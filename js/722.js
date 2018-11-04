var indexOf = function (res, s) {

  for (let i = 0; i < res.length; i++) {
    let hit = false
    for (let j = 0; j < s.length; j++) {
      if (res[i + j] !== s[j]) {
        hit = true
        break
      }
    }
    if (!hit) {
      return i
    }
  }
  return -1
}

// console.log(indexOf('abc', 'a') === 0);
// console.log(indexOf('abc', 'ab') === 0);
// console.log(indexOf('abc', 'abc') === 0);
// console.log(indexOf('abc', 'abcd') === -1);
// console.log(indexOf('abc', 'bc') === 1);
// console.log(indexOf('abc', 'c') === 2);
// console.log(indexOf('abc', 'cc') === -1);

var pop = function (res, idx) {

  while (idx < res.length) {
    res.pop()
  }
  return res
}
// console.log(pop('abc'.split(''), 1).join('') === 'a');

/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  source = source.join('\n')
  let res = [], dropLineComment = false, dropBlockComment = false, commentStartIdx
  for (let i = 0; i < source.length; i++) {
    const e = source[i]
    if (dropLineComment) {
      if (e === '\n') {
        dropLineComment = false
        res.push(e)
      } 
      continue
    }

    if (dropBlockComment) {
      if (e === '/' && source[i-1] === '*' && commentStartIdx + 1 < i-1) {
        dropBlockComment = false
      } 
      continue
    }

    if (e === '/' && res[res.length - 1] === '/') {
      res.pop()
      dropLineComment = true
      continue
    } else if (e === '*' && res[res.length - 1] === '/') {
      res.pop()
      dropBlockComment = true
      commentStartIdx = i-1
      continue
    }
    res.push(e)
  }
  res = res.join('').split('\n').filter(e => e.length > 0)
  // console.log('########### SOURCE ##########');
  // console.log(source);
  // console.log('########### RESULT ##########');
  // console.log(res.join('\n'));
  return res
};

var source = [
  "/*Test program */",
  "int main()",
  "{ ",
  "  // variable declaration ",
  "int a, b, c;",
  "/* This is a test",
  "   multiline  ",
  "   comment for ",
  "   testing */",
  "a = b + c;",
  "}"
]
var result = ["int main()", "{ ", "  ", "int a, b, c;", "a = b + c;", "}"]
console.log(removeComments(source).join('\n') === result.join('\n'));
var source = ["a//comment"]
var result = ["a"]
console.log(removeComments(source).join('\n') === result.join('\n'));
var source = ["a/*comment", "line", "more_comment*/b"]
var result = ['ab']
console.log(removeComments(source).join('\n') === result.join('\n'));
var source = ["a//asasas//asasa/*asas*/", "/*line", "more_comment*/b"]
console.log(removeComments(source).join('\n') === ['a', 'b'].join('\n'));
var source = ["struct Node{", "    /*/ declare members;/**/", "    int size;", "    /**/int val;", "};"]
console.log(removeComments(source).join('\n') === ["struct Node{", "    ", "    int size;", "    int val;", "};"].join('\n'));
var source = ["main() {", "  Node* p;", "  /* declare a Node", "  /*float f = 2.0", "   p->val = f;", "   /**/", "   p->val = 1;", "   //*/ cout << success;*/", "}", " "]
var result = ["main() {","  Node* p;","  ","   p->val = 1;","   ","}"," "]
console.log(removeComments(source).join('\n') === result.join('\n'));
var source = ["main() {", "/* here is commments", "  // still comments */", "   double s = 33;", "   cout << s;", "}"]
var result = ["main() {","   double s = 33;","   cout << s;","}"]
console.log(removeComments(source).join('\n') === result.join('\n'));
var source = ["a/* /*/b"]
var result = ["ab"]
console.log(removeComments(source).join('\n') === result.join('\n'));
var source = ["a/*/*/b"]
var result = ["ab"]
console.log(removeComments(source).join('\n') === result.join('\n'));
var source = ["a/**/b"]
var result = ["ab"]
console.log(removeComments(source).join('\n') === result.join('\n'));
var source = ["a//*b//*c","blank","d/*/e*//f"]
var result = ["a","blank","d/f"]
console.log(removeComments(source).join('\n') === result.join('\n'));