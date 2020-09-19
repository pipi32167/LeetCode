package leetcode

class Problem_1281 {

    fun collectNumbers(n: Int): IntArray {      
      var num = n
      var ret = ArrayList<Int>()
      while (num > 0) {
        ret.add(num % 10)
        num /= 10
      }
      return ret.toIntArray()
    }
    
    fun subtractProductAndSum(n: Int): Int {

      val nums = collectNumbers(n)

      return nums.fold(1) { acc, e -> acc * e } - 
             nums.fold(0) { acc, e -> acc + e }
    }
}