package leetcode

class Problem_1260 {

    fun doShift(grid: Array<IntArray>) {
      val m = grid.size
      val n = grid[0].size
      var firstCol = mutableListOf(grid[m-1][n-1])
      for (i in 1..m-1) {
        firstCol.add(grid[i-1][n-1])
      }
      // println("""firstCol: ${firstCol.joinToString()}""")
      for (i in 0..m-1) {
        for (j in n-1 downTo 1) {
          grid[i][j] = grid[i][j-1]
        }
      }
      // println("""firstCol 2: ${firstCol.joinToString()}""")
      for (i in 0..m-1) {
        grid[i][0] = firstCol[i]
      }
    }

    fun shiftGrid(grid: Array<IntArray>, k: Int): List<List<Int>> {
      
      for (_i in 1..k) {
        doShift(grid)
      }
      val ret = grid.asSequence().map { it.toList() }.toList()
      // println("""${ret.map{ it.joinToString() }.joinToString("\n")}""")
      return ret
    }
}