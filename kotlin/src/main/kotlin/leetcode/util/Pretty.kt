package leetcode.pretty

import kotlin.text.StringBuilder

class PrettyPrintingMap<K, V>(map: Map<K, V>) {
  val map = map

  override fun toString() : String {
      var sb = StringBuilder();

      sb.append('{')
      for (i in map) {
        sb.append('\n').append("  ")
        sb.append(i.key)
        sb.append(" => ")
        sb.append(i.value).append(',')
      }
      sb.append('\n').append('}')
      return sb.toString()
  }
}

class PrettyPrintingArray<K>(arr: Array<K>) {
  val arr = arr

  override fun toString() : String {
    var sb = StringBuilder()
    sb.append("[")
    sb.append(arr.joinToString())
    sb.append("]")
    return sb.toString()
  }
}