/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let Ss = [S, T]
  let ss = [[], []]
  for (let j = 0; j < Ss.length; j++) {
    const e = Ss[j]
    const s = ss[j]
    for (let i = 0; i < e.length; i++) {
      if (e[i] === '#') {
        s.pop()
      } else {
        s.push(e[i])
      }
    } 
  }
  // console.log(ss);
  
  return ss[0].join('') === ss[1].join('')
};

console.log(backspaceCompare("ab#c", 'ad#c'), true);
console.log(backspaceCompare("ab##", "c#d#"), true);
console.log(backspaceCompare("a##c", "#a#c"), true);
console.log(backspaceCompare("a#c", "b"), false);
