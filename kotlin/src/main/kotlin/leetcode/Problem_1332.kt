package leetcode

class Problem_1332 {
  fun removePalindromeSub(s: String): Int {

    if (s.length == 0) {
      return 0
    }

    var i = 0
    var j = s.length - 1
    var is_palindrome = true
    while(i < j) {
      if (s[i++] != s[j--]) {
        is_palindrome = false
        break
      }
    }
    if(is_palindrome) {
      return 1
    } else {
      return setOf(*s.toCharArray().toTypedArray()).size
    }
  }
}