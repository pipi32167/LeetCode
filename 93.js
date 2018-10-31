var go = function (s, pos, prefix, result) {
  
  if (prefix.length === 4) {
    if (pos === s.length) {
      result.push(prefix.join('.'))
    } else {
      // abandom invalid result
    }
    return 
  }

  for(var i = 1; i <= 3; i++) {
    var ipPiece = s.slice(pos, pos + i)
    if (Number(ipPiece) >= 256 || i > 1 && (ipPiece[0] === '0' || Number(ipPiece) === 0)) {
      continue
    }
    go(s, pos + i, prefix.concat(ipPiece), result)
  }
}

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    
  var result = []
  go(s, 0, [], result)
  return result
};

console.log(restoreIpAddresses('25525511135'), ["255.255.11.135", "255.255.111.35"]);
console.log(restoreIpAddresses('9525511135'), ["255.255.11.135", "255.255.111.35"]);
console.log(restoreIpAddresses("010010"), ["0.10.0.10","0.100.1.0"]);

