
/*
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package leetcode

import kotlin.test.Test
import kotlin.test.assertTrue
import kotlin.test.assertFalse
import leetcode.Problem_1812


class Problem_1812_Test {
    @Test fun test() {
        val classUnderTest = Problem_1812()

        assertFalse(classUnderTest.squareIsWhite("a1"));
        assertTrue(classUnderTest.squareIsWhite("h3"));
        assertFalse(classUnderTest.squareIsWhite("c7"));
    }
}

