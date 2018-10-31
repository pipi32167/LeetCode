var genNewBottoms = function (array, i, prefix, result) {
  // console.log('genNewBottoms', array, i, prefix);
  
  if (i >= array.length) {
    result.push(prefix.map(elem => elem[2]).join(''))
    return
  }
  
  for(var j = 0; j < array[i].length; j++) {
    prefix.push(array[i][j])
    genNewBottoms(array, i+1, prefix, result)
    prefix.pop()
  }
}

/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
  console.log('pyramidTransition', bottom);
  
  var result = []
  for(var i = 0; i < bottom.length - 1; i++) {
    var elem = bottom.slice(i, i+2)
    result[i] = result[i] || [] 
    for(var j = 0; j < allowed.length; j++) {
      if (allowed[j].indexOf(elem) === 0) {
        result[i].push(allowed[j])
      }
    }
    if (result[i].length === 0) {
      return false
    }
    // console.log(i, elem, result[i]);
  }
  if (result.length === 0) {
    return false
  }
  if (bottom.length === 2 && result[0].length > 0) {
    return true
  }
  var newBottoms = []
  genNewBottoms(result, 0, [], newBottoms)
  // console.log({ result, newBottoms });
  
  for(var i = 0; i < newBottoms.length; i++) {
    if (pyramidTransition(newBottoms[i], allowed)) {
      return true
    }
  }
  return false
};

var bottom = "XYZ", allowed = ["XYD", "YZE", "DEA", "FFF"]
// console.log(pyramidTransition(bottom, allowed), true);
var bottom = "XXYX", allowed = ["XXX", "XXY", "XYX", "XYY", "YXZ"]
console.log(pyramidTransition(bottom, allowed), false);