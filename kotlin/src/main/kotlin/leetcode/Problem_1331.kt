package leetcode

import leetcode.pretty.PrettyPrintingMap
import leetcode.pretty.PrettyPrintingArray

class Problem_1331 {

    fun arrayRankTransform(arr: IntArray): IntArray {

      // println("${PrettyPrintingArray(arr.toList().toTypedArray())}")
      
      var map = arr
        .toSortedSet()
        .asSequence()
        .mapIndexed { idx, value ->  Pair(value as Int, idx + 1) }
        .toMap()
      // println("${PrettyPrintingMap(map)}")

      return arr.map { map.get(it)!! }.toIntArray()
    }
}