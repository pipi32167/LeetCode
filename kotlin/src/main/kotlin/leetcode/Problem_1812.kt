package leetcode

class Problem_1812 {
    fun squareIsWhite(coordinates: String): Boolean {
        val i = coordinates[0] - 'a'
        val j = coordinates[1] - '1'
        return (i + j) % 2 == 1
    }
}