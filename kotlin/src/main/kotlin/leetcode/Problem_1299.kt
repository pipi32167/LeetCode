package leetcode

class Problem_1299 {

    fun replaceElements1(arr: IntArray): IntArray {
      var max = -1
      for (i in arr.size-1 downTo 0) {
        val t = arr[i]
        arr[i] = max
        max = maxOf(max, t)
      }
      // println("${arr.joinToString(','.toString())}")
      return arr
    }

    fun replaceElements(arr: IntArray): IntArray {
      var max = -1
      arr.reverse()
      var ret = arr.map { 
        val t = max
        max = maxOf(max, it)
        t
      }.toIntArray()
      ret.reverse()
      println("${ret.joinToString(','.toString())}")
      return ret
    }
}