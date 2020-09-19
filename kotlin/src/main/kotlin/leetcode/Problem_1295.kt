package leetcode

class Problem_1295 {

    fun calcNumbers(n: Int): Int {
      
      var cnt = 0
      var num = n
      while (num > 0) {
        cnt += 1
        num /= 10
      }
      return cnt
    }
    
    fun findNumbers(nums: IntArray): Int {

      var ret = 0
      for (num in nums) {
        if (this.calcNumbers(num) % 2 == 0) {
          ret += 1
        }
      }

      return ret
    }
}