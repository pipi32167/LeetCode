var isBigger = function (item1, item2) {
  return item1[0] > item2[0] && item1[1] > item2[1]
}

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if (envelopes.length <= 1) {
    return envelopes.length
  }
  
  envelopes = envelopes.sort(function (a, b) {
    return b[0] * b[1] - a[0] * a[1]
  })

  var maxLen = new Array(envelopes.length).fill(1)
  for(var i = envelopes.length - 1; i >= 0; i --) {
    for(var j = i + 1; j < envelopes.length; j++) {
      if (isBigger(envelopes[i], envelopes[j])) {
        maxLen[i] = Math.max(maxLen[i], maxLen[j] + 1)
      }
    }
  }

  return Math.max.apply(null, maxLen)
};

console.log(maxEnvelopes([]), 0);
console.log(maxEnvelopes([[1,2]]), 1);

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]), 3);

var arr = [[15,22],[8,34],[44,40],[9,17],[43,23],[4,7],[20,8],[30,46],[39,36],[45,14],[24,19],[24,36],[31,34],[32,19],[29,13],[16,48],[8,36],[44,2],[11,5],[2,50],[29,6],[18,38],[15,49],[22,37],[6,20],[25,11],[1,50],[19,40],[45,35],[37,21],[4,29],[40,5],[4,49],[1,45],[14,32],[14,37],[23,22],[31,21],[2,36],[43,4],[21,32],[41,2],[44,32],[36,20],[22,45],[3,41],[44,29],[29,33],[42,2],[38,17],[43,26],[30,15],[28,12],[33,30],[49,7],[8,14],[1,9],[41,25],[7,15],[26,32],[11,33],[12,45],[33,7],[16,34],[39,1],[20,49],[50,45],[14,29],[50,41],[1,45],[14,43],[49,20],[41,37],[43,22],[45,19],[20,21],[28,19],[2,1],[7,49],[3,3],[49,48],[34,35],[10,2]]
console.log(maxEnvelopes(arr), 16);
var _ = require('./util.underscore')
var arr = _.range(1, 4200).map(function () {
  return [_.random(1, 1000), _.random(1, 1000)]
})
console.log(maxEnvelopes(arr));

console.log(process.memoryUsage());
