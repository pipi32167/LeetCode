
var swap = function (input, i, j) {
  return input.slice(0, i) + input[j] + input.slice(i + 1, j - i) + input[i] + input.slice(j + 1);
}

var go = function (start, end, cache) {
  // console.log('go', start, end);
  
  if (start === end) {
    return true;
  }

  if (cache[start] === false) {
    return false;
  }

  if (check(start, end)) {
    for(var i = 0; i < start.length - 1; i ++) {
      if (
          start[i] === 'X' && start[i+1] === 'L' || 
          start[i] === 'R' && start[i+1] === 'X'
        ) {
        var newStart = swap(start, i, i+1);
        // console.log({ start, newStart, i });
        
        if (go(newStart, end, cache)) {
          return true;
        }
      }
    }
  }

  cache[start] = false;

  return false;
}

var check = function (start, end) {
  var i = 0;
  for(var i = 0; i < end.length - 2; i++) {
    if (end[i] === 'R' && end[i+1] === 'X' && end[i+2] === 'X' && 
        start[i] === 'X' && start[i+1] === 'R' && start[i+2] === 'X') {
      return false;
    }

    if (end[i] === 'X' && end[i+1] === 'X' && end[i+2] === 'L' && 
        start[i] === 'X' && start[i+1] === 'L' && start[i+2] === 'X') {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
  
  return go(start, end, {})
};

console.log(canTransform("RXXLRXRXL", "XRLXXRRLX"));
console.log(canTransform("XLXRRXXRXX","LXXXXXXRRR"));

console.log(canTransform("XRXXLXLXXXXRXXXXLXXL", "XXRXLXXLXXRLXXXLXXXX"));

console.log(canTransform(
  "XXRXXRXLXLXXRXRXLXXRXXLXXRXXLXXLXLRXLXRX", "XRXRXLXLXXXRXRXXXLRLXXXXRXLXXXLXLXXXXRLR"));
console.log(canTransform(
"XRXXXXLXXXRXXXRXXXXXXRXXXXLXXXXLXXXXLXXXRXXXXLXXXX",
"XXXXRLXXXXXXXXXXXXXRRRLLLXXXXXXXXXXXXXXXXXXXRLXXXX"))