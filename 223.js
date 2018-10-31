var calcArea = function (x1, y1, x2, y2) {
  if (x1 > x2 || y1 > y2) {
    return 0
  }
  var height = Math.abs(y2 - y1)
  var length = Math.abs(x2 - x1)

  return height * length
}

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    
  var x1 = Math.max(A, E)
  var y1 = Math.max(B, F)
  var x2 = Math.min(C, G)
  var y2 = Math.min(D, H)

  // console.log({ x1, y1, x2, y2 });
  var area1 = calcArea(A, B, C, D)
  var area2 = calcArea(E, F, G, H)
  var area3 = calcArea(x1, y1, x2, y2)
  return area1 + area2 - area3
};

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2) === 45);
console.log(computeArea(0, 0, 1, 1, -1, -1, 0, 0) === 2);
console.log(computeArea(-2,-2,2,2,3,3,4,4) === 17);

