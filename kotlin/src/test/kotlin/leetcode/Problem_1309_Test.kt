/*
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package leetcode

import kotlin.test.Test
import kotlin.test.assertEquals
import leetcode.Problem_1309

class Problem_1309_Test {
    @Test fun test() {
        val classUnderTest = Problem_1309()
        assertEquals(classUnderTest.freqAlphabets("10#11#12"), "jkab")
        assertEquals(classUnderTest.freqAlphabets("1326#"), "acz")
        assertEquals(classUnderTest.freqAlphabets("25#"), "y")
    }
}
