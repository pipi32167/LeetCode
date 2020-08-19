const { deepEqual } = require("assert");

/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function(solution, guess) {

  const smap = new Map()
  for (const e of solution) {
    smap.set(e, (smap.get(e) || 0) + 1)
  }
  const ans = [0, 0]
  for (let i = 0; i < guess.length; i++) {
    const v = guess[i]
    if (solution[i] === v) {
      ans[0] ++
      smap.set(v, smap.get(v) - 1)
    } 
  }
  for (let i = 0; i < guess.length; i++) {
    const v = guess[i]
    if(solution[i] !== v && smap.has(v) && smap.get(v) > 0)  {
      ans[1] ++
      smap.set(v, smap.get(v) - 1)
    }
  }
  return ans
};

var solution="RGBY",guess="GGRR",ret = [1,1]
deepEqual(masterMind(solution, guess), ret)