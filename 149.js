
/**
 * 使用辗转相除法求最大公约数
 * @param {number} n1 
 * @param {number} n2 
 */
var maxCommonDivisor = function (n1, n2) {
  // console.log('maxCommonDivisor', n1, n2);
  // if (n1 === 0 || n2 === 0) {
  //   return 0
  // }
  if (n1 < n2) {
    var tmp = n1
    n1 = n2
    n2 = tmp
  }
  // console.log({ n1,n2 });
  while(n2 > 0) {
    var t = n1 % n2
    n1 = n2
    n2 = t
  }
  // console.log('maxCommonDivisor', n1);
  return n1
}

var calcSlope = function (p1, p2) {
  var n1 = (p2.y - p1.y)
  var n2 = (p2.x - p1.x)
  var cd = maxCommonDivisor(Math.abs(n1), Math.abs(n2))
  var flag = n1 * n2 > 0 ? 1 : -1
  return (flag * Math.abs(n1) / cd) + '/' + (Math.abs(n2) / cd)
}

var isEqual = function (p1, p2) {
  return p1.x === p2.x && p1.y === p2.y
}

/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 2) {
    return points.length
  }
  let lines = {}
  let max = 0
  for(let i = 0; i < points.length; i++) {
    for(let j = i+1; j < points.length; j++) {
      let slope = calcSlope(points[i], points[j])
      // console.log(slope, points[i], points[j]);
      let lines2 = lines[slope] = lines[slope] || []
      let line
      for(let k = 0; k < lines2.length; k++) {
        let p = points[lines2[k][0]]
        if (isEqual(p, points[j]) || calcSlope(p, points[j]) === slope) {
          line = lines2[k]
          if (line.indexOf(i) < 0) {
            line.push(i)
          }
          if (line.indexOf(j) < 0) {
            line.push(j)
          }
          max = Math.max(max, line.length)
        }
      }
      if (!line) {
        line = [i, j]
        lines2.push(line)
        max = Math.max(max, line.length)
      }
    }
  }
  // console.log(lines);
  return max
};

function Point(data) {
  this.x = data[0]
  this.y = data[1]
}
var points = [[1,1],[2,2],[3,3]].map(e => new Point(e))
console.log(maxPoints(points), 3);
var points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]].map(e => new Point(e))
console.log(maxPoints(points), 4);
var points = [[1,1]].map(e => new Point(e))
console.log(maxPoints(points), 1);
var points = [[1,1],[2,2]].map(e => new Point(e))
console.log(maxPoints(points), 2);
var points = [[0,0],[1,1],[0,0]].map(e => new Point(e))
console.log(maxPoints(points), 3);
var points = [[0,-1],[0,3],[0,-4],[0,-2],[0,-4],[0,0],[0,0],[0,1],[0,-2],[0,4]].map(e => new Point(e))
console.log(maxPoints(points), 10);
var points = [[0,0],[94911151,94911150],[94911152,94911151]].map(e => new Point(e))
console.log(maxPoints(points), 2);
var points = [[3,10],[0,2],[0,2],[3,10]].map(e => new Point(e))
console.log(maxPoints(points), 4);