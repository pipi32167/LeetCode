package leetcode

class Problem_1304 {
  fun sumZero(n: Int): IntArray {

    var n = n
    var ret = ArrayList<Int>()
    if (n % 2 == 1) {
      ret.add(0)
      n -= 1;
    }

    for(i in 1..n step 2) {
      ret.add(i);
      ret.add(-i);
    }

    return ret.toIntArray()
  }
}