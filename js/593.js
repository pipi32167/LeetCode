var calcLength = function (p1, p2) {
  
  var x = p1[0]-p2[0]
  var y = p1[1]-p2[1]
  return Math.sqrt(x * x + y * y)
}

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  var ps = [p1, p2, p3, p4]
  var lens = []
  for(var i = 0; i < ps.length; i++) {
    lens[i] = new Array(ps.length).fill(-1)
    for(var j = i+1; j < ps.length; j++) {
      lens[i][j] = calcLength(ps[i], ps[j])
      if (lens[i][j] === 0) {
        return false
      }
    }
  }
  return lens[0][1] === lens[2][3] && 
         lens[0][2] === lens[1][3] && 
         lens[0][3] === lens[1][2] && 
         (lens[0][1] === lens[0][2] || lens[0][1] === lens[0][3] || lens[0][2] === lens[0][3])
};
var p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
console.log(validSquare(p1, p2, p3, p4), true);
var p1 = [0,1], p2 = [1,1], p3 = [1,0], p4 = [0,1]
console.log(validSquare(p1, p2, p3, p4), false);
var p1 = [0,0], p2 = [5,0], p3 = [5,4], p4 = [0,4]
console.log(validSquare(p1, p2, p3, p4), false);
var p1 = [0,0], p2 = [0,0], p3 = [0,0], p4 = [0,0]
console.log(validSquare(p1, p2, p3, p4), false);
// console.log(calcLength(p1, p2), calcLength(p3, p4));
// console.log(calcLength(p1, p3), calcLength(p2, p4));
// console.log(calcLength(p1, p4), calcLength(p2, p3));
