var splitToGroup = function (arr) {
  
  let r = {}
  for(let i = 0; i < arr.length; i++) {
    let e = r[arr[i]] = r[arr[i]] || [0]
    let j = 0;
    for (; j < e.length; j++) {
      if (e[j] < arr[i]) {
        e[j]++
        break
      }
    }
    if (j === e.length) {
      e.push(1)
    }
  }
  let r2 = []
  for(let k in r) {
    let count = r[k].length
    let num = Number(k)
    for(let i = 0; i < count; i++) {
      r2.push(num)
    }
  }
  // console.log({ r, r2 });
  return r2
}

// console.log(splitToGroup([2,2,2,3]).join() === [2,2,3].join());
// console.log(splitToGroup([2,2,2,2,3]).join() === [2,2,3].join());


/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    
  var r = splitToGroup(answers.map(e => e + 1))
  return r.reduce((r, e) => r + e, 0)
};

console.log(numRabbits([1,1,2]) === 5);
console.log(numRabbits([1,1,1,2]) === 7);
console.log(numRabbits([10,10,10]) === 11);
console.log(numRabbits([]) === 0);
