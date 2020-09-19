package leetcode

class Problem_1313 {

    fun decompressRLElist(nums: IntArray): IntArray {

      var ret = arrayListOf<Int>()

      for (i in 0..nums.size - 1 step 2) {
        val freq = nums[i]
        val num = nums[i+1]
        ret.addAll(Array(freq) { num } )
      }
      // println("${ret.joinToString()}")
      return ret.toIntArray()
    }
}