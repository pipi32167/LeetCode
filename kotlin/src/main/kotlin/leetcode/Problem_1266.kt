package leetcode
import kotlin.math.abs

class Problem_1266 {
  fun calcMoves(x0: Int, y0: Int, x1: Int, y1: Int): Int {

    var ret = 0
    var x0 = x0
    var y0 = y0
    if (x0 != x1 && y0 != y1) {
      val x_diff = x0 - x1
      val y_diff = y0 - y1
      if (abs(x_diff) < abs(y_diff)) {
        x0 -= x_diff
        y0 -= abs(x_diff) * y_diff / abs(y_diff)
        ret += abs(x_diff)
      } else {
        x0 -= abs(y_diff) * x_diff / abs(x_diff)
        y0 -= y_diff
        ret += abs(y_diff)
      }
    }

    if (x0 != x1) {
      ret += abs(x0 - x1)
    } else if (y0 != y1) {
      ret += abs(y0 - y1)
    }
    return ret
  } 

  fun minTimeToVisitAllPoints(points: Array<IntArray>): Int {
    var ret = 0
    var p0 = points[0]
    for (i in 1..points.size - 1) {
      val p1 = points[i]
      ret += calcMoves(p0[0], p0[1], p1[0], p1[1])
      p0 = p1
    }
    return ret
  }
}