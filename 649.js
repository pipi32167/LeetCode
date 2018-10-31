var getPos = function (pos, len, offset) {
  
  return (pos + offset) % len
}

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    
  var n = senate.length
  var disabled = new Array(n).fill(false)
  while(true) {

    for(var i = 0; i < n; i++) {

      if (disabled[i]) {
        continue
      }
      var party = senate[i]
      for(var j = 0; j < n; j++) {
        var j2 = getPos(j, n, i)
        if (senate[j2] !== party && !disabled[j2]) {
          // console.log({ party });
          disabled[j2] = true
          break
        }
      }
      if (j === n) {
        return party === 'D' ? 'Dire' : 'Radiant'
      }
    }
  }
};

// console.log(predictPartyVictory('RD'), 'Radiant');
// console.log(predictPartyVictory('RDD'), 'Dire');
console.log(predictPartyVictory('DDRRR'), 'Dire');