package leetcode

class Problem_1309 {
  fun freqAlphabets(s: String): String {

    var map: MutableMap<String, Char> = mutableMapOf()
    for (i in 1..9) {
      map.put(i.toString(), 'a'.plus(i-1))
    }
    for (i in 10..26) {
      map.put(i.toString() + "#", 'a'.plus(i-1))
    }

    println("${map}")
    var ret = ""
    var i = 0;
    while (i < s.length) {
      println("${s[i]}")
      if (i + 2 < s.length && s[i + 2] == '#') {
        ret += map[s.slice(i..i+2)]
        i += 3
      } else {
        ret += map[s[i].toString()]
        i += 1
      }
    }

    println("${ret}")
    return ret
  }
}