

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split('.').map(Number)
  version2 = version2.split('.').map(Number)
  
  var len = Math.max(version1.length, version2.length)
  if (version1.length < len) {
    version1 = version1.concat(new Array(len - version1.length).fill(0))
  }
  if (version2.length < len) {
    version2 = version2.concat(new Array(len - version2.length).fill(0))
  }
  for(var i = 0; i < len; i++) {
    if (version1[i] < version2[i]) {
      return -1
    } else if (version1[i] > version2[i]) {
      return 1
    }
  }
  return 0
};

console.log(compareVersion('1', '1'), 0);
console.log(compareVersion('1.0', '1'), 0);
console.log(compareVersion('1.0', '1.0.0'), 0);
version1 = "0.1", version2 = "1.1"
console.log(compareVersion(version1, version2), -1);
version1 = "1.0.1", version2 = "1"
console.log(compareVersion(version1, version2), 1);
version1 = "7.5.2.4", version2 = "7.5.3"
console.log(compareVersion(version1, version2), -1);