var sort = function (str) {
  var res = str;
  return res.split('').sort().join('');
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var groups = {};
  for(var i = 0; i < strs.length; i++) {
    var key = sort(strs[i])
    groups[key] = groups[key] || [];
    groups[key].push(strs[i])
  }

  return Object.keys(groups).map(function (key) {
    return groups[key];
  })
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["", ""]));
